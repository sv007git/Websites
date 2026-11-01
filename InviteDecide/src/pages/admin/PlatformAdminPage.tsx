import React, { useState } from 'react';
import { useAppStore } from '@/stores/useAppStore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  ShieldCheck,
  Building2,
  Users,
  CreditCard,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Database,
  UploadCloud,
  DownloadCloud,
  KeyRound,
  ExternalLink,
  Lock,
} from 'lucide-react';
import {
  isSupabaseConfigured,
  getStoredSupabaseUrl,
  getStoredSupabaseAnonKey,
  configureSupabaseClient,
  testSupabaseConnection,
} from '@/services/supabase';

export const PlatformAdminPage: React.FC = () => {
  const {
    activeOrgName,
    activeOrgId,
    event,
    guests,
    attendees,
    resetDemoData,
    userRole,
    pushToSupabaseBackend,
    pullFromSupabaseBackend,
  } = useAppStore();

  const [resetSuccess, setResetSuccess] = useState(false);

  // Supabase Configuration Form State
  const [supabaseUrl, setSupabaseUrl] = useState(getStoredSupabaseUrl());
  const [supabaseAnonKey, setSupabaseAnonKey] = useState(getStoredSupabaseAnonKey());
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<{
    success: boolean;
    message: string;
    error?: string;
  } | null>(null);

  // Sync state
  const [isPushing, setIsPushing] = useState(false);
  const [isPulling, setIsPulling] = useState(false);
  const [syncFeedback, setSyncFeedback] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const handleReset = () => {
    resetDemoData();
    setResetSuccess(true);
    setTimeout(() => setResetSuccess(false), 4000);
  };

  const handleSaveAndTest = async () => {
    setIsTesting(true);
    setTestResult(null);
    setSyncFeedback(null);

    try {
      configureSupabaseClient(supabaseUrl, supabaseAnonKey);
      const res = await testSupabaseConnection();
      setTestResult(res);
    } catch (err: any) {
      setTestResult({
        success: false,
        message: 'Failed to connect to Supabase endpoint.',
        error: err.message || String(err),
      });
    } finally {
      setIsTesting(false);
    }
  };

  const handlePushData = async () => {
    setIsPushing(true);
    setSyncFeedback(null);
    try {
      const res = await pushToSupabaseBackend();
      if (res.success) {
        setSyncFeedback({ type: 'success', text: res.message });
      } else {
        setSyncFeedback({
          type: 'error',
          text: `${res.message} ${res.error ? `(${res.error})` : ''}`,
        });
      }
    } catch (err: any) {
      setSyncFeedback({
        type: 'error',
        text: `Push error: ${err.message || String(err)}`,
      });
    } finally {
      setIsPushing(false);
    }
  };

  const handlePullData = async () => {
    setIsPulling(true);
    setSyncFeedback(null);
    try {
      const res = await pullFromSupabaseBackend();
      if (res.success) {
        setSyncFeedback({ type: 'success', text: res.message });
      } else {
        setSyncFeedback({
          type: 'error',
          text: `${res.message} ${res.error ? `(${res.error})` : ''}`,
        });
      }
    } catch (err: any) {
      setSyncFeedback({
        type: 'error',
        text: `Pull error: ${err.message || String(err)}`,
      });
    } finally {
      setIsPulling(false);
    }
  };

  const plans = [
    {
      name: 'Free Tier',
      slug: 'free',
      price: '₹ 0',
      maxEvents: 2,
      maxGuests: 100,
      features: ['Basic Templates', 'Direct WhatsApp Fallback', 'Standard Seating'],
      active: false,
    },
    {
      name: 'Starter Celebration',
      slug: 'starter',
      price: '₹ 1,499 / mo',
      maxEvents: 5,
      maxGuests: 500,
      features: ['All Templates', 'Automated WhatsApp Cloud API', 'Catering Calculator', 'QR Passes'],
      active: false,
    },
    {
      name: 'Professional Wedding',
      slug: 'pro',
      price: '₹ 3,999 / mo',
      maxEvents: 20,
      maxGuests: 2000,
      features: ['Multi-Day Functions', 'Automatic Family Seating', 'Live Gate Camera Check-in', 'Full Analytics'],
      active: true,
    },
    {
      name: 'Enterprise Event Agency',
      slug: 'enterprise',
      price: '₹ 9,999 / mo',
      maxEvents: 100,
      maxGuests: 10000,
      features: ['Unlimited Staff', 'Dedicated Account Manager', 'Custom Domain', 'Custom API Webhooks'],
      active: false,
    },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight">SaaS Platform Administration</h1>
            <Badge variant="gold">Multi-Tenant Console</Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-0.5">
            Manage Supabase backend connection, data synchronization, organizations, and subscription plans.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            className="gap-1.5 text-xs text-rose-600 hover:text-rose-700"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Demo Dataset
          </Button>
        </div>
      </div>

      {resetSuccess && (
        <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/30 text-emerald-800 dark:text-emerald-200 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Demo dataset reset successfully to 500 family invitations and 1,000+ attendees.</span>
        </div>
      )}

      {/* Backend & Supabase Configuration Card */}
      <Card className="border-amber-500/30 shadow-md">
        <CardHeader className="pb-3 border-b border-border/50 bg-muted/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Database className="w-4 h-4 text-amber-500" /> Supabase Cloud Database & Persistence
              </CardTitle>
              <CardDescription className="text-xs">
                Configure PostgreSQL connection, test live schema, and push/pull event data
              </CardDescription>
            </div>
            <div>
              {isSupabaseConfigured ? (
                <Badge variant="success" className="text-[11px] gap-1 py-1">
                  🟢 Supabase Live Connected
                </Badge>
              ) : (
                <Badge variant="gold" className="text-[11px] gap-1 py-1">
                  ⚡ Interactive Local & Demo Mode
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4 pt-4 text-xs">
          {/* Connection Test or Sync Result Banner */}
          {testResult && (
            <div
              className={`p-3 rounded-xl border text-xs flex items-start gap-2 ${
                testResult.success
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
              }`}
            >
              {testResult.success ? (
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
              )}
              <div className="space-y-1">
                <p className="font-semibold">{testResult.message}</p>
                {testResult.error && (
                  <p className="text-[11px] font-mono text-muted-foreground">{testResult.error}</p>
                )}
              </div>
            </div>
          )}

          {syncFeedback && (
            <div
              className={`p-3 rounded-xl border text-xs flex items-start gap-2 ${
                syncFeedback.type === 'success'
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
              }`}
            >
              {syncFeedback.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
              )}
              <p className="font-semibold">{syncFeedback.text}</p>
            </div>
          )}

          {/* Form Fields for Supabase URL and Anon Key */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-medium text-foreground flex items-center gap-1.5 mb-1">
                <Database className="w-3.5 h-3.5 text-primary" /> Supabase Project URL
              </label>
              <Input
                type="text"
                value={supabaseUrl}
                onChange={(e) => setSupabaseUrl(e.target.value)}
                placeholder="https://xyz.supabase.co"
                className="font-mono text-xs"
              />
              <p className="text-[10px] text-muted-foreground mt-1">
                Project endpoint from your Supabase Project Settings → API
              </p>
            </div>

            <div>
              <label className="font-medium text-foreground flex items-center gap-1.5 mb-1">
                <KeyRound className="w-3.5 h-3.5 text-primary" /> Supabase Anon / Public Key
              </label>
              <Input
                type="password"
                value={supabaseAnonKey}
                onChange={(e) => setSupabaseAnonKey(e.target.value)}
                placeholder="eyJhbGciOi..."
                className="font-mono text-xs"
              />
              <p className="text-[10px] text-muted-foreground mt-1">
                Public anon key with RLS enforcement for frontend access
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t">
            <Button
              type="button"
              variant="default"
              size="sm"
              onClick={handleSaveAndTest}
              disabled={isTesting}
              className="text-xs gap-1.5"
            >
              <KeyRound className="w-3.5 h-3.5" />
              {isTesting ? 'Testing Connection...' : 'Save & Test Connection'}
            </Button>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handlePushData}
              disabled={isPushing}
              className="text-xs gap-1.5 text-amber-600 dark:text-amber-400 hover:border-amber-500"
            >
              <UploadCloud className="w-3.5 h-3.5" />
              {isPushing ? 'Pushing 500+ records...' : 'Push Local Dataset to Supabase'}
            </Button>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handlePullData}
              disabled={isPulling}
              className="text-xs gap-1.5"
            >
              <DownloadCloud className="w-3.5 h-3.5" />
              {isPulling ? 'Pulling...' : 'Pull Latest from Supabase'}
            </Button>
          </div>

          <div className="p-3 rounded-lg bg-muted/40 border text-[11px] text-muted-foreground space-y-1">
            <p className="font-semibold text-foreground">💡 Complete Backend Integration Ready:</p>
            <p>
              InviteDecide automatically saves all guests, RSVPs, menu items, and check-in logs to
              localStorage on every change, and when Supabase credentials are configured, syncs them
              asynchronously directly to your Supabase PostgreSQL database tables.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Subscription Plans */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold">Configurable SaaS Subscription Plans</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((p) => (
            <Card
              key={p.slug}
              className={`relative overflow-hidden transition-all ${
                p.active ? 'border-primary shadow-lg ring-2 ring-primary/30' : 'hover:border-zinc-400'
              }`}
            >
              {p.active && (
                <div className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider py-1 text-center">
                  Current Active Plan
                </div>
              )}
              <CardContent className="p-5 space-y-4">
                <div>
                  <h3 className="font-bold text-base">{p.name}</h3>
                  <div className="text-xl font-black font-display text-primary mt-1">{p.price}</div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Up to {p.maxGuests.toLocaleString()} guests per event
                  </p>
                </div>

                <div className="space-y-1.5 border-t pt-3 text-xs">
                  {p.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-muted-foreground">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant={p.active ? 'default' : 'outline'}
                  size="sm"
                  className="w-full text-xs"
                >
                  {p.active ? 'Plan Active' : 'Switch Plan'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
