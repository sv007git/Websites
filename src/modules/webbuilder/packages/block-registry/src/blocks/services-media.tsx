import React, { useState } from 'react';
import { BlockDefinition, BlockRenderProps } from '../types';
import { Layers, CheckCircle2, ArrowRight, Play, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

// 1. Services Tier Cards
export const ServicesCardsBlock: BlockDefinition = {
  type: 'services-cards',
  name: '3-Tier Service Offerings',
  category: 'services',
  description: 'Three distinct service tiers with scope deliverables, timelines, and inquiry links.',
  iconName: 'Briefcase',
  defaultProps: {
    tagline: 'OUR EXPERTISE',
    title: 'Tailored Solutions for High-Growth Companies',
    services: [
      {
        title: 'Full-Stack Web Engineering',
        desc: 'Custom web application builds with PostgreSQL database architecture, Next.js frontend, and enterprise APIs.',
        timeline: '4 - 6 Weeks Delivery',
        deliverables: ['Custom Database & RLS policies', 'Interactive Responsive UI', 'Automated CI/CD deployment'],
      },
      {
        title: 'Self-Hosted System Migration',
        desc: 'Modernize legacy codebases into clean PHP 8.x + MySQL systems with zero recurring vendor licensing costs.',
        timeline: '2 - 4 Weeks Delivery',
        deliverables: ['Clean MVC Architecture', 'PDO SQL prepared statements', 'Docker and Apache/Nginx scripts'],
      },
      {
        title: 'Enterprise Architecture Consulting',
        desc: 'Deep security audits, database indexing, latency optimization, and automated end-to-end test suites.',
        timeline: 'Retainer / Sprint based',
        deliverables: ['Security & RLS Penetration Audit', 'Performance profiling', 'Playwright & Vitest test suites'],
      },
    ],
  },
  fields: {
    tagline: { type: 'text', label: 'Tagline' },
    title: { type: 'text', label: 'Title' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-400">{props.tagline}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold">{props.title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {(props.services || []).map((s: any, i: number) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between hover:border-blue-500 transition-colors">
              <div className="space-y-4">
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {s.timeline}
                </span>
                <h3 className="text-xl font-bold text-white">{s.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
                <div className="pt-4 border-t border-slate-700/80 space-y-2">
                  <p className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Key Deliverables</p>
                  {(s.deliverables || []).map((d: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-700/60">
                <a href="#contact" className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1">
                  Inquire About This Service <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
};

// 2. Tabbed Services Viewer
export const ServicesTabbedBlock: BlockDefinition = {
  type: 'services-tabbed',
  name: 'Interactive Tabbed Solutions',
  category: 'services',
  description: 'Interactive tab switcher for presenting multiple service disciplines.',
  iconName: 'Layers',
  defaultProps: {
    title: 'Full-Cycle Digital Capabilities',
    tabs: [
      {
        id: 'apps',
        name: 'Web Applications',
        heading: 'Scalable Full-Stack Engineering',
        desc: 'Production-ready apps with automated user authentication, real-time database feeds, and role-based access control.',
        bullets: ['React / Next.js frontends', 'Supabase / PostgreSQL data tier', 'Edge API functions'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'ecommerce',
        name: 'Ecommerce & Booking',
        heading: 'High-Conversion Transaction Engines',
        desc: 'Custom shopping experiences, appointment booking scheduling, and Stripe test/production webhook integrations.',
        bullets: ['Shopping carts & instant checkout', 'Real-time calendar slot bookings', 'Order history and tracking'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80',
      },
    ],
  },
  fields: {
    title: { type: 'text', label: 'Section Title' },
  },
  render: ({ props }: BlockRenderProps) => {
    const tabs = props.tabs || [];
    const [activeTab, setActiveTab] = useState(tabs[0]?.id || 'apps');
    const current = tabs.find((t: any) => t.id === activeTab) || tabs[0];

    return (
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">{props.title}</h2>
          <div className="flex justify-center border-b border-slate-800 mb-12">
            {tabs.map((tab: any) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === tab.id ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
          {current && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">{current.heading}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{current.desc}</p>
                <div className="space-y-2 pt-2">
                  {(current.bullets || []).map((b: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                <img src={current.image} alt={current.name} className="w-full h-auto object-cover" />
              </div>
            </div>
          )}
        </div>
      </section>
    );
  },
};

// 3. Numbered Services / Process List
export const ServicesListBlock: BlockDefinition = {
  type: 'services-list',
  name: 'Numbered Process / Service List',
  category: 'services',
  description: 'Numbered step-by-step workflow detailing execution methodology.',
  iconName: 'ListOrdered',
  defaultProps: {
    heading: 'OUR PROVEN METHODOLOGY',
    title: 'How We Take Projects From Spec to Deployment',
    steps: [
      { step: '01', title: 'Data & Schema Architecture', desc: 'Identify core entities, define database relations, and establish RLS security parameters.' },
      { step: '02', title: 'Visual Page Composition', desc: 'Assemble responsive layouts using 50+ pre-tested components across all target devices.' },
      { step: '03', title: 'Automated Code Generation', desc: 'Compile the canonical AST into standalone Next.js or PHP 8 source with zero lock-in.' },
      { step: '04', title: 'Continuous Deployment & Verification', desc: 'Push to GitHub, execute automated Vitest and Playwright test suites, and deploy.' },
    ],
  },
  fields: {
    heading: { type: 'text', label: 'Tagline' },
    title: { type: 'text', label: 'Title' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14 space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600 dark:text-blue-400">{props.heading}</span>
          <h2 className="text-3xl font-extrabold">{props.title}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {(props.steps || []).map((s: any, i: number) => (
            <div key={i} className="border-t-2 border-blue-500 pt-6 space-y-3">
              <span className="font-mono text-3xl font-bold text-slate-400 dark:text-slate-600">{s.step}</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{s.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
};

// 4. Masonry Portfolio Gallery
export const GalleryMasonryBlock: BlockDefinition = {
  type: 'gallery-masonry',
  name: 'Portfolio Masonry Gallery',
  category: 'media',
  description: 'Visual showcase grid displaying project screenshots, branding, or photography.',
  iconName: 'Image',
  defaultProps: {
    title: 'Selected Studio Showcase',
    items: [
      { title: 'Apex FinTech Portal', category: 'Web App', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80' },
      { title: 'Vanguard Health Records', category: 'HIPAA Portal', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80' },
      { title: 'Beacon Logistics ERP', category: 'Internal Tool', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80' },
      { title: 'Atelier Minimalist Store', category: 'Ecommerce', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80' },
    ],
  },
  fields: {
    title: { type: 'text', label: 'Gallery Title' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{props.title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(props.items || []).map((item: any, i: number) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden shadow-lg border border-slate-800 cursor-pointer">
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">{item.category}</span>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
};

// 5. Embedded Video Player
export const MediaVideoPlayerBlock: BlockDefinition = {
  type: 'media-video-player',
  name: 'Standalone Video Embed',
  category: 'media',
  description: 'Responsive video container supporting YouTube, Vimeo, or HTML5 MP4 embeds.',
  iconName: 'Tv',
  defaultProps: {
    title: 'Watch the Full Demonstration',
    caption: 'Learn how to model relational data and export a Next.js or PHP codebase in 3 minutes.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  fields: {
    title: { type: 'text', label: 'Title' },
    caption: { type: 'textarea', label: 'Caption' },
    videoUrl: { type: 'text', label: 'Video Embed URL' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-16 bg-slate-900 border-y border-slate-800 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">{props.title}</h2>
          <p className="text-xs text-slate-400 mt-1">{props.caption}</p>
        </div>
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-black">
          <iframe
            src={props.videoUrl}
            title={props.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  ),
};

// 6. Gallery Carousel
export const GalleryCarouselBlock: BlockDefinition = {
  type: 'gallery-carousel',
  name: 'Photo / Asset Carousel',
  category: 'media',
  description: 'Interactive sliding gallery with prev/next controls and thumbnail indicator bar.',
  iconName: 'Film',
  defaultProps: {
    images: [
      { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80', caption: 'Database Schema Visualizer' },
      { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80', caption: 'Real-Time Canvas Preview' },
      { url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=80', caption: 'Responsive Device Emulation' },
    ],
  },
  fields: {},
  render: ({ props }: BlockRenderProps) => {
    const [index, setIndex] = useState(0);
    const images = props.images || [];
    const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    const current = images[index] || { url: '', caption: '' };

    return (
      <section className="py-16 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 aspect-[16/9] group">
            <img src={current.url} alt={current.caption} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <p className="text-sm font-semibold text-white">{current.caption}</p>
            </div>
            <button
              type="button"
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 border border-slate-700"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 border border-slate-700"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    );
  },
};

export const servicesAndMediaBlocks = [
  ServicesCardsBlock,
  ServicesTabbedBlock,
  ServicesListBlock,
  GalleryMasonryBlock,
  MediaVideoPlayerBlock,
  GalleryCarouselBlock,
];
