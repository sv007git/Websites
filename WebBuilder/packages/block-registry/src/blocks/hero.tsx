import React from 'react';
import { BlockDefinition, BlockRenderProps } from '../types';
import { ArrowRight, Play, CheckCircle2, Star, Sparkles, Smartphone } from 'lucide-react';

// 1. Split Hero with Image & Form
export const HeroSplitBlock: BlockDefinition = {
  type: 'hero-split',
  name: 'Split Hero with Mockup',
  category: 'hero',
  description: 'High-converting split section with compelling value proposition, social trust, and product preview.',
  iconName: 'LayoutTemplate',
  defaultProps: {
    badge: 'NEW: AI WORKFLOW GENERATION',
    title: 'Build Full-Stack Web Apps Visually In Minutes',
    subtitle: 'WebForge Studio combines the intuitive ease of Mobirise with the engineering power of Next.js, Supabase, and clean PHP backends.',
    primaryCtaText: 'Start Building Free',
    primaryCtaLink: '/signup',
    secondaryCtaText: 'View 12 Starter Templates',
    secondaryCtaLink: '#templates',
    bullets: ['Zero vendor lock-in', '100% Standalone source export', 'Supabase + PHP/MySQL targets'],
    ratingScore: '4.9/5',
    ratingReviews: 'Loved by 14,000+ engineers',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  fields: {
    badge: { type: 'text', label: 'Top Badge' },
    title: { type: 'text', label: 'Main Headline' },
    subtitle: { type: 'textarea', label: 'Subtitle Description' },
    primaryCtaText: { type: 'text', label: 'Primary CTA Text' },
    primaryCtaLink: { type: 'text', label: 'Primary CTA Link' },
    secondaryCtaText: { type: 'text', label: 'Secondary CTA Text' },
    secondaryCtaLink: { type: 'text', label: 'Secondary CTA Link' },
    imageUrl: { type: 'image', label: 'Preview Mockup URL' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-slate-900 text-slate-100">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            {props.badge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                {props.badge}
              </span>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              {props.title}
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              {props.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={props.primaryCtaLink || '#'}
                className="px-6 py-3.5 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
              >
                <span>{props.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              {props.secondaryCtaText && (
                <a
                  href={props.secondaryCtaLink || '#'}
                  className="px-6 py-3.5 rounded-lg text-sm font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors border border-slate-700"
                >
                  {props.secondaryCtaText}
                </a>
              )}
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="font-semibold text-white ml-1.5">{props.ratingScore}</span>
                <span className="text-slate-400">({props.ratingReviews})</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800/80 backdrop-blur group">
              <img
                src={props.imageUrl}
                alt="Product Preview"
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 border border-slate-700 backdrop-blur text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Generated Schema Ready
                  </span>
                  <span className="text-slate-400 font-mono text-[10px]">Target: Next.js + Supabase</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ),
};

// 2. Centered Minimalist Hero
export const HeroCenteredBlock: BlockDefinition = {
  type: 'hero-centered',
  name: 'Centered High-Impact Hero',
  category: 'hero',
  description: 'Clean centered typography with instant email newsletter capture and social proof.',
  iconName: 'AlignCenter',
  defaultProps: {
    tagline: 'DESIGN • COMPILE • SHIP',
    title: 'The Intelligent Visual Studio for Modern Developers',
    description: 'Transform high-level visual designs into production-ready full-stack applications with PostgreSQL schemas, RLS security, and REST APIs.',
    inputPlaceholder: 'Enter your work email...',
    buttonText: 'Request Early Access',
    disclaimer: 'Free 14-day trial • No credit card required • Export anytime',
  },
  fields: {
    tagline: { type: 'text', label: 'Top Tagline' },
    title: { type: 'text', label: 'Headline' },
    description: { type: 'textarea', label: 'Description' },
    inputPlaceholder: { type: 'text', label: 'Email Placeholder' },
    buttonText: { type: 'text', label: 'Submit Button' },
    disclaimer: { type: 'text', label: 'Disclaimer Footer' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
        {props.tagline && (
          <span className="text-xs uppercase tracking-widest font-mono font-semibold text-blue-600 dark:text-blue-400">
            {props.tagline}
          </span>
        )}

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
          {props.title}
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {props.description}
        </p>

        <div className="max-w-md mx-auto">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder={props.inputPlaceholder}
              className="flex-1 px-4 py-3 text-sm rounded-lg border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-5 py-3 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-md whitespace-nowrap"
            >
              {props.buttonText}
            </button>
          </form>
          {props.disclaimer && (
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-3">{props.disclaimer}</p>
          )}
        </div>
      </div>
    </section>
  ),
};

// 3. Hero with Video Modal Trigger
export const HeroVideoBlock: BlockDefinition = {
  type: 'hero-video',
  name: 'Hero with Video Preview',
  category: 'hero',
  description: 'Hero presentation with a prominent interactive video player overlay.',
  iconName: 'PlayCircle',
  defaultProps: {
    title: 'Experience The Future of Visual Web Engineering',
    description: 'Watch how an entire multi-page application with database tables, auth guards, and PHP/Node backend code is generated in under 90 seconds.',
    videoThumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    durationBadge: '2:15 Walkthrough Video',
    ctaText: 'Start Building Now',
    ctaLink: '/signup',
  },
  fields: {
    title: { type: 'text', label: 'Headline' },
    description: { type: 'textarea', label: 'Description' },
    videoThumbnail: { type: 'image', label: 'Video Thumbnail' },
    durationBadge: { type: 'text', label: 'Duration Badge' },
    ctaText: { type: 'text', label: 'CTA Text' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-8">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
          {props.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
          {props.description}
        </p>

        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-800 group cursor-pointer">
          <img
            src={props.videoThumbnail}
            alt="Video Preview"
            className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 bg-slate-950/40 flex flex-col items-center justify-center gap-3">
            <div className="w-16 h-16 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 fill-white translate-x-0.5" />
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-slate-200">
              {props.durationBadge}
            </span>
          </div>
        </div>

        <div>
          <a
            href={props.ctaLink || '#'}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/30"
          >
            {props.ctaText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  ),
};

// 4. Hero App Showcase
export const HeroAppShowcaseBlock: BlockDefinition = {
  type: 'hero-app-showcase',
  name: 'Mobile App Showcase Hero',
  category: 'hero',
  description: 'Dual mobile device mockup showcase tailored for mobile apps, SaaS, and progressive web apps.',
  iconName: 'Smartphone',
  defaultProps: {
    badge: 'AVAILABLE ON IOS & ANDROID',
    title: 'Manage Your Entire Business From Your Pocket',
    description: 'Instant synchronisation across devices, offline-first data caching, and native biometric security.',
    appStoreLink: '#',
    playStoreLink: '#',
    ratingText: '★ 4.9 on App Store • 50,000+ Downloads',
    leftScreenUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80',
    rightScreenUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
  },
  fields: {
    badge: { type: 'text', label: 'Badge' },
    title: { type: 'text', label: 'Headline' },
    description: { type: 'textarea', label: 'Description' },
    ratingText: { type: 'text', label: 'Rating Text' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-20 bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            {props.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            {props.title}
          </h1>
          <p className="text-lg text-slate-300 max-w-lg mx-auto lg:mx-0">
            {props.description}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button type="button" className="px-5 py-3 rounded-xl bg-white text-slate-950 font-semibold text-xs flex items-center gap-2 shadow-lg">
              <span className="text-lg"></span>
              <div className="text-left leading-tight">
                <span className="block text-[9px] uppercase tracking-wide text-slate-500">Download on the</span>
                <span>App Store</span>
              </div>
            </button>
            <button type="button" className="px-5 py-3 rounded-xl bg-slate-800 text-white border border-slate-700 font-semibold text-xs flex items-center gap-2 shadow-lg">
              <span className="text-lg">▶</span>
              <div className="text-left leading-tight">
                <span className="block text-[9px] uppercase tracking-wide text-slate-400">Get it on</span>
                <span>Google Play</span>
              </div>
            </button>
          </div>
          <p className="text-xs text-slate-400">{props.ratingText}</p>
        </div>

        <div className="flex justify-center items-center gap-4 relative">
          <div className="w-56 h-[420px] rounded-3xl border-4 border-slate-700 overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform">
            <img src={props.leftScreenUrl} alt="Screen 1" className="w-full h-full object-cover" />
          </div>
          <div className="w-56 h-[420px] rounded-3xl border-4 border-slate-700 overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform -mt-8">
            <img src={props.rightScreenUrl} alt="Screen 2" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  ),
};

export const heroBlocks = [
  HeroSplitBlock,
  HeroCenteredBlock,
  HeroVideoBlock,
  HeroAppShowcaseBlock,
];
