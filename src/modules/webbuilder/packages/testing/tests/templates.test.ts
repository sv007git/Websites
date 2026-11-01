import { describe, it, expect } from 'vitest';
import { allTemplates, getTemplateById, installTemplate } from '@webforge/template-registry';
import { validateProject } from '@webforge/schema';

describe('Multi-Page Templates Registry & Installation Pipeline', () => {
  it('contains at least 12 complete full-stack website templates', () => {
    expect(allTemplates.length).toBeGreaterThanOrEqual(12);
  });

  it('all 12 templates are multi-page and conform to canonical ProjectSchema', () => {
    allTemplates.forEach((tpl) => {
      expect(tpl.id).toBeDefined();
      expect(tpl.name).toBeDefined();
      expect(tpl.pagesCount).toBeGreaterThanOrEqual(3);
      expect(tpl.project.pages.length).toBeGreaterThanOrEqual(3);

      const val = validateProject(tpl.project);
      expect(val.success).toBe(true);
    });
  });

  it('safely installs a template by cloning and remapping all entity IDs', () => {
    const targetTemplate = allTemplates[0];
    const installed = installTemplate(targetTemplate.id, 'My Custom Cloned Company');

    expect(installed.success).toBe(true);
    expect(installed.project).toBeDefined();

    const proj = installed.project!;
    expect(proj.name).toBe('My Custom Cloned Company');
    // Ensure project ID is distinct from template ID
    expect(proj.id).not.toBe(targetTemplate.project.id);
    // Ensure page IDs are remapped
    expect(proj.pages[0].id).not.toBe(targetTemplate.project.pages[0].id);
    // Ensure page remains valid
    const val = validateProject(proj);
    expect(val.success).toBe(true);
  });
});
