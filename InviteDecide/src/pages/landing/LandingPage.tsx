import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Sparkles,
  MessageCircle,
  UtensilsCrossed,
  Armchair,
  QrCode,
  Users,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Heart,
  Crown,
} from 'lucide-react';

import { useAppStore } from '@/stores/useAppStore';

export const LandingPage: React.FC = () => {
  const { userEmail, userName } = useAppStore();
  const isLoggedIn = Boolean(userEmail && userEmail !== 'organizer@invitedecide.com');
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Top Navigation */}
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-600 via-rose-500 to-amber-500 text-white shadow-md">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-xl font-black font-display tracking-tight">
              Invite<span className="text-primary">Decide</span>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {isLoggedIn && (
              <Link to="/dashboard">
                <Button variant="gold" size="sm" className="gap-1.5 text-xs font-bold shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Resume Workspace ({userName || userEmail.split('@')[0]})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            )}
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-xs">
                Log In
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" size="sm" className="text-xs border-amber-500/40 text-amber-600 dark:text-amber-400">
                Sign Up
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="gold" size="sm" className="gap-1.5 text-xs shadow-md">
                Live Demo <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-rose-500/5 via-amber-500/5 to-transparent">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <Badge variant="gold" className="px-3 py-1 text-xs">
            ✨ Intelligent Event Management SaaS Platform
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight font-display text-zinc-900 dark:text-white leading-tight">
            An invitation should become an <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-amber-500 to-rose-600">
              intelligent event participation system
            </span>
            , not just a digital card.
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
            InviteDecide equips organizers of Indian weddings, grand galas, and corporate events with visual invitation design, account-free family RSVPs, arrival time slot reservations, catering portion calculations, 2D venue seating, and gate QR passes dispatched via WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link to="/dashboard" className="w-full sm:w-auto">
              <Button variant="gold" size="lg" className="w-full gap-2 text-base font-bold shadow-xl">
                Explore Live Wedding Demo (500 Families) <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <Link to="/invite/demo" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full gap-2 text-base">
                View Guest RSVP Experience
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground pt-4">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> WhatsApp Cloud Only
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> No App Needed for Guests
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Supabase + GitHub Pages
            </span>
          </div>
        </div>
      </section>

      {/* Feature Pillars Grid */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold font-display">Engineered for Grand Celebrations</h2>
          <p className="text-sm text-muted-foreground">
            Six interconnected modules resolving every logistical friction point in large-scale event hosting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:border-primary/50 transition-all">
            <CardContent className="p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-950 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Visual Invitation Designer</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Multi-template canvas editor with royal ethnic borders, custom Google fonts, auspicious Vedic motifs, and dynamic recipient personalization ({'{{guest_name}}'}).
              </p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all">
            <CardContent className="p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">WhatsApp-Only Communication</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Automated Meta WhatsApp Business Cloud API integration and instant 1-click manual click-to-chat fallback. No spammy SMS or lost emails.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all">
            <CardContent className="p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950 flex items-center justify-center">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Catering Quantity Engine</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Attendee-level food selections (Veg, Non-Veg, Jain, Vegan), automated portion calculations, and configurable organizer buffers with PDF kitchen orders.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all">
            <CardContent className="p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950 flex items-center justify-center">
                <Armchair className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Venue Seating Studio</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                2D venue floor plan with round and rectangular tables. Automatic family-first seating algorithm ensures households sit together without double-booking.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all">
            <CardContent className="p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950 flex items-center justify-center">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Gate QR Camera Scanner</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Mobile browser camera scanning for gate staff with cryptographic SHA-256 tokens, partial family check-in, and atomic duplicate entry prevention.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all">
            <CardContent className="p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Multi-Tenant SaaS Security</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Supabase Row Level Security (RLS) ensures organizations cannot leak data, while vendors (caterers, decorators) receive scoped access without private guest numbers.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t py-8 px-4 sm:px-6 text-center text-xs text-muted-foreground">
        <p className="font-medium text-foreground">
          InviteDecide © 2026 — Production-Ready Online Invitation, RSVP, Catering & Seating SaaS
        </p>
        <p className="mt-1">
          Designed for Indian Weddings, Engagements, Anniversaries, Corporate Galas, and Family Functions.
        </p>
      </footer>
    </div>
  );
};
