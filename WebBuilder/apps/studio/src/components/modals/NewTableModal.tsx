import React, { useState } from 'react';
import { useEditorStore } from '@webforge/editor-core';
import { Modal } from '@webforge/design-system';

export interface NewTableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewTableModal: React.FC<NewTableModalProps> = ({ isOpen, onClose }) => {
  const { addTable } = useEditorStore();
  const [name, setName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (val: string) => {
    const clean = val.toLowerCase().replace(/[^a-z0-9_]+/g, '_');
    setName(clean);
    if (!displayName || displayName === name.toUpperCase()) {
      setDisplayName(clean.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()));
    }
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    addTable({
      name: name.trim(),
      displayName: displayName.trim() || name.trim(),
      description: description.trim(),
      columns: [
        {
          id: `col-id-${Date.now()}`,
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          isNullable: false,
          isUnique: true,
        },
        {
          id: `col-title-${Date.now()}`,
          name: 'title',
          type: 'text',
          isPrimary: false,
          isNullable: false,
          isUnique: false,
        },
        {
          id: `col-created-${Date.now()}`,
          name: 'created_at',
          type: 'timestamp',
          isPrimary: false,
          isNullable: false,
          isUnique: false,
          defaultValue: 'now()',
        },
      ],
      rlsPolicies: [
        {
          id: `pol-${Date.now()}`,
          name: `Allow authenticated on ${name}`,
          command: 'ALL',
          role: 'authenticated',
          using: 'true',
        },
      ],
      seedData: [],
    });

    setName('');
    setDisplayName('');
    setDescription('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create PostgreSQL Table"
      description="Define a new relational table with primary keys, indexes, and RLS policies."
    >
      <form onSubmit={handleCreate} className="space-y-4 text-xs">
        <div className="space-y-1">
          <label className="text-slate-300 font-medium">Table Identifier (SQL name)</label>
          <input
            type="text"
            required
            placeholder="e.g. customer_invoices"
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-1">
          <label className="text-slate-300 font-medium">Human Display Title</label>
          <input
            type="text"
            placeholder="e.g. Customer Invoices"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-1">
          <label className="text-slate-300 font-medium">Description (optional)</label>
          <textarea
            rows={2}
            placeholder="Describe the business purpose of this table..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white resize-none"
          />
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
            Create Table
          </button>
        </div>
      </form>
    </Modal>
  );
};
