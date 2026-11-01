import { createEmptyProject, Project } from '@webforge/schema';

export function createMockTestProject(): Project {
  const project = createEmptyProject('test-project-1', 'Test Application');
  
  // Add a sample table
  project.database.tables.push({
    id: 'tbl-test-1',
    name: 'test_records',
    displayName: 'Test Records',
    description: 'Automated test entities',
    columns: [
      { id: 'c-1', name: 'id', type: 'uuid', isPrimary: true, isNullable: false, isUnique: true },
      { id: 'c-2', name: 'title', type: 'text', isPrimary: false, isNullable: false, isUnique: false },
      { id: 'c-3', name: 'created_at', type: 'timestamp', isPrimary: false, isNullable: false, isUnique: false, defaultValue: 'now()' },
    ],
    rlsPolicies: [
      { id: 'p-1', name: 'Allow read', command: 'SELECT', role: 'all', using: 'true' },
    ],
    seedData: [
      { id: 'rec-1', title: 'Sample Unit Record' },
    ],
  });

  return project;
}
