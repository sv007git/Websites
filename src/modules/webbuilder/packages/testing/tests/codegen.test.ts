import { describe, it, expect } from 'vitest';
import {
  generateNextJsProject,
  generatePhpProject,
  generateStaticHtmlProject,
  packageProjectToZipUint8Array,
} from '@webforge/codegen';
import { allTemplates } from '@webforge/template-registry';

describe('Dual Code Generation & Standalone Deliverables', () => {
  const sampleProject = allTemplates[0].project; // Business services template with tables & routes

  it('generates a complete Next.js 14 App Router + Supabase repository (Target A)', () => {
    const files = generateNextJsProject(sampleProject);
    expect(files.length).toBeGreaterThan(5);

    const paths = files.map((f) => f.path);
    expect(paths).toContain('package.json');
    expect(paths).toContain('tsconfig.json');
    expect(paths).toContain('tailwind.config.js');
    expect(paths).toContain('app/layout.tsx');
    expect(paths).toContain('app/page.tsx');
    expect(paths).toContain('lib/supabase/client.ts');
    expect(paths).toContain('supabase/migrations/00001_initial_schema.sql');
    expect(paths).toContain('supabase/seed.sql');

    // Verify SQL migration contains Row Level Security
    const migration = files.find((f) => f.path.includes('initial_schema.sql'))?.content;
    expect(migration).toContain('CREATE TABLE IF NOT EXISTS');
    expect(migration).toContain('ENABLE ROW LEVEL SECURITY');
  });

  it('generates a complete modern PHP 8.x + MySQL application (Target B)', () => {
    const files = generatePhpProject(sampleProject);
    expect(files.length).toBeGreaterThan(5);

    const paths = files.map((f) => f.path);
    expect(paths).toContain('public/index.php');
    expect(paths).toContain('src/Database.php');
    expect(paths).toContain('src/Auth.php');
    expect(paths).toContain('src/Router.php');
    expect(paths).toContain('database/schema.sql');
    expect(paths).toContain('docker-compose.yml');

    const frontController = files.find((f) => f.path === 'public/index.php')?.content;
    expect(frontController).toContain('$router = new Router()');
    expect(frontController).toContain('$router->dispatch()');

    const routerClass = files.find((f) => f.path === 'src/Router.php')?.content;
    expect(routerClass).toContain('class Router');

    const dbClass = files.find((f) => f.path === 'src/Database.php')?.content;
    expect(dbClass).toContain('PDO::ATTR_ERRMODE');

    const mysqlSchema = files.find((f) => f.path === 'database/schema.sql')?.content;
    expect(mysqlSchema).toContain('ENGINE=InnoDB');
  });

  it('generates static HTML files (Target C)', () => {
    const files = generateStaticHtmlProject(sampleProject);
    const paths = files.map((f) => f.path);
    expect(paths).toContain('index.html');
    expect(paths).toContain('README.md');
  });

  it('compiles and packages deliverable into valid ZIP bytes', async () => {
    const zipBytes = await packageProjectToZipUint8Array(sampleProject, 'nextjs');
    expect(zipBytes).toBeDefined();
    expect(zipBytes.length).toBeGreaterThan(100);
    // ZIP magic header is PK\x03\x04
    expect(zipBytes[0]).toBe(0x50); // 'P'
    expect(zipBytes[1]).toBe(0x4b); // 'K'
  });
});
