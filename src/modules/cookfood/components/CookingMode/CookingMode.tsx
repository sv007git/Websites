import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Clock,
  Play,
  Pause,
  RotateCcw,
  List,
  Sparkles,
  Trophy,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Recipe } from '../../types/recipe';
import { ScaledIngredient } from '../../utils/quantityScaler';

interface CookingModeProps {
  recipe: Recipe;
  servings: number;
  scaledIngredients: ScaledIngredient[];
  onClose: () => void;
}

export const CookingMode: React.FC<CookingModeProps> = ({
  recipe,
  servings,
  scaledIngredients,
  onClose,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showIngredientsDrawer, setShowIngredientsDrawer] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const steps = recipe.instructions;
  const currentStep = steps[currentStepIndex];
  const progressPercent = Math.round(((currentStepIndex + 1) / steps.length) * 100);

  // Sync timer when step changes
  useEffect(() => {
    if (currentStep?.timerSeconds) {
      setTimeLeft(currentStep.timerSeconds);
      setTimerRunning(false);
    } else {
      setTimeLeft(0);
      setTimerRunning(false);
    }
  }, [currentStepIndex, currentStep]);

  // Timer interval
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (timerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning, timeLeft]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStepIndex]);

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  };

  const handlePrev = () => {
    if (isCompleted) {
      setIsCompleted(false);
    } else if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#121110] text-[#f5f2ed] flex flex-col justify-between overflow-hidden">
      {/* Top Bar */}
      <div className="bg-[#1c1917] border-b border-neutral-800 px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-saffron-500 animate-pulse" />
          <div>
            <h2 className="font-serif text-base sm:text-lg font-bold text-white truncate max-w-[200px] sm:max-w-md">
              {recipe.title}
            </h2>
            <p className="text-xs text-saffron-400">
              Scaled for <strong>{servings} people</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Toggle Scaled Ingredients Drawer */}
          <button
            onClick={() => setShowIngredientsDrawer(!showIngredientsDrawer)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-800 text-saffron-300 hover:bg-neutral-700 text-xs font-bold border border-neutral-700 transition"
          >
            <List className="w-4 h-4" />
            <span className="hidden sm:inline">Scaled Ingredients</span>
          </button>

          {/* Close Cooking Mode */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white transition"
            title="Exit Cooking Mode (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-neutral-800 h-1.5">
        <div
          className="bg-gradient-to-r from-saffron-500 to-orange-500 h-1.5 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 max-w-4xl mx-auto w-full relative">
        {/* Ingredients Drawer Side Panel */}
        {showIngredientsDrawer && (
          <div className="absolute inset-y-4 right-4 z-20 w-80 max-w-[90vw] bg-[#1c1917] border border-neutral-700 rounded-3xl p-5 shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-3">
              <h4 className="font-serif text-base font-bold text-saffron-400">
                Ingredients for {servings} people
              </h4>
              <button
                onClick={() => setShowIngredientsDrawer(false)}
                className="text-neutral-400 hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <ul className="space-y-2 text-xs">
              {scaledIngredients.map((item, idx) => (
                <li key={idx} className="p-2 rounded-xl bg-neutral-900 border border-neutral-800">
                  <div className="font-bold text-saffron-300">
                    {item.formattedQuantity} {item.displayUnit}
                  </div>
                  <div className="text-neutral-200">{item.name}</div>
                  {item.notes && <div className="text-neutral-400 text-[10px]">{item.notes}</div>}
                </li>
              ))}
            </ul>
          </div>
        )}

        {!isCompleted ? (
          <div className="text-center space-y-6 w-full animate-in fade-in zoom-in-95 duration-200">
            {/* Step Number Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron-950/70 border border-saffron-600/40 text-saffron-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <span>Step {currentStepIndex + 1} of {steps.length}</span>
            </div>

            {/* Step Title */}
            {currentStep?.title && (
              <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-white">
                {currentStep.title}
              </h3>
            )}

            {/* Giant Readable Instruction */}
            <div className="bg-[#1c1917] border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-left sm:text-center max-w-3xl mx-auto">
              <p className="font-sans text-lg sm:text-2xl lg:text-3xl font-medium leading-relaxed sm:leading-relaxed text-neutral-100">
                {currentStep?.instruction}
              </p>

              {/* Chef Tip if present */}
              {currentStep?.tip && (
                <div className="mt-6 p-4 rounded-2xl bg-saffron-950/40 border border-saffron-800/50 text-left text-sm text-saffron-300">
                  <span className="font-bold">Chef's Secret: </span>
                  {currentStep.tip}
                </div>
              )}
            </div>

            {/* Large Step Timer if applicable */}
            {currentStep?.timerSeconds && currentStep.timerSeconds > 0 && (
              <div className="flex items-center justify-center gap-4 pt-2">
                <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#1c1917] border-2 border-saffron-600/60 shadow-lg">
                  <Clock className="w-6 h-6 text-saffron-400" />
                  <span className="font-mono text-2xl sm:text-3xl font-black text-white">
                    {formatTimer(timeLeft)}
                  </span>
                  <button
                    onClick={() => setTimerRunning(!timerRunning)}
                    className="p-2 rounded-xl bg-saffron-600 text-white hover:bg-saffron-500 transition shadow"
                  >
                    {timerRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={() => {
                      setTimerRunning(false);
                      setTimeLeft(currentStep.timerSeconds || 0);
                    }}
                    className="p-2 rounded-xl bg-neutral-800 text-neutral-300 hover:bg-neutral-700 transition"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Finished Celebration Screen */
          <div className="text-center space-y-6 py-8 animate-in zoom-in-90 duration-300 max-w-md mx-auto">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 mx-auto flex items-center justify-center text-white shadow-xl shadow-amber-500/30 animate-bounce">
              <Trophy className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
              Delicious Success!
            </h3>
            <p className="text-neutral-300 text-base leading-relaxed">
              Your <strong>{recipe.title}</strong> is cooked to perfection for {servings} {servings === 1 ? 'person' : 'people'}. Time to plate up and enjoy hot!
            </p>
            <div className="pt-4 flex items-center justify-center gap-3">
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-2xl bg-saffron-600 hover:bg-saffron-500 text-white font-bold text-sm shadow-lg transition"
              >
                Back to Recipe
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation Buttons */}
      <div className="bg-[#1c1917] border-t border-neutral-800 px-4 sm:px-8 py-4 flex items-center justify-between">
        <button
          onClick={handlePrev}
          disabled={currentStepIndex === 0 && !isCompleted}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 disabled:opacity-30 disabled:cursor-not-allowed font-bold text-sm transition"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>

        <div className="text-xs text-neutral-400 font-medium hidden sm:block">
          Use Left/Right arrow keys or spacebar to navigate
        </div>

        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-saffron-600 to-orange-600 hover:from-saffron-500 hover:to-orange-500 text-white font-bold text-sm shadow-md transition active:scale-95"
        >
          <span>{currentStepIndex === steps.length - 1 && !isCompleted ? 'Finish Cooking!' : 'Next Step'}</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
