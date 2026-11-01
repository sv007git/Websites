import React, { useState } from 'react';
import { X, Copy, Check, Download, FileCode, Plus, Trash2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Recipe, Ingredient, CookingStep } from '../../types/recipe';

export const RecipeBuilderModal: React.FC = () => {
  const { isRecipeBuilderOpen, setIsRecipeBuilderOpen } = useApp();
  const [copied, setCopied] = useState(false);

  // Form State
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [hindiTitle, setHindiTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=900&auto=format&fit=crop&q=80');
  const [cuisine, setCuisine] = useState('South Indian');
  const [mealTime, setMealTime] = useState<'breakfast' | 'lunch' | 'dinner' | 'snacks' | 'sweets' | 'drinks' | 'healthy'>('breakfast');
  const [difficulty, setDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Easy');
  const [servings, setServings] = useState(4);
  const [prepTime, setPrepTime] = useState(15);
  const [cookTime, setCookTime] = useState(20);
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { name: 'Rice', quantity: 2, unit: 'cup', scalable: true },
    { name: 'Salt', quantity: 1, unit: 'tsp', scalable: true, notes: 'to taste' },
  ]);
  const [instructions, setInstructions] = useState<CookingStep[]>([
    { stepNumber: 1, title: 'Preparation', instruction: 'Rinse ingredients well under cold water.' },
    { stepNumber: 2, title: 'Cooking', instruction: 'Cook on medium heat until tender.' },
  ]);

  if (!isRecipeBuilderOpen) return null;

  const handleTitleChange = (val: string) => {
    setTitle(val);
    setSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: 1, unit: 'cup', scalable: true }]);
  };

  const handleRemoveIngredient = (idx: number) => {
    setIngredients(ingredients.filter((_, i) => i !== idx));
  };

  const handleAddStep = () => {
    setInstructions([
      ...instructions,
      { stepNumber: instructions.length + 1, instruction: '' },
    ]);
  };

  const handleRemoveStep = (idx: number) => {
    const updated = instructions
      .filter((_, i) => i !== idx)
      .map((s, i) => ({ ...s, stepNumber: i + 1 }));
    setInstructions(updated);
  };

  const generatedRecipe: Recipe = {
    id: slug || 'new-recipe',
    slug: slug || 'new-recipe',
    title: title || 'Untitled Recipe',
    hindiTitle: hindiTitle || undefined,
    description: description || 'Delicious homemade recipe.',
    image,
    cuisine: [cuisine],
    mealTimes: [mealTime],
    categories: [mealTime],
    diet: ['vegetarian'],
    servings: Number(servings) || 4,
    prepTime: Number(prepTime) || 15,
    cookTime: Number(cookTime) || 20,
    totalTime: (Number(prepTime) || 15) + (Number(cookTime) || 20),
    difficulty,
    rating: 4.8,
    reviewCount: 1,
    ingredients,
    instructions,
    tips: ['Cook with patience for authentic flavor.'],
    tags: [cuisine.toLowerCase(), mealTime],
    author: 'CookFood Contributor',
  };

  const jsonString = JSON.stringify(generatedRecipe, null, 2);

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJSON = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${slug || 'recipe'}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#1a1715] rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl border border-amber-200 dark:border-neutral-800 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-amber-100 dark:border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-saffron-100 dark:bg-saffron-950/60 text-saffron-600 flex items-center justify-center">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white">
                Recipe Importer & JSON Schema Editor
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Create or validate recipes and export standard CookFood JSON
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsRecipeBuilderOpen(false)}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content (2 Columns on Desktop) */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Input Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                Recipe Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="e.g. Tomato Rasam"
                className="w-full text-sm p-2.5 rounded-xl border border-amber-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                  URL Slug
                </label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-amber-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                  Regional Title (optional)
                </label>
                <input
                  type="text"
                  value={hindiTitle}
                  onChange={(e) => setHindiTitle(e.target.value)}
                  placeholder="e.g. टमाटर रसम"
                  className="w-full text-sm p-2.5 rounded-xl border border-amber-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                Description
              </label>
              <textarea
                rows={2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Aromatic South Indian soup..."
                className="w-full text-xs p-2.5 rounded-xl border border-amber-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                  Cuisine
                </label>
                <input
                  type="text"
                  value={cuisine}
                  onChange={(e) => setCuisine(e.target.value)}
                  className="w-full text-xs p-2 rounded-xl border border-amber-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                  Meal Time
                </label>
                <select
                  value={mealTime}
                  onChange={(e) => setMealTime(e.target.value as any)}
                  className="w-full text-xs p-2 rounded-xl border border-amber-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white"
                >
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="snacks">Snacks</option>
                  <option value="sweets">Sweets</option>
                  <option value="drinks">Drinks</option>
                  <option value="healthy">Healthy</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                  Base Servings
                </label>
                <input
                  type="number"
                  value={servings}
                  onChange={(e) => setServings(Number(e.target.value))}
                  className="w-full text-xs p-2 rounded-xl border border-amber-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            {/* Ingredients builder */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                  Ingredients ({ingredients.length})
                </span>
                <button
                  type="button"
                  onClick={handleAddIngredient}
                  className="text-xs text-saffron-600 font-bold hover:underline flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Ingredient</span>
                </button>
              </div>
              <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                {ingredients.map((ing, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Name"
                      value={ing.name}
                      onChange={(e) => {
                        const copy = [...ingredients];
                        copy[i].name = e.target.value;
                        setIngredients(copy);
                      }}
                      className="flex-1 text-xs p-1.5 rounded-lg border border-amber-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white"
                    />
                    <input
                      type="number"
                      placeholder="Qty"
                      value={ing.quantity ?? ''}
                      onChange={(e) => {
                        const copy = [...ingredients];
                        copy[i].quantity = e.target.value ? Number(e.target.value) : null;
                        setIngredients(copy);
                      }}
                      className="w-16 text-xs p-1.5 rounded-lg border border-amber-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white"
                    />
                    <input
                      type="text"
                      placeholder="Unit"
                      value={ing.unit}
                      onChange={(e) => {
                        const copy = [...ingredients];
                        copy[i].unit = e.target.value;
                        setIngredients(copy);
                      }}
                      className="w-16 text-xs p-1.5 rounded-lg border border-amber-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveIngredient(i)}
                      className="text-gray-400 hover:text-red-500 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps builder */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                  Instructions ({instructions.length})
                </span>
                <button
                  type="button"
                  onClick={handleAddStep}
                  className="text-xs text-saffron-600 font-bold hover:underline flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Step</span>
                </button>
              </div>
              <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                {instructions.map((step, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-xs font-bold text-saffron-600 mt-2">#{i + 1}</span>
                    <textarea
                      rows={2}
                      placeholder="Instruction text..."
                      value={step.instruction}
                      onChange={(e) => {
                        const copy = [...instructions];
                        copy[i].instruction = e.target.value;
                        setInstructions(copy);
                      }}
                      className="flex-1 text-xs p-1.5 rounded-lg border border-amber-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveStep(i)}
                      className="text-gray-400 hover:text-red-500 p-1 mt-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Live JSON Output */}
          <div className="flex flex-col bg-gray-900 text-gray-200 rounded-2xl p-4 font-mono text-xs overflow-hidden">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-800">
              <span className="text-amber-400 font-bold">CookFood Schema Valid JSON</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyJSON}
                  className="px-2.5 py-1 rounded-md bg-gray-800 hover:bg-gray-700 text-white flex items-center gap-1 transition"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
                <button
                  onClick={handleDownloadJSON}
                  className="px-2.5 py-1 rounded-md bg-saffron-600 hover:bg-saffron-500 text-white flex items-center gap-1 transition"
                >
                  <Download className="w-3 h-3" />
                  <span>Download .json</span>
                </button>
              </div>
            </div>
            <pre className="flex-1 overflow-auto p-2 bg-black/40 rounded-lg text-[11px] leading-relaxed text-amber-100">
              {jsonString}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
