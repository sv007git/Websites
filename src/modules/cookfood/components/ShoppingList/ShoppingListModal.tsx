import React, { useState } from 'react';
import {
  X,
  Trash2,
  Plus,
  CheckCircle2,
  Circle,
  Copy,
  Check,
  Share2,
  ShoppingCart,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ShoppingListModal: React.FC = () => {
  const {
    shoppingList,
    toggleShoppingItem,
    removeShoppingItem,
    clearShoppingList,
    addCustomShoppingItem,
    isShoppingListOpen,
    setIsShoppingListOpen,
    t,
  } = useApp();

  const [newItemName, setNewItemName] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isShoppingListOpen) return null;

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItemName.trim()) {
      addCustomShoppingItem(newItemName.trim());
      setNewItemName('');
    }
  };

  const handleCopy = () => {
    if (shoppingList.length === 0) return;
    const lines = ['🛒 CookFood Shopping List:'];
    shoppingList.forEach((item) => {
      lines.push(`${item.completed ? '✓ ' : '• '} ${item.name} (${item.quantityString})`);
    });
    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    if (shoppingList.length === 0) return;
    const lines = ['*🛒 CookFood Shopping List*'];
    shoppingList.forEach((item) => {
      lines.push(`${item.completed ? '✅' : '▫️'} ${item.name} - ${item.quantityString}`);
    });
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#1a1715] rounded-3xl w-full max-w-lg max-h-[85vh] flex flex-col shadow-2xl border border-amber-200 dark:border-neutral-800 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-amber-100 dark:border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white">
                {t.shoppingList}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {shoppingList.length} items in your basket
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsShoppingListOpen(false)}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Add Custom Item Input */}
        <form onSubmit={handleAddItem} className="p-4 bg-amber-50/50 dark:bg-neutral-900/50 border-b border-amber-100 dark:border-neutral-800 flex gap-2">
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="Add custom item (e.g. Milk 1L, Fresh Coriander)..."
            className="flex-1 px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-amber-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-saffron-500"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-saffron-600 hover:bg-saffron-500 text-white font-bold text-xs flex items-center gap-1 shadow-sm transition"
          >
            <Plus className="w-4 h-4" />
            <span>Add</span>
          </button>
        </form>

        {/* List of Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-2">
          {shoppingList.length === 0 ? (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              <ShoppingCart className="w-12 h-12 mx-auto stroke-1 text-gray-300 dark:text-neutral-700 mb-2" />
              <p className="text-sm">{t.emptyShoppingList}</p>
            </div>
          ) : (
            shoppingList.map((item) => (
              <div
                key={item.id}
                className={`flex items-center justify-between p-3 rounded-2xl border transition-all ${
                  item.completed
                    ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/40 opacity-70'
                    : 'bg-white dark:bg-[#1f1c19] border-amber-200/60 dark:border-neutral-800'
                }`}
              >
                <div
                  onClick={() => toggleShoppingItem(item.id)}
                  className="flex items-center gap-3 cursor-pointer flex-1 min-w-0 pr-2 select-none"
                >
                  {item.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-300 dark:text-neutral-600 shrink-0" />
                  )}
                  <div className="min-w-0">
                    <span
                      className={`text-sm font-semibold block truncate ${
                        item.completed
                          ? 'line-through text-gray-400'
                          : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      {item.name}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-saffron-600 dark:text-saffron-400 font-medium">
                      <span>{item.quantityString}</span>
                      {item.recipeTitle && (
                        <span className="text-[10px] text-gray-400 dark:text-gray-500 truncate">
                          ({item.recipeTitle})
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeShoppingItem(item.id)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-neutral-800 transition"
                  title="Delete item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        {shoppingList.length > 0 && (
          <div className="p-4 border-t border-amber-100 dark:border-neutral-800 flex items-center justify-between gap-2 flex-wrap">
            <button
              onClick={clearShoppingList}
              className="text-xs text-red-600 dark:text-red-400 font-semibold hover:underline"
            >
              {t.clearAll}
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-xl border border-amber-200 dark:border-neutral-700 text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5 hover:bg-amber-50 dark:hover:bg-neutral-800 transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>

              <button
                onClick={handleWhatsAppShare}
                className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
