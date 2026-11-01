import { BlockDefinition, BlockCategory } from './types';
import { navigationBlocks } from './blocks/navigation';
import { heroBlocks } from './blocks/hero';
import { featuresBlocks } from './blocks/features';
import { statsAndSocialBlocks } from './blocks/stats-social';
import { testimonialsAndTeamBlocks } from './blocks/testimonials-team';
import { servicesAndMediaBlocks } from './blocks/services-media';
import { pricingAndCtaBlocks } from './blocks/pricing-cta';
import { formsAndInteractiveBlocks } from './blocks/forms-interactive';
import { ecommerceAndAdminBlocks } from './blocks/ecommerce-admin';
import { footerBlocks } from './blocks/footers';

export const allBlocks: BlockDefinition[] = [
  ...navigationBlocks,
  ...heroBlocks,
  ...featuresBlocks,
  ...statsAndSocialBlocks,
  ...testimonialsAndTeamBlocks,
  ...servicesAndMediaBlocks,
  ...pricingAndCtaBlocks,
  ...formsAndInteractiveBlocks,
  ...ecommerceAndAdminBlocks,
  ...footerBlocks,
];

export const blockRegistryMap = new Map<string, BlockDefinition>();
allBlocks.forEach((block) => {
  blockRegistryMap.set(block.type, block);
});

export function getBlockDefinition(type: string): BlockDefinition | undefined {
  return blockRegistryMap.get(type);
}

export function getBlocksByCategory(category: BlockCategory): BlockDefinition[] {
  return allBlocks.filter((b) => b.category === category);
}

export const blockCategoryLabels: Record<BlockCategory, { label: string; icon: string }> = {
  navigation: { label: 'Headers & Nav', icon: 'Navigation' },
  hero: { label: 'Hero Sections', icon: 'LayoutTemplate' },
  features: { label: 'Feature Grids', icon: 'Grid' },
  stats: { label: 'Stats & Metrics', icon: 'BarChart2' },
  'social-proof': { label: 'Social Proof & Trust', icon: 'ShieldCheck' },
  testimonials: { label: 'Testimonials & Reviews', icon: 'MessageSquare' },
  team: { label: 'Team & Leadership', icon: 'Users' },
  services: { label: 'Services & Solutions', icon: 'Briefcase' },
  media: { label: 'Media & Galleries', icon: 'Image' },
  pricing: { label: 'Pricing Tables', icon: 'CreditCard' },
  cta: { label: 'Calls to Action', icon: 'Sparkles' },
  forms: { label: 'Contact & Lead Forms', icon: 'Mail' },
  interactive: { label: 'Interactive & FAQs', icon: 'HelpCircle' },
  ecommerce: { label: 'Ecommerce & Booking', icon: 'ShoppingBag' },
  admin: { label: 'Dynamic & Admin', icon: 'Database' },
  footers: { label: 'Footers & Sitemaps', icon: 'Layout' },
};
