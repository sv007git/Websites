import React from 'react';
import { BlockDefinition, BlockRenderProps } from '../types';
import { Code, Database, Zap, Shield, Sparkles, Layers, RefreshCw, Cpu, Check, ArrowRight } from 'lucide-react';

// 1. 3-Column Feature Cards
export const Features3ColBlock: BlockDefinition = {
  type: 'features-3col',
  name: '3-Column Feature Grid',
  category: 'features',
  description: 'Three high-impact cards with icons, bold titles, descriptive copy, and CTA links.',
  iconName: 'Grid',
  defaultProps: {
    tagline: 'EVERYTHING YOU NEED',
    title: 'Architected for Scale and Speed',
    description: 'Stop gluing together dozens of fragile tools. Build cohesive, secure systems from canvas to database.',
    features: [
      {
        icon: 'Zap',
        title: 'Instant Visual Authoring',
        description: 'Drag and configure over 50 production-grade blocks with live responsive preview on desktop, tablet, and mobile.',
        linkText: 'Explore Blocks',
        linkHref: '#',
      },
      {
        icon: 'Database',
        title: 'Visual Database & RLS Designer',
        description: 'Model tables, foreign keys, indexes, and write Postgres Row Level Security policies without touching raw SQL.',
        linkText: 'Explore Data Studio',
        linkHref: '#',
      },
      {
        icon: 'Code',
        title: 'Dual Code Generation',
        description: 'Export 100% standalone, clean Next.js + Supabase code or modern PHP 8.x + MySQL code. Never pay builder rent.',
        linkText: 'Explore Code Gen',
        linkHref: '#',
      },
    ],
  },
  fields: {
    tagline: { type: 'text', label: 'Top Tagline' },
    title: { type: 'text', label: 'Section Title' },
    description: { type: 'textarea', label: 'Section Description' },
  },
  render: ({ props }: BlockRenderProps) => {
    const getIcon = (name: string) => {
      switch (name) {
        case 'Database':
          return <Database className="w-6 h-6 text-blue-500" />;
        case 'Code':
          return <Code className="w-6 h-6 text-indigo-500" />;
        default:
          return <Zap className="w-6 h-6 text-amber-500" />;
      }
    };

    return (
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            {props.tagline && (
              <span className="text-xs uppercase tracking-widest font-semibold text-blue-600 dark:text-blue-400">
                {props.tagline}
              </span>
            )}
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {props.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
              {props.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {(props.features || []).map((feat: any, idx: number) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                    {getIcon(feat.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
                {feat.linkText && (
                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-700/60">
                    <a
                      href={feat.linkHref || '#'}
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                    >
                      {feat.linkText} <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
};

// 2. Bento Asymmetric Grid
export const FeaturesBentoBlock: BlockDefinition = {
  type: 'features-bento',
  name: 'Bento Grid Features',
  category: 'features',
  description: 'Asymmetric bento box layout highlighting diverse capabilities with visual depth.',
  iconName: 'LayoutGrid',
  defaultProps: {
    tagline: 'MODULAR BY DESIGN',
    title: 'The Next Generation Developer Experience',
    bentoItem1: {
      title: 'Full-Stack Postgres Schema Engine',
      desc: 'Define tables, foreign keys, and indexes directly with real-time SQL preview.',
    },
    bentoItem2: {
      title: '99.99% Deploy Reliability',
      stat: '0.2s',
      statLabel: 'Average generation latency',
    },
    bentoItem3: {
      title: 'AI Conversational Co-Pilot',
      desc: 'Instruct the AI to transform themes, create schemas, or add sections with confidence.',
    },
    bentoItem4: {
      title: 'Zero Private Runtime Lock-in',
      desc: 'No hidden npm dependencies. Your exported code compiles with standard Next.js or PHP 8.',
    },
  },
  fields: {
    tagline: { type: 'text', label: 'Tagline' },
    title: { type: 'text', label: 'Section Title' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            {props.tagline}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {props.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-indigo-950/60 p-8 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 inline-block">
                <Database className="w-5 h-5" />
              </span>
              <h3 className="text-2xl font-bold">{props.bentoItem1.title}</h3>
              <p className="text-sm text-slate-300 max-w-lg leading-relaxed">
                {props.bentoItem1.desc}
              </p>
            </div>
            <div className="mt-8 p-3 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-indigo-300">
              CREATE TABLE users (id UUID PRIMARY KEY, role TEXT NOT NULL);
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 inline-block">
                <Zap className="w-5 h-5" />
              </span>
              <h3 className="text-lg font-bold mt-4">{props.bentoItem2.title}</h3>
            </div>
            <div className="mt-6">
              <span className="text-5xl font-extrabold text-emerald-400">{props.bentoItem2.stat}</span>
              <p className="text-xs text-slate-400 mt-1">{props.bentoItem2.statLabel}</p>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 space-y-4">
            <span className="p-2 rounded-lg bg-amber-500/20 text-amber-400 inline-block">
              <Sparkles className="w-5 h-5" />
            </span>
            <h3 className="text-lg font-bold">{props.bentoItem3.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{props.bentoItem3.desc}</p>
          </div>

          <div className="md:col-span-2 bg-slate-900 p-8 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="p-2 rounded-lg bg-purple-500/20 text-purple-400 inline-block">
                <Cpu className="w-5 h-5" />
              </span>
              <h3 className="text-xl font-bold">{props.bentoItem4.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{props.bentoItem4.desc}</p>
            </div>
            <div className="flex gap-3 mt-6">
              <span className="px-3 py-1 rounded-md bg-slate-800 text-xs font-mono text-slate-300 border border-slate-700">Next.js 14+</span>
              <span className="px-3 py-1 rounded-md bg-slate-800 text-xs font-mono text-slate-300 border border-slate-700">Supabase</span>
              <span className="px-3 py-1 rounded-md bg-slate-800 text-xs font-mono text-slate-300 border border-slate-700">PHP 8.2</span>
              <span className="px-3 py-1 rounded-md bg-slate-800 text-xs font-mono text-slate-300 border border-slate-700">MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  ),
};

// 3. Alternating Rows Feature
export const FeaturesAlternatingBlock: BlockDefinition = {
  type: 'features-alternating',
  name: 'Alternating Feature Rows',
  category: 'features',
  description: 'Detailed feature presentation alternating left and right media alignments.',
  iconName: 'Columns',
  defaultProps: {
    sectionHeading: 'Crafted for Technical Excellence',
    rows: [
      {
        badge: 'DATA ARCHITECTURE',
        title: 'Design Relational Data Without Complex Config',
        description: 'Create normalized relational schemas, configure foreign keys, set cascade rules, and visually manage database migrations.',
        bullets: ['Automated primary key & timestamp fields', 'Foreign key dropdown relationships', 'SQL DDL instant generator'],
        imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
        reversed: false,
      },
      {
        badge: 'SECURITY & GOVERNANCE',
        title: 'Built-in Row Level Security and Role Permissions',
        description: 'Never deploy insecure queries. Set declarative access control policies for anonymous visitors, authenticated members, and administrators.',
        bullets: ['Granular table-level policies', 'Authentication guard generation', 'CSRF protection for PHP target'],
        imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
        reversed: true,
      },
    ],
  },
  fields: {
    sectionHeading: { type: 'text', label: 'Section Heading' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {props.sectionHeading && (
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center tracking-tight">
            {props.sectionHeading}
          </h2>
        )}

        {(props.rows || []).map((row: any, i: number) => (
          <div
            key={i}
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              row.reversed ? 'lg:grid-flow-dense' : ''
            }`}
          >
            <div className={`space-y-6 ${row.reversed ? 'lg:col-start-2' : ''}`}>
              <span className="text-xs uppercase tracking-widest font-bold text-blue-600 dark:text-blue-400">
                {row.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {row.title}
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {row.description}
              </p>
              <ul className="space-y-2.5">
                {(row.bullets || []).map((b: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`relative ${row.reversed ? 'lg:col-start-1' : ''}`}>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
                <img src={row.imageUrl} alt={row.title} className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  ),
};

// 4. Compact 4-Column Icon List
export const FeaturesIconListBlock: BlockDefinition = {
  type: 'features-icon-list',
  name: '4-Column Compact Features',
  category: 'features',
  description: 'Quick-scan four-column feature grid for capability overviews.',
  iconName: 'ListChecks',
  defaultProps: {
    title: 'Engineered for Performance and Longevity',
    items: [
      { title: 'Sub-second Builds', desc: 'Pre-bundled tree-shaken components for lightning speed.' },
      { title: 'W3C Accessible', desc: 'ARIA landmarks, keyboard navigation, and screen reader labels.' },
      { title: 'SEO Optimized', desc: 'Dynamic meta tags, OpenGraph images, and sitemap generation.' },
      { title: 'Auto-Migrations', desc: 'Track schema changes over time with reversible SQL migrations.' },
    ],
  },
  fields: {
    title: { type: 'text', label: 'Section Title' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-16 bg-slate-900 border-y border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">{props.title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {(props.items || []).map((item: any, i: number) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
};

export const featuresBlocks = [
  Features3ColBlock,
  FeaturesBentoBlock,
  FeaturesAlternatingBlock,
  FeaturesIconListBlock,
];
