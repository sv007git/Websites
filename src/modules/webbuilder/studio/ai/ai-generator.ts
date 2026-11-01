import { Project, monochromeDarkPreset, monochromeLightPreset } from '@webforge/schema';

export interface AiProposedChange {
  id: string;
  type: 'add_block' | 'update_theme' | 'add_table' | 'add_page';
  summary: string;
  details: string;
  apply: (project: Project) => Project;
}

export interface AiAnalysisResult {
  message: string;
  changes: AiProposedChange[];
}

export function processAiPrompt(prompt: string, currentProject: Project, activePageId: string): AiAnalysisResult {
  const p = prompt.toLowerCase();
  const changes: AiProposedChange[] = [];
  let responseMessage = '';

  // 1. Theme / Styling transformations
  if (p.includes('theme') || p.includes('dark') || p.includes('color') || p.includes('cyber') || p.includes('emerald') || p.includes('minimal') || p.includes('black') || p.includes('white') || p.includes('monochrome') || p.includes('noir') || p.includes('bw')) {
    if (p.includes('black') || p.includes('white') || p.includes('monochrome') || p.includes('noir') || p.includes('bw')) {
      const isLight = p.includes('light') || p.includes('clean');
      const label = isLight ? 'Monochrome Minimalist (White & Black) Palette' : 'Monochrome Noir (Black & White) Palette';
      const preset = isLight ? monochromeLightPreset : monochromeDarkPreset;

      changes.push({
        id: `change-theme-${Date.now()}`,
        type: 'update_theme',
        summary: `Transform Global Design Theme to ${label}`,
        details: isLight
          ? 'Applies stark white background (#ffffff), crisp black buttons (#000000), and zinc borders (#e4e4e7).'
          : 'Applies pure pitch black (#000000), stark white primary accents (#ffffff), and dark zinc borders (#27272a).',
        apply: (proj) => {
          const clone = JSON.parse(JSON.stringify(proj));
          clone.theme = { ...clone.theme, ...preset };
          return clone;
        },
      });

      responseMessage = `I've prepared a ${label} design transformation for your project with high-contrast tokens. Review and apply below.`;
    } else {
      let primary = '#3b82f6';
      let accent = '#f59e0b';
      let mode: 'light' | 'dark' = 'dark';
      let label = 'Modern Dark Palette';

      if (p.includes('emerald') || p.includes('green')) {
        primary = '#10b981';
        accent = '#38bdf8';
        label = 'Emerald Tech Palette';
      } else if (p.includes('cyber') || p.includes('neon') || p.includes('purple')) {
        primary = '#8b5cf6';
        accent = '#ec4899';
        label = 'Cyber Neon Palette';
      } else if (p.includes('light')) {
        mode = 'light';
        primary = '#2563eb';
        label = 'Clean Minimalist Light Palette';
      }

      changes.push({
        id: `change-theme-${Date.now()}`,
        type: 'update_theme',
        summary: `Transform Global Design Theme to ${label}`,
        details: `Sets primary color to ${primary}, accent to ${accent}, and mode to ${mode}.`,
        apply: (proj) => {
          const clone = JSON.parse(JSON.stringify(proj));
          clone.theme.colors.primary = primary;
          clone.theme.colors.accent = accent;
          clone.theme.mode = mode;
          return clone;
        },
      });

      responseMessage = `I've prepared a global design system transformation to ${label}. Review and apply below.`;
    }
  }

  // 2. Add Testimonials
  else if (p.includes('testimonial') || p.includes('review') || p.includes('social proof')) {
    changes.push({
      id: `change-block-test-${Date.now()}`,
      type: 'add_block',
      summary: 'Add Customer Reviews & Testimonials Grid',
      details: 'Inserts a 3-card customer review section with verified client praise and star ratings.',
      apply: (proj) => {
        const clone = JSON.parse(JSON.stringify(proj));
        const page = clone.pages.find((pg: any) => pg.id === activePageId) || clone.pages[0];
        if (page) {
          page.blocks.push({
            id: `block-ai-test-${Date.now()}`,
            type: 'testimonials-grid',
            name: 'Client Reviews (AI Generated)',
            props: {
              title: 'Trusted by High-Velocity Engineering Teams',
              tagline: 'PROVEN CLIENT RESULTS',
            },
            styles: { paddingTop: '4rem', paddingBottom: '4rem' },
            hidden: false,
            locked: false,
          });
        }
        return clone;
      },
    });

    responseMessage = `I have drafted a responsive Testimonials Section with 3 client cards and star ratings.`;
  }

  // 3. Add Pricing
  else if (p.includes('pricing') || p.includes('tiers') || p.includes('subscription')) {
    changes.push({
      id: `change-block-pricing-${Date.now()}`,
      type: 'add_block',
      summary: 'Add 3-Tier Pricing Table with Monthly/Annual Toggle',
      details: 'Inserts pricing table with starter, pro, and enterprise tiers and annual discount switcher.',
      apply: (proj) => {
        const clone = JSON.parse(JSON.stringify(proj));
        const page = clone.pages.find((pg: any) => pg.id === activePageId) || clone.pages[0];
        if (page) {
          page.blocks.push({
            id: `block-ai-price-${Date.now()}`,
            type: 'pricing-tiered',
            name: 'Tiered Pricing (AI Generated)',
            props: {
              title: 'Predictable Full-Stack Pricing',
              tagline: 'ZERO VENDOR LOCK-IN',
            },
            styles: { paddingTop: '4rem', paddingBottom: '4rem' },
            hidden: false,
            locked: false,
          });
        }
        return clone;
      },
    });

    responseMessage = `I've constructed a 3-tier pricing matrix with monthly and annual billing options.`;
  }

  // 4. Add Database Table
  else if (p.includes('database') || p.includes('table') || p.includes('schema') || p.includes('appointment') || p.includes('inventory') || p.includes('contact')) {
    const tableName = p.includes('appointment') ? 'appointments' : p.includes('inventory') ? 'inventory_items' : 'customer_leads';
    changes.push({
      id: `change-db-${Date.now()}`,
      type: 'add_table',
      summary: `Create PostgreSQL Table: public.${tableName}`,
      details: `Generates DDL, UUID primary key, indexes, and Row Level Security policy for public.${tableName}.`,
      apply: (proj) => {
        const clone = JSON.parse(JSON.stringify(proj));
        clone.database.tables.push({
          id: `tbl-ai-${Date.now()}`,
          name: tableName,
          displayName: tableName.replace(/_/g, ' ').toUpperCase(),
          description: `Generated by AI Co-Pilot: ${prompt}`,
          columns: [
            { id: 'c-1', name: 'id', type: 'uuid', isPrimary: true, isNullable: false, isUnique: true },
            { id: 'c-2', name: 'title', type: 'text', isPrimary: false, isNullable: false, isUnique: false },
            { id: 'c-3', name: 'status', type: 'varchar', isPrimary: false, isNullable: false, isUnique: false, defaultValue: "'active'" },
            { id: 'c-4', name: 'created_at', type: 'timestamp', isPrimary: false, isNullable: false, isUnique: false, defaultValue: 'now()' },
          ],
          rlsPolicies: [
            { id: 'p-1', name: `Allow authenticated on ${tableName}`, command: 'ALL', role: 'authenticated', using: 'true' },
          ],
          seedData: [
            { id: 'rec-ai-1', title: 'Sample AI Record', status: 'active' },
          ],
        });
        return clone;
      },
    });

    responseMessage = `I've synthesized a new normalized database model: public.${tableName} with Row Level Security.`;
  }

  // Fallback: General Enhancement
  else {
    changes.push({
      id: `change-general-${Date.now()}`,
      type: 'add_block',
      summary: 'Add High-Impact Conversion Section',
      details: `Based on your request "${prompt}", adding a high-contrast Call to Action section.`,
      apply: (proj) => {
        const clone = JSON.parse(JSON.stringify(proj));
        const page = clone.pages.find((pg: any) => pg.id === activePageId) || clone.pages[0];
        if (page) {
          page.blocks.push({
            id: `block-ai-gen-${Date.now()}`,
            type: 'cta-banner',
            name: 'Conversion Banner (AI Generated)',
            props: {
              title: 'Accelerate Your Next Milestone',
              subtitle: 'Built with WebForge Studio autonomous AI engine.',
            },
            styles: { paddingTop: '4rem', paddingBottom: '4rem' },
            hidden: false,
            locked: false,
          });
        }
        return clone;
      },
    });

    responseMessage = `I analyzed your request: "${prompt}". Here is the proposed modification specification.`;
  }

  return {
    message: responseMessage,
    changes,
  };
}
