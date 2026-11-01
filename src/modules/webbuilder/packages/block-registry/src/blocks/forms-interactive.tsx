import React, { useState } from 'react';
import { BlockDefinition, BlockRenderProps } from '../types';
import { Mail, Phone, MapPin, Send, ChevronDown, ChevronUp, Star, CheckCircle2, Clock } from 'lucide-react';

// 1. Comprehensive Contact Form
export const FormContactBlock: BlockDefinition = {
  type: 'form-contact',
  name: 'Full Contact Form',
  category: 'forms',
  description: 'Complete contact form with name, email, phone, subject, message fields, and direct company details.',
  iconName: 'Mail',
  defaultProps: {
    heading: 'GET IN TOUCH',
    title: 'Let’s Discuss Your Next Architecture Milestone',
    subtitle: 'Fill out the form and an architect from our engineering team will respond within 24 hours.',
    email: 'contact@webforge.studio',
    phone: '+1 (555) 234-5678',
    address: '100 Innovation Way, Suite 400, San Francisco, CA',
  },
  fields: {
    heading: { type: 'text', label: 'Tagline' },
    title: { type: 'text', label: 'Title' },
    subtitle: { type: 'textarea', label: 'Subtitle' },
    email: { type: 'text', label: 'Email' },
    phone: { type: 'text', label: 'Phone' },
    address: { type: 'text', label: 'Address' },
  },
  render: ({ props }: BlockRenderProps) => {
    const [submitted, setSubmitted] = useState(false);

    return (
      <section className="py-20 bg-slate-900 text-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-bold tracking-widest text-blue-400">{props.heading}</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold">{props.title}</h2>
              <p className="text-sm text-slate-300 leading-relaxed">{props.subtitle}</p>

              <div className="space-y-4 pt-6 border-t border-slate-800 text-xs">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>{props.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{props.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>{props.address}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl">
                {submitted ? (
                  <div className="text-center py-12 space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                    <h3 className="text-xl font-bold">Message Received</h3>
                    <p className="text-xs text-slate-400">Thank you for reaching out. An engineer will be in contact shortly.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-4 text-xs"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-slate-300 font-medium">First & Last Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Jane Doe"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-slate-300 font-medium">Work Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="jane@company.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-slate-300 font-medium">Project Scope / Inquiries</label>
                      <input
                        type="text"
                        placeholder="e.g. Full-stack migration or custom SaaS deployment"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-slate-300 font-medium">Message Details</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Describe your architecture requirements..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors shadow-md flex items-center justify-center gap-2"
                    >
                      <span>Send Project Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
};

// 2. Newsletter Signup Form
export const FormNewsletterBlock: BlockDefinition = {
  type: 'form-newsletter',
  name: 'Minimal Newsletter Signup',
  category: 'forms',
  description: 'Inline email newsletter form with spam protection note.',
  iconName: 'Send',
  defaultProps: {
    title: 'Stay Informed on Web Architecture Trends',
    subtitle: 'Get our bi-weekly deep dives on database security, Next.js optimization, and PHP clean code.',
  },
  fields: {
    title: { type: 'text', label: 'Title' },
    subtitle: { type: 'textarea', label: 'Subtitle' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-16 bg-slate-950 border-b border-slate-800 text-white text-center">
      <div className="max-w-2xl mx-auto px-4 space-y-4">
        <h3 className="text-2xl font-bold">{props.title}</h3>
        <p className="text-xs text-slate-400">{props.subtitle}</p>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-2.5 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button type="submit" className="px-5 py-2.5 text-xs font-bold rounded-lg bg-blue-600 text-white hover:bg-blue-500 shadow">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  ),
};

// 3. Multi-Step Lead Qualification Form
export const FormMultiStepBlock: BlockDefinition = {
  type: 'form-multi-step',
  name: 'Interactive Multi-Step Lead Form',
  category: 'forms',
  description: 'Step-by-step interactive project qualification questionnaire.',
  iconName: 'ListPlus',
  defaultProps: {
    title: 'Estimate Your Software Architecture Scope',
  },
  fields: {
    title: { type: 'text', label: 'Title' },
  },
  render: ({ props }: BlockRenderProps) => {
    const [step, setStep] = useState(1);
    const [target, setTarget] = useState('nextjs');

    return (
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-xl mx-auto px-4">
          <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-xs font-mono text-blue-400">Step {step} of 3</span>
              <span className="text-xs text-slate-400">{step === 1 ? 'Target Stack' : step === 2 ? 'Data Scale' : 'Contact'}</span>
            </div>

            {step === 1 && (
              <div className="space-y-4 text-xs">
                <h4 className="text-base font-bold text-white">Which deployment target do you require?</h4>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTarget('nextjs')}
                    className={`p-4 rounded-xl border text-left transition-colors ${
                      target === 'nextjs' ? 'border-blue-500 bg-blue-500/10' : 'border-slate-800 bg-slate-900'
                    }`}
                  >
                    <p className="font-bold text-white">Target A</p>
                    <p className="text-[11px] text-slate-400 mt-1">Next.js + Supabase (Postgres)</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTarget('php')}
                    className={`p-4 rounded-xl border text-left transition-colors ${
                      target === 'php' ? 'border-blue-500 bg-blue-500/10' : 'border-slate-800 bg-slate-900'
                    }`}
                  >
                    <p className="font-bold text-white">Target B</p>
                    <p className="text-[11px] text-slate-400 mt-1">Modern PHP 8.x + MySQL (Self-Hosted)</p>
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-2.5 rounded-lg bg-blue-600 font-bold text-white hover:bg-blue-500"
                >
                  Continue
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 text-xs">
                <h4 className="text-base font-bold text-white">Estimated Monthly Active Users</h4>
                <div className="space-y-2">
                  {['< 5,000 MAU', '5,000 - 50,000 MAU', '50,000+ Enterprise Scale'].map((scale, i) => (
                    <label key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800 cursor-pointer">
                      <input type="radio" name="scale" defaultChecked={i === 0} />
                      <span className="text-white">{scale}</span>
                    </label>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button type="button" onClick={() => setStep(1)} className="px-4 py-2.5 rounded-lg bg-slate-800 text-slate-300">
                    Back
                  </button>
                  <button type="button" onClick={() => setStep(3)} className="flex-1 py-2.5 rounded-lg bg-blue-600 font-bold text-white">
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 text-xs">
                <h4 className="text-base font-bold text-white">Where should we deliver your estimate?</h4>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                />
                <button
                  type="button"
                  onClick={() => alert('Estimate request received!')}
                  className="w-full py-2.5 rounded-lg bg-emerald-600 font-bold text-white hover:bg-emerald-500"
                >
                  Submit & Receive PDF Spec
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  },
};

// 4. Feedback & NPS Survey Form
export const FormSurveyBlock: BlockDefinition = {
  type: 'form-survey',
  name: 'NPS / Satisfaction Survey',
  category: 'forms',
  description: 'Quick NPS satisfaction widget with 1-10 rating buttons.',
  iconName: 'Smile',
  defaultProps: {
    question: 'How likely are you to recommend WebForge Studio to another engineer or founder?',
  },
  fields: {
    question: { type: 'text', label: 'Survey Question' },
  },
  render: ({ props }: BlockRenderProps) => {
    const [selected, setSelected] = useState<number | null>(null);

    return (
      <section className="py-12 bg-slate-950 text-white text-center border-y border-slate-800">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <h4 className="text-sm font-bold">{props.question}</h4>
          <div className="flex items-center justify-center gap-1.5 flex-wrap">
            {[...Array(10)].map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelected(i + 1)}
                className={`w-9 h-9 rounded-lg text-xs font-bold border transition-colors ${
                  selected === i + 1
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-slate-500 max-w-sm mx-auto">
            <span>Not Likely</span>
            <span>Extremely Likely</span>
          </div>
        </div>
      </section>
    );
  },
};

// 5. Expandable FAQs Accordion
export const InteractiveFaqsBlock: BlockDefinition = {
  type: 'interactive-faqs',
  name: 'Expandable Accordion FAQs',
  category: 'interactive',
  description: 'Clean accordion FAQs answering common technical and architectural questions.',
  iconName: 'HelpCircle',
  defaultProps: {
    tagline: 'FREQUENTLY ASKED QUESTIONS',
    title: 'Everything You Need to Know',
    items: [
      {
        q: 'Do exported applications depend on private WebForge APIs at runtime?',
        a: 'No. WebForge Studio exports 100% self-contained codebases. Your Next.js target connects directly to Supabase/PostgreSQL, and your PHP target connects directly to MySQL via PDO. You never pay builder rent.',
      },
      {
        q: 'How does WebForge handle database schema migrations?',
        a: 'Every time you add a table, column, index, or relationship in the Database Designer, WebForge maintains a sequential SQL migration script (e.g. 00001_initial_schema.sql) ensuring reproducible deployments.',
      },
      {
        q: 'Can I import custom React components or modify the exported code in VS Code?',
        a: 'Yes. The generated source uses standard TypeScript, Tailwind CSS, and React component structures. You can open the project in VS Code, execute `npm run dev`, and commit directly to GitHub.',
      },
      {
        q: 'What is the licensing of the generated applications?',
        a: 'You own 100% of the generated code and database assets. There are zero royalties or recurring fees for commercial redistribution.',
      },
    ],
  },
  fields: {
    tagline: { type: 'text', label: 'Tagline' },
    title: { type: 'text', label: 'Title' },
  },
  render: ({ props }: BlockRenderProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-400">{props.tagline}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold">{props.title}</h2>
          </div>
          <div className="space-y-4">
            {(props.items || []).map((item: any, i: number) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full p-5 text-left text-sm font-bold text-white flex items-center justify-between gap-4"
                  >
                    <span>{item.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-blue-400" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-900 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  },
};

// 6. Interactive Tabbed Content
export const InteractiveTabsBlock: BlockDefinition = {
  type: 'interactive-tabs',
  name: 'Multi-Tab Content Section',
  category: 'interactive',
  description: 'Tab switch component displaying distinct copy and features per tab.',
  iconName: 'FolderTab',
  defaultProps: {
    tabs: [
      { id: 'tab1', title: 'Data Architecture', content: 'Design tables, relationships, and write Row Level Security policies with zero vendor lock-in.' },
      { id: 'tab2', title: 'Visual Composition', content: 'Assemble responsive multi-page web applications with over 50 production-grade blocks.' },
      { id: 'tab3', title: 'Source Code Export', content: 'Download a clean Next.js 14+ or modern PHP 8.x repository with migrations and seed data.' },
    ],
  },
  fields: {},
  render: ({ props }: BlockRenderProps) => {
    const tabs = props.tabs || [];
    const [active, setActive] = useState(tabs[0]?.id || 'tab1');
    const current = tabs.find((t: any) => t.id === active) || tabs[0];

    return (
      <section className="py-16 bg-slate-950 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center border-b border-slate-800 mb-8">
            {tabs.map((t: any) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(t.id)}
                className={`px-5 py-3 text-xs font-semibold border-b-2 transition-colors ${
                  active === t.id ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400'
                }`}
              >
                {t.title}
              </button>
            ))}
          </div>
          {current && <p className="text-sm text-slate-300 leading-relaxed p-6 bg-slate-900 rounded-xl border border-slate-800">{current.content}</p>}
        </div>
      </section>
    );
  },
};

// 7. Company Roadmap / Timeline
export const InteractiveTimelineBlock: BlockDefinition = {
  type: 'interactive-timeline',
  name: 'Milestone Roadmap Timeline',
  category: 'interactive',
  description: 'Vertical timeline showcasing key milestones and product history.',
  iconName: 'Clock',
  defaultProps: {
    title: 'Product Evolution & Roadmap',
    milestones: [
      { date: 'Q1 2024', title: 'WebForge Engine v1.0', desc: 'Core drag-and-drop AST engine and responsive viewport simulator.' },
      { date: 'Q2 2024', title: 'PostgreSQL & RLS Studio', desc: 'Integrated visual database designer and SQL migration compiler.' },
      { date: 'Q3 2024', title: 'PHP 8.x Standalone Target', desc: 'Clean MVC, PDO prepared statements, and self-hosted export.' },
      { date: 'Q4 2024', title: 'AI Autonomous Generation', desc: 'Natural language full-stack application synthesis and schema repair.' },
    ],
  },
  fields: {
    title: { type: 'text', label: 'Title' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">{props.title}</h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
          {(props.milestones || []).map((m: any, i: number) => (
            <div key={i} className="relative flex items-start gap-6 pl-10">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900" />
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-blue-400">{m.date}</span>
                <h4 className="text-base font-bold text-white">{m.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
};

// 8. Embedded Map & Location
export const InteractiveMapBlock: BlockDefinition = {
  type: 'interactive-map',
  name: 'Office Location & Map',
  category: 'interactive',
  description: 'Google Maps embed container paired with office address, hours, and contact details.',
  iconName: 'Map',
  defaultProps: {
    title: 'Visit Our Innovation Center',
    address: '100 Innovation Way, San Francisco, CA',
    hours: 'Monday - Friday: 9am - 6pm PST',
    phone: '+1 (555) 234-5678',
  },
  fields: {
    title: { type: 'text', label: 'Title' },
    address: { type: 'text', label: 'Address' },
    hours: { type: 'text', label: 'Hours' },
  },
  render: ({ props }: BlockRenderProps) => (
    <section className="py-16 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-center">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{props.title}</h3>
          <div className="space-y-2 text-xs text-slate-300">
            <p><strong>Address:</strong> {props.address}</p>
            <p><strong>Hours:</strong> {props.hours}</p>
            <p><strong>Phone:</strong> {props.phone}</p>
          </div>
        </div>
        <div className="md:col-span-2 rounded-2xl overflow-hidden border border-slate-800 shadow-xl h-64 bg-slate-900 flex items-center justify-center text-slate-500 text-xs font-mono">
          [Interactive Map Container: {props.address}]
        </div>
      </div>
    </section>
  ),
};

export const formsAndInteractiveBlocks = [
  FormContactBlock,
  FormNewsletterBlock,
  FormMultiStepBlock,
  FormSurveyBlock,
  InteractiveFaqsBlock,
  InteractiveTabsBlock,
  InteractiveTimelineBlock,
  InteractiveMapBlock,
];
