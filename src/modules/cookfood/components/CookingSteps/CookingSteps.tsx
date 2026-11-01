import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Clock, Lightbulb, BellRing } from 'lucide-react';
import { CookingStep } from '../../types/recipe';

interface CookingStepsProps {
  steps: CookingStep[];
}

export const CookingSteps: React.FC<CookingStepsProps> = ({ steps }) => {
  return (
    <div className="space-y-6">
      {steps.map((step) => (
        <StepCard key={step.stepNumber} step={step} />
      ))}
    </div>
  );
};

const StepCard: React.FC<{ step: CookingStep }> = ({ step }) => {
  const [timeLeft, setTimeLeft] = useState<number>(step.timerSeconds || 0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleResetTimer = () => {
    setIsRunning(false);
    setIsFinished(false);
    setTimeLeft(step.timerSeconds || 0);
  };

  return (
    <div className="relative pl-6 sm:pl-8 pb-8 last:pb-2 border-l-2 border-amber-300 dark:border-neutral-700">
      {/* Number Node */}
      <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-saffron-500 text-white font-serif font-black text-sm flex items-center justify-center shadow-md ring-4 ring-white dark:ring-[#121110]">
        {step.stepNumber}
      </div>

      <div className="bg-white dark:bg-[#1a1715] rounded-2xl p-5 sm:p-6 border border-[#ebdcca] dark:border-[#2e2a24] shadow-sm space-y-4">
        {step.title && (
          <h4 className="font-serif text-lg font-bold text-gray-900 dark:text-white">
            {step.title}
          </h4>
        )}

        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
          {step.instruction}
        </p>

        {/* Step Timer if available */}
        {step.timerSeconds && step.timerSeconds > 0 && (
          <div className="pt-2">
            <div
              className={`inline-flex items-center gap-3 px-4 py-2 rounded-2xl border transition-all ${
                isFinished
                  ? 'bg-emerald-100 text-emerald-900 border-emerald-400 dark:bg-emerald-950/60 dark:text-emerald-200 animate-pulse'
                  : isRunning
                  ? 'bg-amber-100 text-amber-900 border-amber-400 dark:bg-amber-950/60 dark:text-amber-200'
                  : 'bg-amber-50 dark:bg-neutral-800 border-amber-200 dark:border-neutral-700 text-gray-800 dark:text-gray-200'
              }`}
            >
              <div className="flex items-center gap-1.5 font-mono text-sm sm:text-base font-bold">
                {isFinished ? (
                  <BellRing className="w-4 h-4 text-emerald-600 animate-bounce" />
                ) : (
                  <Clock className="w-4 h-4 text-saffron-600" />
                )}
                <span>{isFinished ? 'Timer Complete!' : formatTimer(timeLeft)}</span>
              </div>

              {!isFinished ? (
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setIsRunning(!isRunning)}
                    className="p-1.5 rounded-lg bg-white dark:bg-neutral-700 text-saffron-600 hover:bg-saffron-50 dark:hover:bg-neutral-600 shadow-sm transition"
                    title={isRunning ? 'Pause' : 'Start'}
                  >
                    {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={handleResetTimer}
                    className="p-1.5 rounded-lg bg-white dark:bg-neutral-700 text-gray-500 hover:bg-gray-100 dark:hover:bg-neutral-600 shadow-sm transition"
                    title="Reset"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleResetTimer}
                  className="px-2 py-1 rounded-lg text-xs font-bold bg-emerald-600 text-white"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        )}

        {/* Chef Tip inside step */}
        {step.tip && (
          <div className="p-3.5 rounded-xl bg-saffron-50 dark:bg-saffron-950/30 border border-saffron-200 dark:border-saffron-900/40 text-xs sm:text-sm text-saffron-900 dark:text-saffron-200 flex items-start gap-2.5">
            <Lightbulb className="w-4 h-4 text-saffron-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Chef's Secret:</strong> {step.tip}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
