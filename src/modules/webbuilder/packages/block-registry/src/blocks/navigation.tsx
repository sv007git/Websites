import React, { useState } from 'react';
import { BlockDefinition, BlockRenderProps } from '../types';
import { Menu, X, ArrowRight, ShieldCheck, ChevronDown, Globe } from 'lucide-react';

// 1. Classic Navbar
export const NavbarClassicBlock: BlockDefinition = {
  type: 'navbar-classic',
  name: 'Classic Navigation',
  category: 'navigation',
  description: 'Standard responsive navbar with brand logo, nav links, and primary CTA button.',
  iconName: 'Navigation',
  defaultProps: {
    brandName: 'WebForge',
    logoUrl: '',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Solutions', href: '#solutions' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Company', href: '#company' },
    ],
    ctaText: 'Get Started',
    ctaLink: '/signup',
    showCta: true,
  },
  fields: {
    brandName: { type: 'text', label: 'Brand Name' },
    logoUrl: { type: 'image', label: 'Logo Image URL' },
    showCta: { type: 'boolean', label: 'Show CTA Button' },
    ctaText: { type: 'text', label: 'CTA Text' },
    ctaLink: { type: 'text', label: 'CTA Link' },
  },
  render: ({ props }: BlockRenderProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    return (
      <header className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {props.logoUrl ? (
              <img src={props.logoUrl} alt={props.brandName} className="h-8 w-auto" />
            ) : (
              <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                {props.brandName.charAt(0)}
              </div>
            )}
            <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
              {props.brandName}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {(props.links || []).map((link: any, i: number) => (
              <a
                key={i}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {props.showCta && (
              <a
                href={props.ctaLink || '#'}
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
              >
                {props.ctaText}
              </a>
            )}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 px-4 pt-3 pb-4 space-y-2 bg-white dark:bg-slate-900">
            {(props.links || []).map((link: any, i: number) => (
              <a
                key={i}
                href={link.href}
                className="block py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}
            {props.showCta && (
              <a
                href={props.ctaLink || '#'}
                className="block text-center mt-2 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white"
              >
                {props.ctaText}
              </a>
            )}
          </div>
        )}
      </header>
    );
  },
};

// 2. Sticky Glass Navbar
export const NavbarStickyBlock: BlockDefinition = {
  type: 'navbar-sticky',
  name: 'Sticky Glass Navbar',
  category: 'navigation',
  description: 'Modern floating glassmorphism navbar with blur backdrop and quick actions.',
  iconName: 'Layers',
  defaultProps: {
    brandName: 'StudioOne',
    tagline: 'Platform',
    links: [
      { label: 'Products', href: '#products' },
      { label: 'Integrations', href: '#integrations' },
      { label: 'Changelog', href: '#changelog' },
      { label: 'Docs', href: '#docs' },
    ],
    actionText: 'Book a Demo',
    actionLink: '/demo',
  },
  fields: {
    brandName: { type: 'text', label: 'Brand Name' },
    tagline: { type: 'text', label: 'Tagline Badge' },
    actionText: { type: 'text', label: 'Action Text' },
    actionLink: { type: 'text', label: 'Action Link' },
  },
  render: ({ props }: BlockRenderProps) => (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs shadow">
            ✦
          </div>
          <span className="font-semibold text-slate-900 dark:text-white tracking-tight">
            {props.brandName}
          </span>
          {props.tagline && (
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              {props.tagline}
            </span>
          )}
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {(props.links || []).map((link: any, i: number) => (
            <a
              key={i}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={props.actionLink || '#'}
          className="inline-flex items-center gap-1 px-4 py-2 text-xs font-semibold rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:opacity-90 transition-opacity shadow-sm"
        >
          <span>{props.actionText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  ),
};

// 3. Centered Brand Navbar
export const NavbarCenteredBlock: BlockDefinition = {
  type: 'navbar-centered',
  name: 'Centered Brand Navbar',
  category: 'navigation',
  description: 'Editorial-style header with centered brand emblem and split navigation menus.',
  iconName: 'AlignCenter',
  defaultProps: {
    brandName: 'THE ATELIER',
    subBrand: 'EST. 2024',
    leftLinks: [
      { label: 'Collection', href: '#collection' },
      { label: 'Journal', href: '#journal' },
    ],
    rightLinks: [
      { label: 'Stockists', href: '#stockists' },
      { label: 'Cart (0)', href: '#cart' },
    ],
  },
  fields: {
    brandName: { type: 'text', label: 'Brand Name' },
    subBrand: { type: 'text', label: 'Sub-brand text' },
  },
  render: ({ props }: BlockRenderProps) => (
    <header className="w-full bg-stone-50 dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 py-4 transition-colors">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {(props.leftLinks || []).map((link: any, i: number) => (
            <a
              key={i}
              href={link.href}
              className="text-xs uppercase tracking-widest font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-center">
          <h1 className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-stone-900 dark:text-stone-100 uppercase">
            {props.brandName}
          </h1>
          <p className="text-[9px] uppercase tracking-widest text-stone-500 font-mono">
            {props.subBrand}
          </p>
        </div>

        <div className="flex items-center gap-6">
          {(props.rightLinks || []).map((link: any, i: number) => (
            <a
              key={i}
              href={link.href}
              className="text-xs uppercase tracking-widest font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  ),
};

// 4. Navbar with Top Announcement Banner
export const NavbarBannerBlock: BlockDefinition = {
  type: 'navbar-banner',
  name: 'Navbar with Banner',
  category: 'navigation',
  description: 'Top notification banner paired with full corporate navigation bar and region switcher.',
  iconName: 'Megaphone',
  defaultProps: {
    bannerText: '🚀 WebForge v2.0 is now live — experience the full-stack visual builder.',
    bannerLinkText: 'Learn more',
    bannerHref: '#',
    brandName: 'CloudScale',
    links: [
      { label: 'Platform', href: '#platform' },
      { label: 'Enterprise', href: '#enterprise' },
      { label: 'Customers', href: '#customers' },
      { label: 'Pricing', href: '#pricing' },
    ],
    loginText: 'Log In',
    signupText: 'Start Free Trial',
  },
  fields: {
    bannerText: { type: 'text', label: 'Banner Notice' },
    bannerLinkText: { type: 'text', label: 'Banner Link Text' },
    brandName: { type: 'text', label: 'Brand Name' },
    loginText: { type: 'text', label: 'Login Text' },
    signupText: { type: 'text', label: 'Signup Text' },
  },
  render: ({ props }: BlockRenderProps) => (
    <div className="w-full">
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span>{props.bannerText}</span>
        {props.bannerLinkText && (
          <a href={props.bannerHref || '#'} className="underline hover:text-blue-200 font-semibold inline-flex items-center">
            {props.bannerLinkText} <ArrowRight className="w-3 h-3 ml-0.5 inline" />
          </a>
        )}
      </div>

      <header className="w-full bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="font-extrabold text-xl text-white tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-blue-500 text-white flex items-center justify-center text-xs">▲</span>
              {props.brandName}
            </span>

            <nav className="hidden lg:flex items-center gap-6">
              {(props.links || []).map((link: any, i: number) => (
                <a key={i} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a href="/login" className="text-xs font-semibold text-slate-300 hover:text-white">
              {props.loginText}
            </a>
            <a
              href="/signup"
              className="px-4 py-2 text-xs font-semibold rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors shadow"
            >
              {props.signupText}
            </a>
          </div>
        </div>
      </header>
    </div>
  ),
};

export const navigationBlocks = [
  NavbarClassicBlock,
  NavbarStickyBlock,
  NavbarCenteredBlock,
  NavbarBannerBlock,
];
