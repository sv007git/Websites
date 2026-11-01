// ================================================================================
// VIEW LAYER: AuthModalView
// Pure presentational component for user sign-in, registration, and guest access
// ================================================================================

import React, { useState } from 'react';
import { useAuth } from '../../services/auth/AuthContext';
import { X, Lock, Mail, User, ArrowRight, Sparkles, Loader2, ShieldCheck } from 'lucide-react';
import { audioPresenter } from '../../presenters/AudioPresenter';

export interface AuthModalViewProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'signin' | 'signup';
}

export const AuthModalView: React.FC<AuthModalViewProps> = ({
  isOpen,
  onClose,
  defaultMode = 'signin',
}) => {
  const { signIn, signUp, continueAsGuest, resetPassword } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup' | 'forgot'>(defaultMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setLoading(true);

    try {
      if (mode === 'signin') {
        const { error } = await signIn(email, password);
        if (error) {
          setErrorMsg(error.message);
          audioPresenter.onError();
        } else {
          audioPresenter.onSuccess();
          onClose();
        }
      } else if (mode === 'signup') {
        const { error } = await signUp(email, password, fullName);
        if (error) {
          setErrorMsg(error.message);
          audioPresenter.onError();
        } else {
          audioPresenter.onSuccess();
          setSuccessMsg('Account created successfully! Check your email or sign in.');
          setTimeout(() => onClose(), 1500);
        }
      } else if (mode === 'forgot') {
        const { error } = await resetPassword(email);
        if (error) {
          setErrorMsg(error.message);
          audioPresenter.onError();
        } else {
          audioPresenter.onSuccess();
          setSuccessMsg('Password reset instructions sent to your email.');
        }
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected error occurred');
      audioPresenter.onError();
    } finally {
      setLoading(false);
    }
  };

  const handleGuest = () => {
    audioPresenter.playSound('tap');
    continueAsGuest();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-md bg-white dark:bg-midnight-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-midnight-800 overflow-hidden">
        {/* Header with decorative banner */}
        <div className="relative p-6 bg-gradient-to-tr from-rose-500 via-indigo-600 to-cyan-500 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-black tracking-tight">
            {mode === 'signin' && 'Welcome Back'}
            {mode === 'signup' && 'Create Your Account'}
            {mode === 'forgot' && 'Reset Password'}
          </h2>
          <p className="text-xs text-white/80 mt-1">
            One single login gives you full access across all 10 unified super platforms.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {errorMsg && (
            <div className="mb-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs">
              {errorMsg}
            </div>
          )}

          {successMsg && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs">
              {successMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name
                </label>
                <div className="relative flex items-center">
                  <User className="w-4 h-4 text-slate-400 absolute left-3" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ada Lovelace"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-200 dark:border-midnight-800 text-slate-900 dark:text-white outline-none focus:border-rose-500"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address
              </label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-200 dark:border-midnight-800 text-slate-900 dark:text-white outline-none focus:border-rose-500"
                />
              </div>
            </div>

            {mode !== 'forgot' && (
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Password
                  </label>
                  {mode === 'signin' && (
                    <button
                      type="button"
                      onClick={() => setMode('forgot')}
                      className="text-[11px] text-rose-500 hover:underline"
                    >
                      Forgot?
                    </button>
                  )}
                </div>
                <div className="relative flex items-center">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3" />
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl bg-slate-50 dark:bg-midnight-950 border border-slate-200 dark:border-midnight-800 text-slate-900 dark:text-white outline-none focus:border-rose-500"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-rose-500 via-indigo-600 to-cyan-500 text-white shadow-md hover:opacity-95 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              <span>
                {mode === 'signin' && 'Sign In to Super Platform'}
                {mode === 'signup' && 'Create Free Account'}
                {mode === 'forgot' && 'Send Reset Link'}
              </span>
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          {/* Guest Browsing CTA */}
          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-midnight-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-midnight-900 px-2 text-slate-400">
                Or explore without account
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleGuest}
            className="w-full py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-midnight-800 dark:hover:bg-midnight-700 text-slate-700 dark:text-slate-200 transition-colors flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Continue as Guest Visitor</span>
          </button>

          {/* Toggle mode links */}
          <div className="mt-5 text-center text-xs text-slate-500">
            {mode === 'signin' ? (
              <p>
                Don't have an account?{' '}
                <button
                  onClick={() => setMode('signup')}
                  className="font-bold text-rose-500 hover:underline"
                >
                  Sign Up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button
                  onClick={() => setMode('signin')}
                  className="font-bold text-rose-500 hover:underline"
                >
                  Sign In
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
