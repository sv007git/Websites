import React, { useState } from 'react';
import { useEditorStore } from '@webforge/editor-core';
import { Modal } from '@webforge/design-system';

export interface NewPageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewPageModal: React.FC<NewPageModalProps> = ({ isOpen, onClose }) => {
  const { addPage } = useEditorStore();
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [layout, setLayout] = useState<'default' | 'blank' | 'admin'>('default');

  const handleNameChange = (val: string) => {
    setName(val);
    setSlug('/' + val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    addPage({
      name: name.trim(),
      slug: slug.trim() || `/${name.toLowerCase()}`,
      isHome: false,
      layout,
      seo: { title: name, description: `The ${name} page`, keywords: '' },
      blocks: [],
    });

    setName('');
    setSlug('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Page" description="Add a new page and route to your project.">
      <form onSubmit={handleCreate} className="space-y-4 text-xs">
        <div className="space-y-1">
          <label className="text-slate-300 font-medium">Page Title</label>
          <input
            type="text"
            required
            placeholder="e.g. Case Studies"
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-1">
          <label className="text-slate-300 font-medium">Route Path</label>
          <input
            type="text"
            required
            placeholder="/case-studies"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-1">
          <label className="text-slate-300 font-medium">Page Layout Template</label>
          <select
            value={layout}
            onChange={(e) => setLayout(e.target.value as any)}
            className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white cursor-pointer"
          >
            <option value="default">Default (Site Navbar & Footer)</option>
            <option value="blank">Blank Canvas (Landing Pages & Modals)</option>
            <option value="admin">Admin Portal (Sidebar Navigation)</option>
          </select>
        </div>

        <div className="pt-2 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow"
          >
            Create Page
          </button>
        </div>
      </form>
    </Modal>
  );
};
