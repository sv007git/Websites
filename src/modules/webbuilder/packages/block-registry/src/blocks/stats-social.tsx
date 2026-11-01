import React from 'react';
import { BlockDefinition, BlockRenderProps } from '../types';
import { TrendingUp, Users, ShieldCheck, Award, Zap, Globe, Lock, CheckCircle } from 'lucide-react';

// 1. Stats Counter Grid
export const StatsCounterGridBlock: BlockDefinition = {
  type: 'stats-counter-grid',
  name: 'Stats Counter Grid',
  category: 'stats',
  description: 'Four large numeric metrics with trend indicators and descriptive labels.',
  iconName: 'BarChart2',
  defaultProps: {
    stats: [
      { value: '500,000+', label: 'Pages Rendered', change: '+24% this month' },
      { value: '99.98%', label: 'Uptime SLA', change: 'Enterprise grade' },
      { value: '< 85ms', label: 'Average Edge TTFB', change: 'Global CDN' },
      { value: '14,200', label: 'Active Projects', change: '+1,800 new teams' },
    ],
  },
  fields: {
    // array fields
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-16 bg-slate-900 border-y border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {(props.stats || []).map((s: any, i: number) => (
            <div key={i} className="text-center sm:text-left space-y-1">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                {s.value}
              </span>
              <p className="text-sm font-semibold text-slate-200">{s.label}</p>
              <p className="text-xs text-blue-400 font-medium">{s.change}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
};

// 2. Stats Card Row
export const StatsCardRowBlock: BlockDefinition = {
  type: 'stats-card-row',
  name: 'Stats Card Row',
  category: 'stats',
  description: 'Three elevated metric cards with icons and growth indicators.',
  iconName: 'TrendingUp',
  defaultProps: {
    title: 'Proven Business Impact',
    cards: [
      { title: 'Development Speed', value: '10x Faster', desc: 'From initial wireframe to live production deploy in under 24 hours.' },
      { title: 'Hosting Cost Reduction', value: '65% Savings', desc: 'Zero runtime license fees; deploy to standard VPS or serverless targets.' },
      { title: 'Security Assurance', value: '100% Audited', desc: 'Generated SQL policies enforce Row Level Security by default.' },
    ],
  },
  fields: {
    title: { type: 'text', label: 'Heading' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">{props.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {(props.cards || []).map((c: any, i: number) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-left space-y-3">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400">{c.title}</span>
              <div className="text-3xl font-extrabold text-blue-400">{c.value}</div>
              <p className="text-xs text-slate-300 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
};

// 3. Stats Split Callout
export const StatsSplitCalloutBlock: BlockDefinition = {
  type: 'stats-split-callout',
  name: 'Split Stat Callout',
  category: 'stats',
  description: 'Asymmetric stat banner with big number callout and supporting proof points.',
  iconName: 'PieChart',
  defaultProps: {
    bigNumber: '$42M+',
    bigLabel: 'Processed through WebForge-generated ecommerce & booking applications',
    bullets: [
      'Stripe sandbox testing and verified webhook verification',
      'Automated transaction logging with audit histories',
      'Zero commission fees on your exported projects',
    ],
  },
  fields: {
    bigNumber: { type: 'text', label: 'Big Stat' },
    bigLabel: { type: 'text', label: 'Stat Caption' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-16 bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900 border-y border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-3">
          <div className="text-5xl sm:text-6xl font-black text-white">{props.bigNumber}</div>
          <p className="text-base text-slate-300 max-w-md">{props.bigLabel}</p>
        </div>
        <div className="space-y-3">
          {(props.bullets || []).map((b: string, i: number) => (
            <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
};

// 4. Logo Cloud
export const LogoCloudBlock: BlockDefinition = {
  type: 'logo-cloud',
  name: 'Partner Logo Wall',
  category: 'social-proof',
  description: 'Clean monochrome partner and client logo grid for immediate trust.',
  iconName: 'Shield',
  defaultProps: {
    heading: 'TRUSTED BY INNOVATIVE ENGINEERING TEAMS WORLDWIDE',
    logos: ['Acme Corp', 'NextGen Logistics', 'Apex Financial', 'Beacon Cloud', 'Vanguard Health', 'Omni Retail'],
  },
  fields: {
    heading: { type: 'text', label: 'Section Heading' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-12 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs uppercase tracking-widest font-semibold text-slate-400 dark:text-slate-500 mb-8">
          {props.heading}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-70">
          {(props.logos || []).map((logo: string, i: number) => (
            <span key={i} className="font-bold text-lg text-slate-500 dark:text-slate-400 tracking-wider">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  ),
};

// 5. Trust & Security Badges
export const TrustBadgesBlock: BlockDefinition = {
  type: 'trust-badges',
  name: 'Security & Trust Badges',
  category: 'social-proof',
  description: 'Compliance, security certifications, and trust badges.',
  iconName: 'Award',
  defaultProps: {
    items: [
      { icon: 'ShieldCheck', title: 'SOC2 Type II Certified', desc: 'Independently audited data controls' },
      { icon: 'Lock', title: 'Row-Level Isolation', desc: 'PostgreSQL native security model' },
      { icon: 'Globe', title: 'GDPR & CCPA Ready', desc: 'Privacy-first architecture' },
      { icon: 'Zap', title: '100% Code Ownership', desc: 'Full open-source portability' },
    ],
  },
  fields: {},
  render: ({ props }: BlockRenderProps) => (
    <section className="py-12 bg-slate-900 border-b border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {(props.items || []).map((b: any, i: number) => (
          <div key={i} className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-white">{b.title}</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  ),
};

// 6. Press & Media Mentions
export const PressMentionsBlock: BlockDefinition = {
  type: 'press-mentions',
  name: 'Press & Media Mentions',
  category: 'social-proof',
  description: 'Editorial quotes from prominent technology and business publications.',
  iconName: 'Quote',
  defaultProps: {
    heading: 'FEATURED IN LEADING INDUSTRY PUBLICATIONS',
    quotes: [
      { outlet: 'TechCrunch', text: '"WebForge bridges the massive divide between superficial no-code tools and real full-stack software development."' },
      { outlet: 'VentureBeat', text: '"The visual builder that generates actual Next.js and PHP applications without vendor lock-in."' },
      { outlet: 'Hacker News', text: '"Finally, a visual tool that outputs clean, human-readable code you can actually commit to Git."' },
    ],
  },
  fields: {
    heading: { type: 'text', label: 'Heading' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-16 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-10">{props.heading}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {(props.quotes || []).map((q: any, i: number) => (
            <div key={i} className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-3 text-left">
              <span className="font-bold text-sm text-blue-400">{q.outlet}</span>
              <p className="text-xs text-slate-300 italic leading-relaxed">{q.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
};

export const statsAndSocialBlocks = [
  StatsCounterGridBlock,
  StatsCardRowBlock,
  StatsSplitCalloutBlock,
  LogoCloudBlock,
  TrustBadgesBlock,
  PressMentionsBlock,
];
