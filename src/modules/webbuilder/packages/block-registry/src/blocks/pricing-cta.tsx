import React, { useState } from 'react';
import { BlockDefinition, BlockRenderProps } from '../types';
import { Check, ArrowRight, Sparkles, HelpCircle, Shield, Zap, Smartphone, QrCode } from 'lucide-react';

// 1. Tiered Pricing Cards with Monthly/Annual Toggle
export const PricingTieredBlock: BlockDefinition = {
  type: 'pricing-tiered',
  name: '3-Tier Pricing with Toggle',
  category: 'pricing',
  description: 'Three pricing tiers with monthly and annual toggle discount switch, feature checklists, and highlighted plan.',
  iconName: 'CreditCard',
  defaultProps: {
    tagline: 'PREDICTABLE PRICING',
    title: 'Invest in True Software Ownership',
    annualDiscount: 'Save 20% on Annual Billing',
    tiers: [
      {
        name: 'Starter Developer',
        desc: 'Ideal for freelance developers, side projects, and independent consultants.',
        priceMonthly: '$19',
        priceAnnual: '$15',
        features: ['Up to 5 active studio projects', 'Unlimited Next.js source export', 'Supabase database schema generator', 'Community support'],
        ctaText: 'Start Free Trial',
        highlighted: false,
      },
      {
        name: 'Professional Team',
        desc: 'For growing software teams, digital agencies, and commercial product builders.',
        priceMonthly: '$49',
        priceAnnual: '$39',
        features: ['Unlimited studio projects', 'Both Next.js and PHP/MySQL exports', 'Row Level Security policy generator', 'AI Schema & layout co-pilot', 'Priority GitHub sync'],
        ctaText: 'Deploy with Pro',
        highlighted: true,
      },
      {
        name: 'Enterprise Organization',
        desc: 'Dedicated enterprise security governance, SSO, and custom hosting pipelines.',
        priceMonthly: '$199',
        priceAnnual: '$159',
        features: ['Custom on-premise installation', 'Dedicated architecture consultations', 'Custom block schema authoring', 'Custom SLA & 24/7 engineering line'],
        ctaText: 'Contact Enterprise',
        highlighted: false,
      },
    ],
  },
  fields: {
    tagline: { type: 'text', label: 'Tagline' },
    title: { type: 'text', label: 'Title' },
    annualDiscount: { type: 'text', label: 'Discount Badge' },
  },
  render: ({ props }: BlockRenderProps) => {
    const [isAnnual, setIsAnnual] = useState(false);

    return (
      <section className="py-20 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-400">{props.tagline}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{props.title}</h2>

            <div className="flex items-center justify-center gap-3 pt-4">
              <span className={`text-xs font-semibold ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
              <button
                type="button"
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
                  isAnnual ? 'bg-blue-600' : 'bg-slate-700'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform transition ${
                    isAnnual ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={`text-xs font-semibold ${isAnnual ? 'text-white' : 'text-slate-400'}`}>Annual</span>
              {props.annualDiscount && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {props.annualDiscount}
                </span>
              )}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {(props.tiers || []).map((tier: any, i: number) => (
              <div
                key={i}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all ${
                  tier.highlighted
                    ? 'bg-gradient-to-b from-slate-900 to-indigo-950/80 border-2 border-blue-500 shadow-2xl relative'
                    : 'bg-slate-900/90 border border-slate-800'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500 text-white shadow">
                    Most Popular
                  </div>
                )}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                    <p className="text-xs text-slate-400 mt-1">{tier.desc}</p>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{isAnnual ? tier.priceAnnual : tier.priceMonthly}</span>
                    <span className="text-xs text-slate-400">/ user / mo</span>
                  </div>
                  <div className="pt-6 border-t border-slate-800 space-y-3">
                    {(tier.features || []).map((f: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-8">
                  <a
                    href="#signup"
                    className={`block w-full py-3 rounded-xl text-center text-xs font-bold transition-all shadow ${
                      tier.highlighted
                        ? 'bg-blue-600 text-white hover:bg-blue-500'
                        : 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    {tier.ctaText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
};

// 2. Pricing Comparison Matrix
export const PricingMatrixBlock: BlockDefinition = {
  type: 'pricing-matrix',
  name: 'Feature Comparison Matrix',
  category: 'pricing',
  description: 'Detailed feature table breaking down technical capabilities across all tiers.',
  iconName: 'Table',
  defaultProps: {
    title: 'Detailed Capability Breakdown',
    rows: [
      { feature: 'Visual Block Canvas Editor', starter: 'Yes', pro: 'Yes', enterprise: 'Yes' },
      { feature: 'Full-Stack PostgreSQL Schema Designer', starter: 'Basic', pro: 'Unlimited', enterprise: 'Unlimited' },
      { feature: 'Row Level Security (RLS) Policy Editor', starter: 'No', pro: 'Yes', enterprise: 'Yes' },
      { feature: 'Target A (Next.js 14 + Supabase)', starter: 'Yes', pro: 'Yes', enterprise: 'Yes' },
      { feature: 'Target B (PHP 8.x + MySQL)', starter: 'No', pro: 'Yes', enterprise: 'Yes' },
      { feature: 'AI Schema & Layout Co-Pilot', starter: '10 / mo', pro: 'Unlimited', enterprise: 'Dedicated Model' },
      { feature: 'Direct GitHub Integration', starter: 'Manual Zip', pro: 'OAuth Sync', enterprise: 'CI/CD Webhook' },
    ],
  },
  fields: {
    title: { type: 'text', label: 'Table Title' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">{props.title}</h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/60">
                <th className="p-4 font-bold text-slate-300">Feature</th>
                <th className="p-4 font-bold text-slate-300 text-center">Starter</th>
                <th className="p-4 font-bold text-blue-400 text-center">Pro</th>
                <th className="p-4 font-bold text-slate-300 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {(props.rows || []).map((row: any, i: number) => (
                <tr key={i} className="hover:bg-slate-900/30 transition-colors">
                  <td className="p-4 font-medium text-slate-200">{row.feature}</td>
                  <td className="p-4 text-center text-slate-400">{row.starter}</td>
                  <td className="p-4 text-center font-bold text-blue-400">{row.pro}</td>
                  <td className="p-4 text-center text-slate-300">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  ),
};

// 3. Transparent Single Price Card
export const PricingSingleBlock: BlockDefinition = {
  type: 'pricing-single',
  name: 'Transparent Lifetime Pass',
  category: 'pricing',
  description: 'Single all-inclusive price card highlighting lifetime updates and complete independence.',
  iconName: 'BadgeDollarSign',
  defaultProps: {
    tagline: 'PAY ONCE, OWN FOREVER',
    title: 'The Perpetual License for Full-Stack Freedom',
    price: '$299',
    badge: 'Lifetime Access • All 12 Starter Templates Included',
    features: [
      'Complete WebForge Studio application access',
      'Unlimited Next.js and PHP/MySQL source code exports',
      'All 50+ block source components included',
      'Lifetime updates and new template drops',
      'Full commercial rights for unlimited client projects',
    ],
    ctaText: 'Get Lifetime License',
  },
  fields: {
    tagline: { type: 'text', label: 'Tagline' },
    title: { type: 'text', label: 'Title' },
    price: { type: 'text', label: 'Price' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400">{props.tagline}</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-10">{props.title}</h2>
        <div className="p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-8 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-5xl font-black text-white">{props.price}</span>
              <p className="text-xs text-slate-400 mt-1">One-time payment • No subscriptions</p>
            </div>
            <span className="px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold">
              {props.badge}
            </span>
          </div>
          <div className="space-y-3">
            {(props.features || []).map((f: string, i: number) => (
              <div key={i} className="flex items-center gap-3 text-xs text-slate-200">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
          <a
            href="#buy"
            className="block w-full py-4 rounded-xl text-center text-sm font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-lg"
          >
            {props.ctaText}
          </a>
        </div>
      </div>
    </section>
  ),
};

// 4. Enterprise Quote Card
export const PricingEnterpriseBlock: BlockDefinition = {
  type: 'pricing-enterprise',
  name: 'Custom Enterprise Solutions',
  category: 'pricing',
  description: 'Enterprise contract card with custom compliance, dedicated VPC hosting, and SLAs.',
  iconName: 'Building',
  defaultProps: {
    title: 'Enterprise Custom Deployment',
    desc: 'Need custom database drivers, Air-gapped deployment, or on-premise governance? We tailor WebForge to your security baseline.',
    bullets: ['Air-gapped VPC Docker deployments', 'Custom LDAP / Okta SAML integrations', 'Dedicated security auditor access'],
    buttonText: 'Schedule Executive Architecture Call',
  },
  fields: {
    title: { type: 'text', label: 'Title' },
    desc: { type: 'textarea', label: 'Description' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-16 bg-slate-900 border-y border-slate-800 text-white">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <h3 className="text-2xl font-bold">{props.title}</h3>
          <p className="text-xs text-slate-300 leading-relaxed">{props.desc}</p>
          <div className="space-y-1.5 pt-2">
            {(props.bullets || []).map((b: string, i: number) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
        <a href="#contact" className="px-6 py-3.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 shadow-lg whitespace-nowrap">
          {props.buttonText}
        </a>
      </div>
    </section>
  ),
};

// 5. Full-Width Gradient CTA Banner
export const CtaBannerBlock: BlockDefinition = {
  type: 'cta-banner',
  name: 'Gradient Conversion Banner',
  category: 'cta',
  description: 'High-contrast conversion section with headline, subtext, and dual call-to-action buttons.',
  iconName: 'Sparkles',
  defaultProps: {
    title: 'Ready to Experience Visual Full-Stack Development?',
    subtitle: 'Join over 14,000 developers building database-backed web applications in record time.',
    primaryBtnText: 'Start Building Free',
    secondaryBtnText: 'Read Architecture Specs',
  },
  fields: {
    title: { type: 'text', label: 'Title' },
    subtitle: { type: 'textarea', label: 'Subtitle' },
    primaryBtnText: { type: 'text', label: 'Primary Button' },
    secondaryBtnText: { type: 'text', label: 'Secondary Button' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-20 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight">{props.title}</h2>
        <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">{props.subtitle}</p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href="#signup" className="px-8 py-4 rounded-xl bg-white text-slate-950 font-bold text-sm shadow-xl hover:bg-slate-100 transition-colors">
            {props.primaryBtnText}
          </a>
          {props.secondaryBtnText && (
            <a href="#docs" className="px-8 py-4 rounded-xl bg-blue-900/60 text-white border border-blue-400/40 font-bold text-sm hover:bg-blue-900 transition-colors">
              {props.secondaryBtnText}
            </a>
          )}
        </div>
      </div>
    </section>
  ),
};

// 6. Split Conversion CTA
export const CtaSplitBlock: BlockDefinition = {
  type: 'cta-split',
  name: 'Split Conversion & Email Pitch',
  category: 'cta',
  description: 'Left persuasive pitch, right instant email lead capture form.',
  iconName: 'Mail',
  defaultProps: {
    headline: 'Receive Our Weekly Full-Stack Starter Templates',
    subheadline: 'Every Tuesday we release a validated, production-ready website template with PostgreSQL migrations and Next.js frontend code.',
    inputPlaceholder: 'developer@company.com',
    submitText: 'Subscribe Free',
    disclaimer: 'We respect your inbox. Unsubscribe in one click.',
  },
  fields: {
    headline: { type: 'text', label: 'Headline' },
    subheadline: { type: 'textarea', label: 'Subheadline' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-16 bg-slate-900 border-y border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-3">
          <h3 className="text-2xl sm:text-3xl font-extrabold">{props.headline}</h3>
          <p className="text-xs text-slate-300 leading-relaxed">{props.subheadline}</p>
        </div>
        <div>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder={props.inputPlaceholder}
              className="flex-1 px-4 py-3 text-xs rounded-xl bg-slate-950 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button type="submit" className="px-6 py-3 text-xs font-bold rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow">
              {props.submitText}
            </button>
          </form>
          <p className="text-[11px] text-slate-400 mt-2">{props.disclaimer}</p>
        </div>
      </div>
    </section>
  ),
};

// 7. Floating Elevated Card CTA
export const CtaFloatingCardBlock: BlockDefinition = {
  type: 'cta-floating-card',
  name: 'Elevated Floating Box CTA',
  category: 'cta',
  description: 'High-visibility floating card with badge, button, and guarantee note.',
  iconName: 'SquareStack',
  defaultProps: {
    title: 'Transform your design files into actual code today',
    actionText: 'Launch WebForge Studio',
    guarantee: '100% money-back guarantee within 30 days',
  },
  fields: {
    title: { type: 'text', label: 'Title' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="p-10 rounded-3xl bg-gradient-to-r from-blue-900/50 via-indigo-900/40 to-slate-900 border border-blue-500/40 shadow-2xl text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold">{props.title}</h3>
          <div>
            <a href="#studio" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-500 text-white font-bold text-xs hover:bg-blue-400 shadow-lg">
              <span>{props.actionText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <p className="text-[11px] text-slate-400">{props.guarantee}</p>
        </div>
      </div>
    </section>
  ),
};

// 8. Mobile App Download CTA
export const CtaAppDownloadBlock: BlockDefinition = {
  type: 'cta-app-download',
  name: 'Mobile App Promotion CTA',
  category: 'cta',
  description: 'App download banner with QR code and mobile app store links.',
  iconName: 'Smartphone',
  defaultProps: {
    title: 'Take Your Workspace Anywhere',
    desc: 'Review project drafts, preview responsive layouts, and approve team changes on your smartphone.',
  },
  fields: {
    title: { type: 'text', label: 'Title' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-8 p-8 rounded-2xl bg-slate-950 border border-slate-800">
        <div className="space-y-2 max-w-md">
          <h3 className="text-xl font-bold">{props.title}</h3>
          <p className="text-xs text-slate-400 leading-relaxed">{props.desc}</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 p-2 bg-white rounded-xl flex items-center justify-center">
            <QrCode className="w-full h-full text-slate-950" />
          </div>
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-mono text-slate-400">Scan to download</span>
            <div className="flex gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold">iOS</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold">Android</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  ),
};

export const pricingAndCtaBlocks = [
  PricingTieredBlock,
  PricingMatrixBlock,
  PricingSingleBlock,
  PricingEnterpriseBlock,
  CtaBannerBlock,
  CtaSplitBlock,
  CtaFloatingCardBlock,
  CtaAppDownloadBlock,
];
