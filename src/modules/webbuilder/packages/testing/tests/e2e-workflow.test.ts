import { describe, it, expect } from 'vitest';
import { createEmptyProject, validateProject } from '@webforge/schema';
import { allTemplates, installTemplate } from '@webforge/template-registry';
import { allBlocks, getBlockDefinition } from '@webforge/block-registry';
import {
  generateNextJsProject,
  generatePhpProject,
  generateStaticHtmlProject,
  packageProjectToZipUint8Array,
} from '@webforge/codegen';
import { processAiPrompt } from '../../../apps/studio/src/ai/ai-generator';
import JSZip from 'jszip';

describe('WebForge Studio End-to-End Operational Lifecycle Verification', () => {
  it('Step 1: Can create and validate a clean canonical project AST', () => {
    const project = createEmptyProject('proj-e2e-1', 'Enterprise Cloud Portal');
    expect(project.id).toBe('proj-e2e-1');
    expect(project.pages.length).toBe(1);
    expect(project.database.tables.length).toBe(0);

    const val = validateProject(project);
    expect(val.success).toBe(true);
  });

  it('Step 2: Can select and clone each of the 12 multi-page starter templates with isolated entity IDs', () => {
    expect(allTemplates.length).toBeGreaterThanOrEqual(12);

    allTemplates.forEach((tpl) => {
      const installRes = installTemplate(tpl.id, `Cloned ${tpl.name}`);
      expect(installRes.success).toBe(true);
      expect(installRes.project).toBeDefined();

      const cloned = installRes.project!;
      expect(cloned.name).toBe(`Cloned ${tpl.name}`);
      expect(cloned.id).not.toBe(tpl.project.id);
      expect(cloned.pages.length).toBe(tpl.pagesCount);
      expect(cloned.pages[0].id).not.toBe(tpl.project.pages[0].id);

      const val = validateProject(cloned);
      expect(val.success).toBe(true);
    });
  });

  it('Step 3: Can add, edit props, reorder, and remove blocks from the active page', () => {
    const project = createEmptyProject('proj-blocks-e2e', 'Block Builder Test');
    const homePage = project.pages[0];

    // Add Navbar
    homePage.blocks.push({
      id: 'block-nav',
      type: 'navbar-classic',
      name: 'Navigation',
      props: { brandName: 'Acme Test' },
      styles: {},
      hidden: false,
      locked: false,
    });

    // Add Hero
    homePage.blocks.push({
      id: 'block-hero',
      type: 'hero-split',
      name: 'Hero Split',
      props: { title: 'Welcome to Acme Test' },
      styles: {},
      hidden: false,
      locked: false,
    });

    // Add Pricing
    homePage.blocks.push({
      id: 'block-pricing',
      type: 'pricing-tiered',
      name: 'Tiered Pricing',
      props: { title: 'Plans' },
      styles: {},
      hidden: false,
      locked: false,
    });

    expect(homePage.blocks.length).toBe(3);

    // Reorder: Move pricing to middle
    const [removed] = homePage.blocks.splice(2, 1);
    homePage.blocks.splice(1, 0, removed);
    expect(homePage.blocks[1].id).toBe('block-pricing');

    // Update block props
    homePage.blocks[1].props.title = 'Updated Enterprise Pricing';
    expect(homePage.blocks[1].props.title).toBe('Updated Enterprise Pricing');

    // Remove first block
    homePage.blocks.splice(0, 1);
    expect(homePage.blocks.length).toBe(2);

    const val = validateProject(project);
    expect(val.success).toBe(true);
  });

  it('Step 4: Can model PostgreSQL tables, foreign keys, and RLS policies', () => {
    const project = createEmptyProject('proj-data-e2e', 'Database Test');

    // Create companies table
    project.database.tables.push({
      id: 'tbl-comp',
      name: 'companies',
      displayName: 'Client Companies',
      description: 'Corporate client entities',
      columns: [
        { id: 'c-1', name: 'id', type: 'uuid', isPrimary: true, isNullable: false, isUnique: true },
        { id: 'c-2', name: 'name', type: 'text', isPrimary: false, isNullable: false, isUnique: true },
      ],
      rlsPolicies: [
        { id: 'p-1', name: 'Allow all select', command: 'SELECT', role: 'all', using: 'true' },
      ],
      seedData: [{ id: '11111111-1111-1111-1111-111111111111', name: 'OmniCorp Global' }],
    });

    // Create contacts table with foreign key reference
    project.database.tables.push({
      id: 'tbl-contact',
      name: 'contacts',
      displayName: 'Stakeholder Contacts',
      description: 'Key contacts per company',
      columns: [
        { id: 'cc-1', name: 'id', type: 'uuid', isPrimary: true, isNullable: false, isUnique: true },
        { id: 'cc-2', name: 'company_id', type: 'uuid', isPrimary: false, isNullable: false, isUnique: false, references: { table: 'companies', column: 'id', onDelete: 'CASCADE' } },
        { id: 'cc-3', name: 'email', type: 'varchar', isPrimary: false, isNullable: false, isUnique: true },
      ],
      rlsPolicies: [
        { id: 'pol-c-1', name: 'Auth users read contacts', command: 'SELECT', role: 'authenticated', using: 'true' },
      ],
      seedData: [{ id: '22222222-2222-2222-2222-222222222222', company_id: '11111111-1111-1111-1111-111111111111', email: 'john@omnicorp.com' }],
    });

    const val = validateProject(project);
    expect(val.success).toBe(true);

    // Verify Target A (Postgres / Supabase) code generation
    const nextFiles = generateNextJsProject(project);
    const sql = nextFiles.find((f) => f.path.includes('initial_schema.sql'))?.content;
    expect(sql).toContain('REFERENCES public."companies"("id") ON DELETE CASCADE');
    expect(sql).toContain('ALTER TABLE public."contacts" ENABLE ROW LEVEL SECURITY');

    // Verify Target B (MySQL / PHP) code generation
    const phpFiles = generatePhpProject(project);
    const mysqlSql = phpFiles.find((f) => f.path === 'database/schema.sql')?.content;
    expect(mysqlSql).toContain('CONSTRAINT `fk_contacts_company_id` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE');
  });

  it('Step 5: Can process AI natural language instructions and transform schemas safely', () => {
    const project = createEmptyProject('proj-ai-e2e', 'AI Studio Project');
    const aiResult = processAiPrompt('Add a 3-tier pricing table and switch to emerald dark theme', project, 'page-home');

    expect(aiResult.changes.length).toBeGreaterThan(0);
    let updated = project;
    aiResult.changes.forEach((ch) => {
      updated = ch.apply(updated);
    });

    expect(updated.theme.colors.primary).toBe('#10b981');
    const val = validateProject(updated);
    expect(val.success).toBe(true);
  });

  it('Step 6: Can export full project deliverable as a valid ZIP archive containing all required files', async () => {
    const template = allTemplates[1].project; // SaaS Template
    const zipBytes = await packageProjectToZipUint8Array(template, 'nextjs');

    // Load with JSZip and verify contents
    const zip = await JSZip.loadAsync(zipBytes);
    expect(zip.file('package.json')).not.toBeNull();
    expect(zip.file('app/page.tsx')).not.toBeNull();
    expect(zip.file('supabase/migrations/00001_initial_schema.sql')).not.toBeNull();
    expect(zip.file('README.md')).not.toBeNull();

    const packageJsonContent = await zip.file('package.json')?.async('string');
    const parsedPkg = JSON.parse(packageJsonContent!);
    expect(parsedPkg.dependencies['next']).toBeDefined();
    expect(parsedPkg.dependencies['@supabase/supabase-js']).toBeDefined();
  });
});
