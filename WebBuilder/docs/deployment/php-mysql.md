# WebForge Studio: Deploying PHP 8.x + MySQL Applications (Target B)

This guide covers deployment options for applications exported with **Target B (Clean PHP 8.x MVC + MySQL / MariaDB)**.

---

## 1. Option A: Containerized Docker Deployment (Recommended)

Every PHP export includes a production-ready `docker-compose.yml`.

```bash
# Extract the ZIP
unzip your-app-php.zip
cd your-app-php

# Launch PHP 8.2 Apache + MySQL 8.0 in detached mode
docker compose up -d

# Check running status
docker compose ps
```

Visit `http://localhost:8080`. MySQL is automatically initialized with the generated `database/schema.sql` and `database/seed.sql`.

---

## 2. Option B: Self-Hosted LAMP / LEMP Server / cPanel

### Server Requirements
* **PHP**: 8.1, 8.2, or 8.3 with extensions: `pdo`, `pdo_mysql`, `session`, `json`
* **MySQL**: 8.0+ or MariaDB 10.5+
* **Web Server**: Apache with `mod_rewrite` enabled, or Nginx

### Apache Configuration
Set your virtual host document root to the `public/` directory:
```apache
<VirtualHost *:80>
    ServerName yourdomain.com
    DocumentRoot /var/www/your-app/public

    <Directory /var/www/your-app/public>
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

### Database Import
```bash
mysql -u your_user -p your_database < database/schema.sql
mysql -u your_user -p your_database < database/seed.sql
```

### Environment Configuration
Export your database connection variables in your environment, Apache virtual host, or modify defaults in `src/Database.php`:
```bash
export DB_HOST=localhost
export DB_NAME=your_database
export DB_USER=your_user
export DB_PASS=your_password
```
