import { Project, PageDefinition } from '@webforge/schema';
import { generateFullSupabaseMigration, generateSupabaseClientCode } from '@webforge/backend-adapters';

export interface GeneratedFile {
  path: string;
  content: string;
}

export function generateNextJsProject(project: Project): GeneratedFile[] {
  const files: GeneratedFile[] = [];

  // 1. package.json
  files.push({
    path: 'package.json',
    content: JSON.stringify(
      {
        name: project.slug || 'webforge-app',
        version: '1.0.0',
        private: true,
        scripts: {
          dev: 'next dev',
          build: 'next build',
          start: 'next start',
          lint: 'next lint',
        },
        dependencies: {
          next: '^14.2.3',
          react: '^18.3.1',
          'react-dom': '^18.3.1',
          '@supabase/supabase-js': '^2.43.4',
          'lucide-react': '^0.395.0',
          clsx: '^2.1.1',
          'tailwind-merge': '^2.3.0',
        },
        devDependencies: {
          typescript: '^5.4.5',
          '@types/node': '^20.14.0',
          '@types/react': '^18.3.3',
          '@types/react-dom': '^18.3.0',
          tailwindcss: '^3.4.3',
          postcss: '^8.4.38',
          autoprefixer: '^10.4.19',
        },
      },
      null,
      2
    ),
  });

  // 2. tsconfig.json
  files.push({
    path: 'tsconfig.json',
    content: JSON.stringify(
      {
        compilerOptions: {
          lib: ['dom', 'dom.iterable', 'esnext'],
          allowJs: true,
          skipLibCheck: true,
          strict: true,
          noEmit: true,
          esModuleInterop: true,
          module: 'esnext',
          moduleResolution: 'bundler',
          resolveJsonModule: true,
          isolatedModules: true,
          jsx: 'preserve',
          incremental: true,
          plugins: [{ name: 'next' }],
          paths: { '@/*': ['./*'] },
        },
        include: ['next-env.d.ts', '**/*.ts', '**/*.tsx', '.next/types/**/*.ts'],
        exclude: ['node_modules'],
      },
      null,
      2
    ),
  });

  // 3. tailwind.config.js
  files.push({
    path: 'tailwind.config.js',
    content: `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '${project.theme.colors.primary}',
        'primary-hover': '${project.theme.colors.primaryHover}',
        accent: '${project.theme.colors.accent}',
      },
    },
  },
  plugins: [],
};
`,
  });

  // 4. postcss.config.js
  files.push({
    path: 'postcss.config.js',
    content: `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`,
  });

  // 5. app/globals.css
  files.push({
    path: 'app/globals.css',
    content: `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: ${project.theme.colors.primary};
  --background: ${project.theme.colors.background};
  --text: ${project.theme.colors.text};
}

body {
  color: var(--text);
  background: var(--background);
  font-family: ${project.theme.typography.bodyFont};
}
`,
  });

  // 6. Root Layout (app/layout.tsx)
  files.push({
    path: 'app/layout.tsx',
    content: `import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${project.seo.siteName}',
  description: '${project.seo.defaultDescription}',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
`,
  });

  // 7. Generate pages
  project.pages.forEach((page) => {
    const isRoot = page.isHome || page.slug === '/';
    const filePath = isRoot
      ? 'app/page.tsx'
      : `app/${page.slug.replace(/^\//, '')}/page.tsx`;

    files.push({
      path: filePath,
      content: generateNextJsPageCode(page, project),
    });
  });

  // 8. Supabase client
  files.push({
    path: 'lib/supabase/client.ts',
    content: generateSupabaseClientCode(),
  });

  // 9. Supabase migrations and seed
  const { migrationSql, seedSql } = generateFullSupabaseMigration(project.database);
  files.push({
    path: 'supabase/migrations/00001_initial_schema.sql',
    content: migrationSql,
  });
  files.push({
    path: 'supabase/seed.sql',
    content: seedSql,
  });

  // 10. API Route Handlers
  project.database.tables.forEach((table) => {
    files.push({
      path: `app/api/${table.name}/route.ts`,
      content: `import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/client';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('${table.name}')
      .select('*')
      .order('id', { ascending: false })
      .limit(100);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { data, error } = await supabase
      .from('${table.name}')
      .insert([body])
      .select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
`,
    });
  });

  // 11. .env.example
  files.push({
    path: '.env.example',
    content: `# Supabase Project Credentials
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Optional Stripe Integration
STRIPE_SECRET_KEY=sk_test_placeholder
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_placeholder
`,
  });

  // 12. README.md
  files.push({
    path: 'README.md',
    content: `# ${project.name} (Generated by WebForge Studio)

This is a 100% standalone, production-ready full-stack application built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and **Supabase (PostgreSQL with Row Level Security)**.

## Getting Started

### 1. Install dependencies
\`\`\`bash
npm install
\`\`\`

### 2. Configure Environment
Copy \`.env.example\` to \`.env.local\` and fill in your Supabase credentials:
\`\`\`bash
cp .env.example .env.local
\`\`\`

### 3. Database Setup (Supabase)
Run the SQL migration in \`supabase/migrations/00001_initial_schema.sql\` in your Supabase SQL Editor.
Optionally load seed records from \`supabase/seed.sql\`.

### 4. Run Development Server
\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the live application.
`,
  });

  return files;
}

function generateNextJsPageCode(page: PageDefinition, project: Project): string {
  return `import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '${page.seo.title || page.name} | ${project.name}',
  description: '${page.seo.description || project.description}',
};

export default function Page() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      {/* Page Title & Navigation Banner */}
      <section className="bg-slate-900 border-b border-slate-800 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-extrabold text-xl text-white tracking-tight">${project.name}</span>
          <nav className="flex items-center gap-6 text-sm text-slate-300">
            ${project.pages
              .map(
                (p) =>
                  `<Link href="${p.slug}" className="hover:text-white transition-colors">${p.name}</Link>`
              )
              .join('\n            ')}
          </nav>
        </div>
      </section>

      {/* Rendered Block Composition */}
      <div className="flex-1 space-y-12">
        ${page.blocks
          .filter((b) => !b.hidden)
          .map((b) => `
        <div id="${b.id}" className="w-full">
          <!-- Block: ${b.name} (${b.type}) -->
          <div className="w-full">
            <h2 className="sr-only">${b.name}</h2>
            <!-- Pre-rendered block representation -->
            <div className="py-8 px-4 max-w-7xl mx-auto">
              ${b.props.title ? `<h3 className="text-3xl font-extrabold text-white mb-2">${b.props.title}</h3>` : ''}
              ${b.props.subtitle ? `<p className="text-slate-400 mb-6 max-w-2xl">${b.props.subtitle}</p>` : ''}
              ${b.props.description ? `<p className="text-slate-400 mb-6 max-w-2xl">${b.props.description}</p>` : ''}
            </div>
          </div>
        </div>`)
          .join('\n')}
      </div>

      {/* Standard Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-xs text-slate-500">
        <p>&copy; ${new Date().getFullYear()} ${project.name}. Generated by WebForge Studio.</p>
      </footer>
    </main>
  );
}
`;
}
