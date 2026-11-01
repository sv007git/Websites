import React, { useState } from 'react';
import { BlockDefinition, BlockRenderProps } from '../types';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Linkedin, Twitter, Github } from 'lucide-react';

// 1. Testimonials Grid
export const TestimonialsGridBlock: BlockDefinition = {
  type: 'testimonials-grid',
  name: '3-Card Review Grid',
  category: 'testimonials',
  description: 'Three comprehensive customer reviews with star ratings, avatar photos, names, and titles.',
  iconName: 'MessageSquare',
  defaultProps: {
    tagline: 'CLIENT FEEDBACK',
    title: 'Trusted by Product Leaders & Engineers',
    reviews: [
      {
        quote: 'WebForge allowed our agency to deliver five client applications in one month. The code output is so clean our lead architect approved it immediately.',
        name: 'Sarah Jenkins',
        role: 'VP of Engineering',
        company: 'Veloce Agency',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        rating: 5,
      },
      {
        quote: 'The PostgreSQL schema designer combined with Supabase RLS is a game-changer. We saved at least 80 hours of repetitive backend scaffolding.',
        name: 'Marcus Chen',
        role: 'Co-Founder & CTO',
        company: 'DataFlow Systems',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        rating: 5,
      },
      {
        quote: 'We needed a standalone PHP/MySQL app for a self-hosted client with zero monthly subscription fees. WebForge delivered flawless PDO code.',
        name: 'Elena Rostova',
        role: 'Senior Solutions Architect',
        company: 'Alpine Core',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        rating: 5,
      },
    ],
  },
  fields: {
    tagline: { type: 'text', label: 'Tagline' },
    title: { type: 'text', label: 'Section Title' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          {props.tagline && (
            <span className="text-xs uppercase tracking-widest font-bold text-blue-600 dark:text-blue-400">
              {props.tagline}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{props.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {(props.reviews || []).map((r: any, i: number) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(r.rating || 5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{r.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-100 dark:border-slate-700/60">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">{r.name}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {r.role}, {r.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
};

// 2. Spotlight Quote Hero
export const TestimonialsQuoteHeroBlock: BlockDefinition = {
  type: 'testimonials-quote-hero',
  name: 'Spotlight Quote Hero',
  category: 'testimonials',
  description: 'Large centerpiece testimonial spotlighting a marquee client endorsement.',
  iconName: 'Quote',
  defaultProps: {
    quote: 'WebForge is the first visual builder that treats software architecture with the seriousness it deserves. It has completely transformed our product shipping pipeline.',
    author: 'David Sterling',
    role: 'Chief Technology Officer, CloudMatrix Inc.',
    logoName: 'CloudMatrix',
  },
  fields: {
    quote: { type: 'textarea', label: 'Quote' },
    author: { type: 'text', label: 'Author Name' },
    role: { type: 'text', label: 'Author Role' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
        <Quote className="w-12 h-12 text-blue-500/40 mx-auto" />
        <p className="text-2xl sm:text-3xl font-medium leading-relaxed tracking-tight text-slate-100">
          "{props.quote}"
        </p>
        <div className="pt-4">
          <p className="text-sm font-bold text-white">{props.author}</p>
          <p className="text-xs text-slate-400">{props.role}</p>
        </div>
      </div>
    </section>
  ),
};

// 3. Testimonials Slider
export const TestimonialsSliderBlock: BlockDefinition = {
  type: 'testimonials-slider',
  name: 'Interactive Testimonial Carousel',
  category: 'testimonials',
  description: 'Interactive carousel cycling through client feedback with next/prev buttons.',
  iconName: 'Sliders',
  defaultProps: {
    slides: [
      { text: 'Shipping our MVP took 3 days instead of 2 months. Unbelievable velocity.', author: 'Alex Rivera', org: 'Founder, QuickPay' },
      { text: 'The PHP generator created bulletproof PDO code with zero bloat.', author: 'Sophie Laurent', org: 'Lead Developer, HexaCore' },
      { text: 'Our designers and developers now speak the exact same component language.', author: 'Ben Kowalski', org: 'Design Director, Apex Studio' },
    ],
  },
  fields: {},
  render: ({ props }: BlockRenderProps) => {
    const [current, setCurrent] = useState(0);
    const slides = props.slides || [];
    const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
    const activeSlide = slides[current] || { text: '', author: '', org: '' };

    return (
      <section className="py-16 bg-slate-900 border-y border-slate-800 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <p className="text-xl font-medium text-slate-200 min-h-[60px]">"{activeSlide.text}"</p>
          <div>
            <h4 className="text-sm font-bold text-white">{activeSlide.author}</h4>
            <p className="text-xs text-slate-400">{activeSlide.org}</p>
          </div>
          <div className="flex justify-center items-center gap-3 pt-2">
            <button type="button" onClick={prev} className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-slate-400">
              {current + 1} / {slides.length}
            </span>
            <button type="button" onClick={next} className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    );
  },
};

// 4. Video Testimonial Cards
export const TestimonialsVideoCardsBlock: BlockDefinition = {
  type: 'testimonials-video-cards',
  name: 'Video Case Study Cards',
  category: 'testimonials',
  description: 'Two video case study cards with video badges and success statistics.',
  iconName: 'Video',
  defaultProps: {
    title: 'Real Stories, Genuine Transformations',
    stories: [
      {
        company: 'HyperGrowth Media',
        stat: '350% More Client Projects',
        thumb: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
        summary: 'How an agency scaled from 2 to 25 web builds a quarter without expanding headcount.',
      },
      {
        company: 'FinTrack SaaS',
        stat: 'Launched in 14 Days',
        thumb: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
        summary: 'How a fintech founder bootstrapped their full customer portal with Supabase auth and export.',
      },
    ],
  },
  fields: {
    title: { type: 'text', label: 'Section Title' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{props.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {(props.stories || []).map((s: any, i: number) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl group cursor-pointer">
              <div className="relative aspect-video">
                <img src={s.thumb} alt={s.company} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white translate-x-0.5" />
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <span className="text-xs font-bold text-blue-400">{s.company}</span>
                <h3 className="text-lg font-bold text-white">{s.stat}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{s.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
};

// 5. Team 4-Column Grid
export const TeamGridBlock: BlockDefinition = {
  type: 'team-grid',
  name: '4-Column Team Profiles',
  category: 'team',
  description: 'Leadership team member cards with portraits, names, roles, and social icons.',
  iconName: 'Users',
  defaultProps: {
    heading: 'MEET OUR LEADERSHIP',
    title: 'The Minds Behind WebForge',
    members: [
      { name: 'Dr. Aris Thorne', role: 'Chief Executive Officer', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80' },
      { name: 'Maya Lin', role: 'Head of Product Design', photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80' },
      { name: 'Kaelen Vance', role: 'VP of Engineering', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80' },
      { name: 'Nadia Patel', role: 'Lead Architect (Database & RLS)', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80' },
    ],
  },
  fields: {
    heading: { type: 'text', label: 'Tagline' },
    title: { type: 'text', label: 'Section Title' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600 dark:text-blue-400">{props.heading}</span>
          <h2 className="text-3xl font-extrabold">{props.title}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {(props.members || []).map((m: any, i: number) => (
            <div key={i} className="text-center space-y-3 group">
              <div className="w-36 h-36 mx-auto rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700">
                <img src={m.photo} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">{m.name}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
};

// 6. Detailed Executive Bio
export const TeamDetailedBlock: BlockDefinition = {
  type: 'team-detailed',
  name: 'Detailed Executive Bios',
  category: 'team',
  description: 'Two-column detailed executive profiles with extended biographies and social links.',
  iconName: 'UserCheck',
  defaultProps: {
    title: 'Executive Leadership',
    members: [
      {
        name: 'Julian Sterling',
        title: 'Founder & Chief Architect',
        bio: 'Former principal engineer at large cloud infrastructure firms with 15+ years architecting visual compilers and high-throughput databases.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      },
      {
        name: 'Clara Oswald',
        title: 'Chief Operating Officer',
        bio: 'Led operational scale across three enterprise SaaS acquisitions, specializing in developer ecosystems and global customer onboarding.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  fields: {
    title: { type: 'text', label: 'Title' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">{props.title}</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {(props.members || []).map((m: any, i: number) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-6 items-center">
              <img src={m.image} alt={m.name} className="w-28 h-28 rounded-xl object-cover shrink-0" />
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-lg font-bold text-white">{m.name}</h3>
                <p className="text-xs text-blue-400 font-medium">{m.title}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
};

// 7. Compact Avatar List
export const TeamCompactBlock: BlockDefinition = {
  type: 'team-compact',
  name: 'Compact Contributors List',
  category: 'team',
  description: 'Clean horizontal avatar list showcasing team members and open community contributors.',
  iconName: 'UserPlus',
  defaultProps: {
    title: 'Backed by a Global Core Team',
    subtitle: 'Over 40 core engineers and contributors maintaining our open-source templates and code generators.',
    countText: '+38 more core contributors',
  },
  fields: {
    title: { type: 'text', label: 'Title' },
    subtitle: { type: 'textarea', label: 'Subtitle' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-12 bg-slate-900 border-y border-slate-800 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        <h3 className="text-xl font-bold">{props.title}</h3>
        <p className="text-xs text-slate-400">{props.subtitle}</p>
        <div className="flex items-center justify-center -space-x-2 pt-2">
          {['https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80'
          ].map((url, i) => (
            <img key={i} src={url} alt="Contributor" className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" />
          ))}
          <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-blue-600 text-[10px] font-bold text-white flex items-center justify-center">
            +38
          </div>
        </div>
      </div>
    </section>
  ),
};

export const testimonialsAndTeamBlocks = [
  TestimonialsGridBlock,
  TestimonialsQuoteHeroBlock,
  TestimonialsSliderBlock,
  TestimonialsVideoCardsBlock,
  TeamGridBlock,
  TeamDetailedBlock,
  TeamCompactBlock,
];
