import React, { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { ScaledIngredient } from '../../utils/quantityScaler';

interface IngredientListProps {
  ingredients: ScaledIngredient[];
  recipeTitle: string;
}

export const IngredientList: React.FC<IngredientListProps> = ({ ingredients }) => {
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({});

  const toggleCheck = (index: number) => {
    setCheckedMap((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Group ingredients by section
  const sections: { sectionName: string; items: { ingredient: ScaledIngredient; originalIndex: number }[] }[] = [];
  const defaultSection = 'Main Ingredients';

  ingredients.forEach((ing, index) => {
    const secName = ing.section || defaultSection;
    let sec = sections.find((s) => s.sectionName === secName);
    if (!sec) {
      sec = { sectionName: secName, items: [] };
      sections.push(sec);
    }
    sec.items.push({ ingredient: ing, originalIndex: index });
  });

  return (
    <div className="space-y-6">
      {sections.map((sec) => (
        <div key={sec.sectionName} className="space-y-3">
          {sections.length > 1 && (
            <h4 className="font-serif text-base font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 pb-1 border-b border-amber-200/60 dark:border-neutral-800">
              <span className="w-2 h-2 rounded-full bg-saffron-500" />
              <span>{sec.sectionName}</span>
            </h4>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {sec.items.map(({ ingredient, originalIndex }) => {
              const isChecked = !!checkedMap[originalIndex];

              return (
                <div
                  key={originalIndex}
                  onClick={() => toggleCheck(originalIndex)}
                  className={`group flex items-start gap-3 p-3 rounded-2xl cursor-pointer border transition-all select-none ${
                    isChecked
                      ? 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800/40 text-gray-400 dark:text-gray-500'
                      : 'bg-white dark:bg-[#1c1917] border-amber-200/70 dark:border-[#2e2a24] hover:border-saffron-400 dark:hover:border-saffron-600 shadow-sm'
                  }`}
                >
                  {/* Checkbox Icon */}
                  <div className="shrink-0 mt-0.5">
                    {isChecked ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-300 dark:text-neutral-600 group-hover:text-saffron-500 transition-colors" />
                    )}
                  </div>

                  {/* Quantity & Name */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      {/* Quantity & Unit Pill */}
                      {ingredient.formattedQuantity && (
                        <span
                          className={`font-serif text-base font-black tracking-tight ${
                            isChecked
                              ? 'line-through text-gray-400'
                              : 'text-saffron-700 dark:text-saffron-400'
                          }`}
                        >
                          {ingredient.approximate && <span className="font-sans text-xs font-normal mr-0.5">approx.</span>}
                          {ingredient.formattedQuantity}
                          {ingredient.displayUnit && (
                            <span className="font-sans text-xs font-bold text-gray-600 dark:text-gray-300 ml-1">
                              {ingredient.displayUnit}
                            </span>
                          )}
                        </span>
                      )}

                      {/* Ingredient Name */}
                      <span
                        className={`text-sm font-semibold text-gray-900 dark:text-gray-100 ${
                          isChecked ? 'line-through text-gray-400' : ''
                        }`}
                      >
                        {ingredient.name}
                      </span>

                      {/* Optional Badge */}
                      {ingredient.optional && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/60 px-1.5 py-0.5 rounded">
                          optional
                        </span>
                      )}
                    </div>

                    {/* Preparation Notes */}
                    {ingredient.notes && (
                      <p
                        className={`text-xs mt-0.5 ${
                          isChecked ? 'text-gray-400 line-through' : 'text-gray-500 dark:text-gray-400'
                        }`}
                      >
                        {ingredient.notes}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
