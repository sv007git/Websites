import React from 'react';
import { BlockDefinition, BlockRenderProps } from '../types';
import { Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';

// 1. Multi-Column Enterprise Sitemap Footer
export const FooterSitemapBlock: BlockDefinition = {
  type: 'footer-sitemap',
  name: 'Multi-Column Enterprise Footer',
  category: 'footers',
  description: 'Enterprise footer with categorized navigation links, newsletter signup, and copyright statement.',
  iconName: 'Layout',
  defaultProps: {
    brandName: 'WebForge Studio',
    tagline: 'The modern visual application builder with full code export.',
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'Editor Canvas', href: '#editor' },
          { label: 'Database Designer', href: '#db' },
          { label: 'Supabase Adapter', href: '#supabase' },
          { label: 'PHP/MySQL Target', href: '#php' },
        ],
      },
      {
        title: 'Templates',
        links: [
          { label: 'SaaS Platform', href: '#saas' },
          { label: 'Ecommerce Store', href: '#ecommerce' },
          { label: 'CRM & Pipeline', href: '#crm' },
          { label: 'Directory', href: '#directory' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Documentation', href: '#docs' },
          { label: 'Architecture Specs', href: '#specs' },
          { label: 'GitHub Repository', href: '#github' },
          { label: 'Security & RLS', href: '#security' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', href: '#privacy' },
          { label: 'Terms of Service', href: '#terms' },
          { label: 'Export License', href: '#license' },
        ],
      },
    ],
    copyright: '© 2026 WebForge Studio. All rights reserved. 100% open architecture.',
  },
  fields: {
    brandName: { type: 'text', label: 'Brand Name' },
    tagline: { type: 'text', label: 'Tagline' },
    copyright: { type: 'text', label: 'Copyright Notice' },
  },
  render: ({ props }: BlockRenderProps) => (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 space-y-4">
            <span className="text-base font-extrabold text-white tracking-tight">{props.brandName}</span>
            <p className="max-w-xs text-slate-400 leading-relaxed">{props.tagline}</p>
          </div>
          {(props.columns || []).map((col: any, i: number) => (
            <div key={i} className="space-y-3">
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">{col.title}</h4>
              <ul className="space-y-2">
                {(col.links || []).map((link: any, idx: number) => (
                  <li key={idx}>
                    <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>{props.copyright}</p>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#github" className="hover:text-white"><Github className="w-4 h-4" /></a>
            <a href="#twitter" className="hover:text-white"><Twitter className="w-4 h-4" /></a>
            <a href="#linkedin" className="hover:text-white"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  ),
};

// 2. Minimalist Single-Line Footer
export const FooterMinimalBlock: BlockDefinition = {
  type: 'footer-minimal',
  name: 'Minimal Single-Line Footer',
  category: 'footers',
  description: 'Clean single-row footer with copyright and essential legal links.',
  iconName: 'Minus',
  defaultProps: {
    brandName: 'WebForge',
    copyright: '© 2026 WebForge. Built for developers.',
  },
  fields: {
    brandName: { type: 'text', label: 'Brand Name' },
    copyright: { type: 'text', label: 'Copyright' },
  },
  render: ({ props }: BlockRenderProps) => (
    <footer className="py-8 bg-slate-900 border-t border-slate-800 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-bold text-white">{props.brandName}</span>
        <p>{props.copyright}</p>
        <div className="flex gap-4">
          <a href="#privacy" className="hover:text-white">Privacy</a>
          <a href="#terms" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  ),
};

// 3. Brand Manifesto Footer
export const FooterBrandBlock: BlockDefinition = {
  type: 'footer-brand',
  name: 'Brand Manifesto Big Footer',
  category: 'footers',
  description: 'Big typographic brand footer with bold manifesto statement and navigation.',
  iconName: 'Type',
  defaultProps: {
    bigWord: 'BUILD FREE.',
    subtext: 'Never let proprietary platform lock-in dictate the lifecycle of your software.',
    copyright: 'WebForge Studio • Empowering engineers worldwide',
  },
  fields: {
    bigWord: { type: 'text', label: 'Big Brand Word' },
    subtext: { type: 'text', label: 'Subtext' },
  },
  render: ({ props }: BlockRenderProps) => (
    <footer className="py-20 bg-slate-950 border-t border-slate-800 text-white text-center">
      <div className="max-w-5xl mx-auto px-4 space-y-6">
        <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-slate-800">{props.bigWord}</h2>
        <p className="text-sm text-slate-400 max-w-md mx-auto">{props.subtext}</p>
        <p className="text-xs text-slate-600 pt-8">{props.copyright}</p>
      </div>
    </footer>
  ),
};

// 4. Mobile App & Certification Footer
export const FooterAppBlock: BlockDefinition = {
  type: 'footer-app',
  name: 'Mobile App Badges Footer',
  category: 'footers',
  description: 'Footer featuring App Store download buttons, ISO badges, and country selector.',
  iconName: 'Smartphone',
  defaultProps: {
    brandName: 'CloudMatrix Inc.',
    notice: 'Certified SOC2 Type II and ISO 27001 Infrastructure.',
  },
  fields: {
    brandName: { type: 'text', label: 'Brand Name' },
    notice: { type: 'text', label: 'Security Notice' },
  },
  render: ({ props }: BlockRenderProps) => (
    <footer className="py-12 bg-slate-900 border-t border-slate-800 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-bold text-white text-sm">{props.brandName}</span>
          <p className="text-[11px] text-slate-500 mt-1">{props.notice}</p>
        </div>
        <div className="flex gap-3">
          <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-[11px] text-slate-300">iOS App</span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-[11px] text-slate-300">Android App</span>
        </div>
      </div>
    </footer>
  ),
};

export const footerBlocks = [
  FooterSitemapBlock,
  FooterMinimalBlock,
  FooterBrandBlock,
  FooterAppBlock,
];
