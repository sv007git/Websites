import { describe, it, expect } from 'vitest';
import { createEmptyProject, validateProject, ProjectSchema } from '@webforge/schema';

describe('Canonical Project Schema & Validation', () => {
  it('creates a valid empty project conforming to ProjectSchema', () => {
    const project = createEmptyProject('test-proj-1', 'Test Architecture Project');
    expect(project.id).toBe('test-proj-1');
    expect(project.name).toBe('Test Architecture Project');
    expect(project.pages.length).toBeGreaterThan(0);
    expect(project.pages[0].isHome).toBe(true);

    const validation = validateProject(project);
    expect(validation.success).toBe(true);
    expect(validation.data).toBeDefined();
  });

  it('validates schema with relational database tables and RLS policies', () => {
    const project = createEmptyProject('test-db-proj', 'Data Project');
    project.database.tables.push({
      id: 'tbl-users',
      name: 'users',
      displayName: 'System Users',
      description: 'Application accounts',
      columns: [
        { id: 'c1', name: 'id', type: 'uuid', isPrimary: true, isNullable: false, isUnique: true },
        { id: 'c2', name: 'email', type: 'varchar', isPrimary: false, isNullable: false, isUnique: true },
        { id: 'c3', name: 'created_at', type: 'timestamp', isPrimary: false, isNullable: false, isUnique: false, defaultValue: 'now()' },
      ],
      rlsPolicies: [
        { id: 'pol-1', name: 'Users read own data', command: 'SELECT', role: 'authenticated', using: 'auth.uid() = id' },
      ],
      seedData: [{ id: 'u1', email: 'admin@webforge.studio' }],
    });

    const validation = validateProject(project);
    expect(validation.success).toBe(true);
    expect(validation.data?.database.tables[0].columns.length).toBe(3);
  });

  it('fails validation gracefully if required fields are missing', () => {
    const invalidData = {
      version: '1.0.0',
      // missing id, name, slug, pages
    };
    const validation = validateProject(invalidData);
    expect(validation.success).toBe(false);
    expect(validation.error).toBeDefined();
  });
});
