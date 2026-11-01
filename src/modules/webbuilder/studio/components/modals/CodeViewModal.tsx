import React, { useState } from 'react';
import { useEditorStore } from '@webforge/editor-core';
import { generateNextJsProject } from '@webforge/codegen';
import { generatePhpProject } from '@webforge/codegen';
import { Code, Copy, Check, X, FileCode } from 'lucide-react';

export const CodeViewModal: React.FC = () => {
  const { project, isCodeViewOpen, setCodeViewOpen } = useEditorStore();
  const [activeTab, setActiveTab] = useState<'nextjs' | 'supabase_sql' | 'php' | 'mysql_sql' | 'ast'>('nextjs');
  const [copied, setCopied] = useState(false);

  if (!isCodeViewOpen) return null;

  const nextFiles = generateNextJsProject(project);
  const phpFiles = generatePhpProject(project);

  const getActiveCode = (): { filename: string; code: string } => {
    switch (activeTab) {
      case 'nextjs': {
        const pageFile = nextFiles.find((f) => f.path === 'app/page.tsx') || nextFiles[0];
        return { filename: 'app/page.tsx', code: pageFile?.content || '' };
      }
      case 'supabase_sql': {
        const sqlFile = nextFiles.find((f) => f.path.includes('initial_schema.sql'));
        return { filename: 'supabase/migrations/00001_initial_schema.sql', code: sqlFile?.content || '' };
      }
      case 'php': {
        const phpFile = phpFiles.find((f) => f.path === 'public/index.php');
        return { filename: 'public/index.php', code: phpFile?.content || '' };
      }
      case 'mysql_sql': {
        const mysqlFile = phpFiles.find((f) => f.path === 'database/schema.sql');
        return { filename: 'database/schema.sql', code: mysqlFile?.content || '' };
      }
      case 'ast': {
        return { filename: 'project.json', code: JSON.stringify(project, null, 2) };
      }
    }
  };

  const { filename, code } = getActiveCode();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col h-[85vh] overflow-hidden text-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-400" />
            <div>
              <h3 className="text-sm font-bold text-white">Live Source Code Inspector</h3>
              <p className="text-[11px] text-slate-400">Inspecting real-time compilation output from canonical AST.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setCodeViewOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center justify-between px-6 bg-slate-950 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('nextjs')}
              className={`py-3 px-3 font-semibold border-b-2 transition-colors ${
                activeTab === 'nextjs' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Next.js 14 Page
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('supabase_sql')}
              className={`py-3 px-3 font-semibold border-b-2 transition-colors ${
                activeTab === 'supabase_sql' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Supabase / Postgres SQL (RLS)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('php')}
              className={`py-3 px-3 font-semibold border-b-2 transition-colors ${
                activeTab === 'php' ? 'border-amber-500 text-amber-400' : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              PHP 8.x Router
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('mysql_sql')}
              className={`py-3 px-3 font-semibold border-b-2 transition-colors ${
                activeTab === 'mysql_sql' ? 'border-amber-500 text-amber-400' : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              MySQL Schema DDL
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('ast')}
              className={`py-3 px-3 font-semibold border-b-2 transition-colors ${
                activeTab === 'ast' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Canonical JSON AST
            </button>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        {/* Code Viewer */}
        <div className="flex-1 bg-slate-950 p-4 overflow-auto font-mono text-xs text-slate-200">
          <div className="text-[10px] text-slate-500 mb-2 font-mono flex items-center gap-1">
            <FileCode className="w-3 h-3 text-slate-400" />
            <span>{filename}</span>
          </div>
          <pre className="whitespace-pre overflow-x-auto leading-relaxed select-text">{code}</pre>
        </div>
      </div>
    </div>
  );
};
