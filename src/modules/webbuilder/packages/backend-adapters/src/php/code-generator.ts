import { DatabaseSchemaDefinition, TableDefinition, ApiRouteDefinition } from '@webforge/schema';

export function generatePhpDatabaseClass(): string {
  return `<?php
declare(strict_types=1);

namespace App;

use PDO;
use PDOException;

class Database {
    private static ?PDO $instance = null;

    public static function getConnection(): PDO {
        if (self::$instance === null) {
            $host = getenv('DB_HOST') ?: '127.0.0.1';
            $port = getenv('DB_PORT') ?: '3306';
            $dbname = getenv('DB_NAME') ?: 'webforge_app';
            $user = getenv('DB_USER') ?: 'root';
            $pass = getenv('DB_PASS') ?: '';
            $charset = 'utf8mb4';

            $dsn = "mysql:host=$host;port=$port;dbname=$dbname;charset=$charset";
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ];

            try {
                self::$instance = new PDO($dsn, $user, $pass, $options);
            } catch (PDOException $e) {
                http_response_code(500);
                header('Content-Type: application/json');
                echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
                exit;
            }
        }

        return self::$instance;
    }
}
`;
}

export function generatePhpAuthClass(): string {
  return `<?php
declare(strict_types=1);

namespace App;

class Auth {
    public static function startSession(): void {
        if (session_status() === PHP_SESSION_NONE) {
            session_set_cookie_params([
                'lifetime' => 86400 * 7,
                'path' => '/',
                'domain' => '',
                'secure' => isset($_SERVER['HTTPS']),
                'httponly' => true,
                'samesite' => 'Lax',
            ]);
            session_start();
        }
    }

    public static function getCsrfToken(): string {
        self::startSession();
        if (empty($_SESSION['csrf_token'])) {
            $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
        }
        return $_SESSION['csrf_token'];
    }

    public static function verifyCsrfToken(?string $token): bool {
        self::startSession();
        if (empty($_SESSION['csrf_token']) || empty($token)) {
            return false;
        }
        return hash_equals($_SESSION['csrf_token'], $token);
    }

    public static function getCurrentUser(): ?array {
        self::startSession();
        return $_SESSION['user'] ?? null;
    }

    public static function hashPassword(string $password): string {
        return password_hash($password, PASSWORD_BCRYPT, ['cost' => 12]);
    }

    public static function verifyPassword(string $password, string $hash): bool {
        return password_verify($password, $hash);
    }
}
`;
}

export function generatePhpRouterClass(): string {
  return `<?php
declare(strict_types=1);

namespace App;

class Router {
    private array $routes = [];

    public function add(string $method, string $path, callable|array $handler): void {
        $this->routes[] = [
            'method' => strtoupper($method),
            'path' => $path,
            'handler' => $handler,
        ];
    }

    public function dispatch(): void {
        $method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
        $uri = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);

        foreach ($this->routes as $route) {
            if ($route['method'] === $method && $route['path'] === $uri) {
                call_user_func($route['handler']);
                return;
            }
        }

        http_response_code(404);
        header('Content-Type: application/json');
        echo json_encode(['error' => 'Route not found: ' . $uri]);
    }
}
`;
}

export function generatePhpFrontController(database: DatabaseSchemaDefinition): string {
  return `<?php
declare(strict_types=1);

require_once __DIR__ . '/../src/Database.php';
require_once __DIR__ . '/../src/Auth.php';
require_once __DIR__ . '/../src/Router.php';

use App\\Database;
use App\\Auth;
use App\\Router;

Auth::startSession();
$router = new Router();

// CORS & JSON helper
function jsonResponse(mixed $data, int $status = 200): void {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data);
    exit;
}

// Health check
$router->add('GET', '/api/health', function() {
    jsonResponse(['status' => 'ok', 'app' => 'WebForge PHP Runtime', 'timestamp' => time()]);
});

// Dynamic CRUD endpoints for defined database tables
${database.tables
  .map(
    (tbl) => `
// Table: ${tbl.name}
$router->add('GET', '/api/${tbl.name}', function() {
    $pdo = Database::getConnection();
    $stmt = $pdo->query('SELECT * FROM \`${tbl.name}\` ORDER BY id DESC LIMIT 100');
    jsonResponse(['data' => $stmt->fetchAll()]);
});

$router->add('POST', '/api/${tbl.name}', function() {
    $input = json_decode(file_get_contents('php://input'), true) ?? $_POST;
    if (empty($input)) {
        jsonResponse(['error' => 'Invalid or empty request payload'], 400);
    }
    $pdo = Database::getConnection();
    $columns = array_keys($input);
    $escapedCols = implode(', ', array_map(fn($c) => "\`" . str_replace('\`', '', $c) . "\`", $columns));
    $placeholders = implode(', ', array_map(fn($c) => ':' . $c, $columns));

    $stmt = $pdo->prepare("INSERT INTO \`${tbl.name}\` ($escapedCols) VALUES ($placeholders)");
    $stmt->execute($input);
    jsonResponse(['success' => true, 'id' => $pdo->lastInsertId()], 201);
});
`
  )
  .join('\n')}

$router->dispatch();
`;
}
