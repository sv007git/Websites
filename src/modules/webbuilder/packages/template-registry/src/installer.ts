import { Project, validateProject } from '@webforge/schema';
import { TemplateDefinition } from './types';
import { businessServicesTemplate, saasProductTemplate, digitalAgencyTemplate, personalPortfolioTemplate } from './templates/templates-part1';
import { restaurantTemplate, educationCoursesTemplate, blogEditorialTemplate, ecommerceStorefrontTemplate } from './templates/templates-part2';
import { appointmentBookingTemplate, crmApplicationTemplate, erpAdministrationTemplate, directoryMarketplaceTemplate } from './templates/templates-part3';

export const allTemplates: TemplateDefinition[] = [
  businessServicesTemplate,
  saasProductTemplate,
  digitalAgencyTemplate,
  personalPortfolioTemplate,
  restaurantTemplate,
  educationCoursesTemplate,
  blogEditorialTemplate,
  ecommerceStorefrontTemplate,
  appointmentBookingTemplate,
  crmApplicationTemplate,
  erpAdministrationTemplate,
  directoryMarketplaceTemplate,
];

export const templateMap = new Map<string, TemplateDefinition>();
allTemplates.forEach((tpl) => {
  templateMap.set(tpl.id, tpl);
});

export function getTemplateById(id: string): TemplateDefinition | undefined {
  return templateMap.get(id);
}

/**
 * Installs a template by deep cloning its canonical project schema,
 * rewriting internal IDs (pages, blocks, tables, columns, policies, routes),
 * and applying custom project metadata.
 */
export function installTemplate(templateId: string, projectName?: string): { success: boolean; project?: Project; error?: string } {
  const template = getTemplateById(templateId);
  if (!template) {
    return { success: false, error: `Template not found: ${templateId}` };
  }

  try {
    const rawClone: Project = JSON.parse(JSON.stringify(template.project));
    const now = new Date().toISOString();
    const finalName = projectName || `${template.name} Project`;
    const newProjectId = `proj-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const newSlug = finalName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    rawClone.id = newProjectId;
    rawClone.name = finalName;
    rawClone.slug = newSlug;
    rawClone.createdAt = now;
    rawClone.updatedAt = now;

    // Rewrite Page and Block IDs safely
    rawClone.pages.forEach((page, pIdx) => {
      page.id = `page-${pIdx + 1}-${Date.now().toString(36)}`;
      page.blocks.forEach((block, bIdx) => {
        block.id = `block-${pIdx + 1}-${bIdx + 1}-${Math.random().toString(36).substring(2, 7)}`;
      });
    });

    // Rewrite Database IDs
    if (rawClone.database && rawClone.database.tables) {
      rawClone.database.tables.forEach((table, tIdx) => {
        table.id = `tbl-${tIdx + 1}-${Date.now().toString(36)}`;
        table.columns.forEach((col, cIdx) => {
          col.id = `col-${tIdx + 1}-${cIdx + 1}-${Math.random().toString(36).substring(2, 7)}`;
        });
        table.rlsPolicies.forEach((pol, polIdx) => {
          pol.id = `pol-${tIdx + 1}-${polIdx + 1}-${Math.random().toString(36).substring(2, 7)}`;
        });
      });
    }

    if (rawClone.database && rawClone.database.apis) {
      rawClone.database.apis.forEach((api, aIdx) => {
        api.id = `api-${aIdx + 1}-${Date.now().toString(36)}`;
      });
    }

    const validated = validateProject(rawClone);
    if (!validated.success || !validated.data) {
      return { success: false, error: `Validation failure during template install: ${validated.error}` };
    }

    return { success: true, project: validated.data };
  } catch (err: any) {
    return { success: false, error: err.message || 'Failed to install template' };
  }
}
