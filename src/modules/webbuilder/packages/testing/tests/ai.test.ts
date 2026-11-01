import { describe, it, expect } from 'vitest';
import { processAiPrompt } from '../../../apps/studio/src/ai/ai-generator';
import { createEmptyProject } from '@webforge/schema';

describe('Autonomous AI Co-Pilot & Schema Modifications', () => {
  it('proposes theme styling transformations based on prompt', () => {
    const project = createEmptyProject('proj-ai', 'AI Test');
    const result = processAiPrompt('Switch to a modern emerald dark theme', project, 'page-home');

    expect(result.changes.length).toBeGreaterThan(0);
    const themeChange = result.changes.find((c) => c.type === 'update_theme');
    expect(themeChange).toBeDefined();

    const modified = themeChange!.apply(project);
    expect(modified.theme.colors.primary).toBe('#10b981');
    expect(modified.theme.mode).toBe('dark');
  });

  it('proposes black and white monochrome theme transformation based on prompt', () => {
    const project = createEmptyProject('proj-ai-bw', 'AI B&W Test');
    const result = processAiPrompt('Switch to black white theme', project, 'page-home');

    expect(result.changes.length).toBeGreaterThan(0);
    const themeChange = result.changes.find((c) => c.type === 'update_theme');
    expect(themeChange).toBeDefined();

    const modified = themeChange!.apply(project);
    expect(modified.theme.colors.background).toBe('#000000');
    expect(modified.theme.colors.primary).toBe('#ffffff');
  });

  it('proposes new database tables with primary keys and RLS policies', () => {
    const project = createEmptyProject('proj-ai-2', 'AI Test 2');
    const result = processAiPrompt('Create an appointments table with date and status', project, 'page-home');

    const dbChange = result.changes.find((c) => c.type === 'add_table');
    expect(dbChange).toBeDefined();

    const modified = dbChange!.apply(project);
    const table = modified.database.tables.find((t) => t.name === 'appointments');
    expect(table).toBeDefined();
    expect(table?.columns.length).toBeGreaterThanOrEqual(3);
    expect(table?.rlsPolicies.length).toBeGreaterThanOrEqual(1);
  });
});
