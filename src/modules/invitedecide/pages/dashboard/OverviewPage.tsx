import React, { useState } from 'react';
import { useAppStore } from '@/modules/invitedecide/stores/useAppStore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/modules/invitedecide/components/ui/card';
import { Button } from '@/modules/invitedecide/components/ui/button';
import { Badge } from '@/modules/invitedecide/components/ui/badge';
import { Input } from '@/modules/invitedecide/components/ui/input';
import { Link } from 'react-router-dom';
import { UserRole } from '@/modules/invitedecide/types';
import {
  Users,
  CheckCircle2,
  Clock,
  UtensilsCrossed,
  Armchair,
  QrCode,
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  MessageCircle,
  ShieldCheck,
  Crown,
  ChefHat,
  Search,
  Plus,
  RotateCcw,
  ExternalLink,
  ChevronRight,
  AlertCircle,
  Database,
  CalendarDays,
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

export const OverviewPage: React.FC = () => {
  const {
    event,
    guests,
    rsvps,
    attendees,
    timeSlots,
    venueLayout,
    qrPasses,
    checkinLogs,
    whatsappQueue,
    userRole,
    setUserRole,
    isDemoMode,
    loadDemoDataIntoWorkspace,
    clearWorkspaceData,
    setSetupWizardOpen,
    validateAndCheckIn,
    runAutoSeatingAllocation,
    getCateringCalculations,
    userName,
    activeOrgName,
  } = useAppStore();

  // Quick manual check-in state for gate staff view
  const [searchToken, setSearchToken] = useState('');
  const [checkinMessage, setCheckinMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Auto-seating state for seating manager view
  const [seatingFeedback, setSeatingFeedback] = useState<string | null>(null);

  // Metrics computation from real database records
  const totalInvitations = guests.filter((g) => g.is_primary_contact).length;
  const confirmedRSVPs = rsvps.filter((r) => r.status === 'confirmed');
  const totalAttendees = attendees.length;
  const adultAttendees = attendees.filter((a) => !a.is_child).length;
  const childAttendees = attendees.filter((a) => a.is_child).length;
  const checkedInAttendees = attendees.filter((a) => a.checked_in).length;

  // Seating computation
  let totalSeats = 0;
  let allocatedSeats = 0;
  venueLayout.tables.forEach((t) => {
    totalSeats += t.seats.length;
    allocatedSeats += t.seats.filter((s) => s.allocated_attendee_id || s.attendee_id).length;
  });

  // Food preference proportions
  const vegCount = attendees.filter((a) => a.dietary_preference === 'veg').length;
  const nonVegCount = attendees.filter((a) => a.dietary_preference === 'non_veg').length;
  const jainCount = attendees.filter((a) => a.dietary_preference === 'jain').length;

  const dietaryChartData = [
    { name: 'Pure Vegetarian', value: vegCount, color: '#10b981' },
    { name: 'Non-Vegetarian', value: nonVegCount, color: '#f43f5e' },
    { name: 'Jain (No Root Veg)', value: jainCount, color: '#eab308' },
  ];

  // Slot occupancy chart data
  const slotChartData = timeSlots.map((slot) => ({
    time: `${slot.start_time} - ${slot.end_time}`,
    Booked: slot.booked_count,
    Capacity: slot.capacity,
  }));

  // Catering calculations
  const cateringCalculations = getCateringCalculations();

  // Handle quick checkin from gate staff view
  const handleQuickCheckin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchToken.trim()) return;

    const res = validateAndCheckIn(searchToken.trim(), undefined, userName || 'Gate Operator');
    if (res.success) {
      setCheckinMessage({
        type: 'success',
        text: `Checked in: ${res.attendeeName || 'Guest'} (${res.pass?.display_code}) successfully!`,
      });
      setSearchToken('');
    } else {
      setCheckinMessage({
        type: 'error',
        text: res.error || 'Failed to check in guest.',
      });
    }
    setTimeout(() => setCheckinMessage(null), 4000);
  };

  // Handle run auto seating
  const handleRunSeating = () => {
    const res = runAutoSeatingAllocation();
    setSeatingFeedback(res.message);
    setTimeout(() => setSeatingFeedback(null), 4000);
  };

  // Role metadata configurations
  const roleMetadata: Record<
    UserRole,
    { title: string; badge: string; desc: string; icon: any; color: string }
  > = {
    owner: {
      title: 'Event Host / Owner Dashboard',
      badge: '👑 Event Owner',
      desc: 'Full administrative access across budgets, multi-day ceremonies, invitations, catering, and gate admissions.',
      icon: Crown,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    },
    event_manager: {
      title: 'Professional Event Planner Dashboard',
      badge: '📋 Event Manager',
      desc: 'Operational management across schedule, vendors, invitation dispatches, and gate logistics.',
      icon: Sparkles,
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
    },
    checkin_operator: {
      title: 'Gate Check-in & Security Staff Dashboard',
      badge: '🎟️ Gate Check-in Staff',
      desc: 'Fast QR pass camera scanning, manual guest lookup, and real-time venue attendance tracking.',
      icon: QrCode,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    },
    vendor: {
      title: 'Caterer & Food Service Partner Dashboard',
      badge: '🍽️ Caterer Vendor',
      desc: 'Live portion requirements, buffer planning, dietary preference counts, and kitchen service timings.',
      icon: UtensilsCrossed,
      color: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
    },
    catering_manager: {
      title: 'Catering Lead Dashboard',
      badge: '👨‍🍳 Catering Manager',
      desc: 'Menu item curation, dish-by-dish portion calculations, and dietary distribution controls.',
      icon: ChefHat,
      color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
    },
    seating_manager: {
      title: 'Venue Seating Studio Dashboard',
      badge: '🪑 Seating Manager',
      desc: 'Table layout design, family grouping assignments, and 1-click automatic seating allocation.',
      icon: Armchair,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
    },
    guest_manager: {
      title: 'Guest List & RSVP Manager Dashboard',
      badge: '👥 Guest Manager',
      desc: 'Guest list curation, RSVP tracking, WhatsApp invitations, and family grouping management.',
      icon: Users,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    },
    invitation_manager: {
      title: 'Invitation Design & Dispatch Dashboard',
      badge: '💌 Invitation Lead',
      desc: 'Visual invitation designer, personalized URL tokens, and WhatsApp message queue status.',
      icon: Sparkles,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    },
    admin: {
      title: 'SaaS Platform Administrator Dashboard',
      badge: '🛡️ Platform Admin',
      desc: 'Multi-tenant organization management, Supabase database health, and subscription tiers.',
      icon: ShieldCheck,
      color: 'text-red-400 bg-red-500/10 border-red-500/30',
    },
    readonly: {
      title: 'Observer / Read-Only Dashboard',
      badge: '👁️ Viewer',
      desc: 'Read-only visibility into live guest counts, catering metrics, and seating occupancy.',
      icon: Clock,
      color: 'text-zinc-400 bg-zinc-500/10 border-zinc-500/30',
    },
  };

  const currentRoleInfo = roleMetadata[userRole] || roleMetadata.owner;
  const RoleIcon = currentRoleInfo.icon;

  return (
    <div className="space-y-6">
      {/* 1. DYNAMIC ROLE STATUS & QUICK-SWITCH BANNER */}
      <div className={`p-4 rounded-2xl border ${currentRoleInfo.color} flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-sm`}>
        <div className="flex items-start sm:items-center gap-3">
          <div className="p-2.5 rounded-xl bg-background/80 shadow-sm border border-border/50 shrink-0">
            <RoleIcon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-foreground">{currentRoleInfo.title}</h2>
              <Badge variant="outline" className="text-[10px] font-semibold">
                {currentRoleInfo.badge}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">{currentRoleInfo.desc}</p>
          </div>
        </div>

        {/* Quick Role Switch Pills */}
        <div className="flex items-center flex-wrap gap-1.5 pt-2 md:pt-0 border-t md:border-t-0 border-border/40 text-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mr-1">
            Switch Role:
          </span>
          <button
            onClick={() => setUserRole('owner')}
            className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-all ${
              userRole === 'owner' ? 'bg-primary text-white shadow' : 'bg-muted/60 text-muted-foreground hover:bg-muted'
            }`}
          >
            👑 Owner
          </button>
          <button
            onClick={() => setUserRole('checkin_operator')}
            className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-all ${
              userRole === 'checkin_operator' ? 'bg-emerald-600 text-white shadow' : 'bg-muted/60 text-muted-foreground hover:bg-muted'
            }`}
          >
            🎟️ Gate Staff
          </button>
          <button
            onClick={() => setUserRole('vendor')}
            className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-all ${
              userRole === 'vendor' ? 'bg-orange-600 text-white shadow' : 'bg-muted/60 text-muted-foreground hover:bg-muted'
            }`}
          >
            🍽️ Caterer
          </button>
          <button
            onClick={() => setUserRole('seating_manager')}
            className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-all ${
              userRole === 'seating_manager' ? 'bg-indigo-600 text-white shadow' : 'bg-muted/60 text-muted-foreground hover:bg-muted'
            }`}
          >
            🪑 Seating
          </button>
          <button
            onClick={() => setUserRole('guest_manager')}
            className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-all ${
              userRole === 'guest_manager' ? 'bg-blue-600 text-white shadow' : 'bg-muted/60 text-muted-foreground hover:bg-muted'
            }`}
          >
            👥 Guests
          </button>
          <button
            onClick={() => setUserRole('admin')}
            className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-all ${
              userRole === 'admin' ? 'bg-red-600 text-white shadow' : 'bg-muted/60 text-muted-foreground hover:bg-muted'
            }`}
          >
            🛡️ Admin
          </button>
        </div>
      </div>

      {/* 2. EVENT SETUP WIZARD & WORKSPACE STATUS BANNER */}
      {isDemoMode ? (
        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300">
            <Sparkles className="w-4 h-4 shrink-0 text-amber-500" />
            <span>
              <strong>Sample Demo Dataset Active:</strong> Currently exploring with 500 pre-loaded wedding guests. Ready for your actual event?
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button
              size="sm"
              variant="gold"
              onClick={() => setSetupWizardOpen(true)}
              className="text-xs font-bold gap-1.5 h-8 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" /> Setup Wizard (Populate Your Event)
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={clearWorkspaceData}
              className="text-[11px] h-8 border-amber-500/40 text-amber-800 dark:text-amber-200 hover:bg-amber-500/20"
            >
              Clear to 0 Guests
            </Button>
          </div>
        </div>
      ) : (
        <div className="p-4 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-rose-500/5 to-transparent flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="gold" className="text-[10px] uppercase font-bold py-0.5">
                ⚡ All-in-One Generator
              </Badge>
              <span className="text-xs font-bold text-foreground">
                Active Event: {event.name}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Need to change names, venues, dates, catering menu, or re-populate passes? Run the Setup Wizard anytime to regenerate everything automatically.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              size="sm"
              variant="gold"
              onClick={() => setSetupWizardOpen(true)}
              className="gap-1.5 text-xs font-bold shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5" /> Launch Setup Wizard
            </Button>
            {guests.length === 0 && (
              <Button
                size="sm"
                variant="outline"
                onClick={loadDemoDataIntoWorkspace}
                className="gap-1.5 text-xs font-semibold"
              >
                Load Sample Data
              </Button>
            )}
          </div>
        </div>
      )}

      {/* 3. ROLE-SPECIFIC SPOTLIGHT MODULES */}

      {/* ROLE VIEW: GATE CHECK-IN OPERATOR */}
      {userRole === 'checkin_operator' && (
        <div className="space-y-4">
          <Card className="border-emerald-500/40 bg-gradient-to-r from-emerald-950/20 via-zinc-900 to-zinc-950">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <CardTitle className="text-xl font-bold flex items-center gap-2 text-emerald-400">
                    <QrCode className="w-5 h-5" /> Venue Gate Check-in Command Center
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Live entrance ticket verification, fast camera scanner, and guest admissions
                  </CardDescription>
                </div>
                <Link to="/checkin">
                  <Button variant="default" size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs gap-1.5 shadow-lg">
                    <QrCode className="w-4 h-4" /> Open Fullscreen Mobile Camera Scanner
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-1">
              {/* Checkin Progress Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-4 rounded-xl border bg-zinc-900/80">
                  <span className="text-muted-foreground uppercase font-bold text-[10px]">Checked In Guests</span>
                  <div className="text-2xl font-black text-emerald-400 mt-1">{checkedInAttendees}</div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    {Math.round((checkedInAttendees / (totalAttendees || 1)) * 100)}% of total attendees admitted
                  </p>
                </div>

                <div className="p-4 rounded-xl border bg-zinc-900/80">
                  <span className="text-muted-foreground uppercase font-bold text-[10px]">Remaining to Arrive</span>
                  <div className="text-2xl font-black text-amber-400 mt-1">{Math.max(0, totalAttendees - checkedInAttendees)}</div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Expected guests yet to check in</p>
                </div>

                <div className="p-4 rounded-xl border bg-zinc-900/80">
                  <span className="text-muted-foreground uppercase font-bold text-[10px]">Total Scans Recorded</span>
                  <div className="text-2xl font-black text-white mt-1">{checkinLogs.length}</div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Gate entries logged by security</p>
                </div>
              </div>

              {/* Fast Manual Check-in Form */}
              <form onSubmit={handleQuickCheckin} className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 space-y-2">
                <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5 text-emerald-400" /> Fast Manual Pass / Code Check-in:
                </label>
                <div className="flex gap-2">
                  <Input
                    value={searchToken}
                    onChange={(e) => setSearchToken(e.target.value)}
                    placeholder="Enter Pass Code (e.g. QP-8042) or guest name"
                    className="text-xs bg-zinc-900 border-zinc-700"
                  />
                  <Button type="submit" variant="gold" size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shrink-0">
                    Verify & Check In
                  </Button>
                </div>
                {checkinMessage && (
                  <div className={`p-2 rounded text-xs flex items-center gap-1.5 ${
                    checkinMessage.type === 'success' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  }`}>
                    {checkinMessage.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                    <span>{checkinMessage.text}</span>
                  </div>
                )}
              </form>

              {/* Recent Scan Stream */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Recent Gate Scan Stream
                </h4>
                <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                  {checkinLogs.slice(0, 5).map((log) => (
                    <div key={log.id} className="p-2.5 rounded-lg border border-zinc-800 bg-zinc-900/60 text-xs flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <div>
                          <span className="font-semibold text-zinc-200">{log.attendee_name || 'Family Attendee'}</span>
                          <span className="text-[10px] text-zinc-400 ml-2 font-mono">{log.qr_pass_id ? 'Pass Verified' : 'Manual'}</span>
                        </div>
                      </div>
                      <span className="text-[10px] text-zinc-400 font-mono">
                        {new Date(log.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ROLE VIEW: CATERER VENDOR & CATERING MANAGER */}
      {(userRole === 'vendor' || userRole === 'catering_manager') && (
        <div className="space-y-4">
          <Card className="border-orange-500/40 bg-gradient-to-r from-orange-950/20 via-zinc-900 to-zinc-950">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <CardTitle className="text-xl font-bold flex items-center gap-2 text-orange-400">
                    <UtensilsCrossed className="w-5 h-5" /> Kitchen & Catering Live Operations
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Real-time portion totals, kitchen preparation requirements with buffer margins, and dietary breakdown
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Link to="/vendor">
                    <Button variant="outline" size="sm" className="text-xs gap-1 border-orange-500/40 text-orange-300">
                      <ExternalLink className="w-3.5 h-3.5" /> Full Vendor Portal
                    </Button>
                  </Link>
                  <Link to="/catering">
                    <Button variant="default" size="sm" className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs gap-1">
                      <ChefHat className="w-3.5 h-3.5" /> Menu Manager
                    </Button>
                  </Link>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-1">
              {/* Dietary Proportions Row */}
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl border bg-zinc-900/80 text-center">
                  <span className="text-[10px] uppercase font-bold text-emerald-400">Pure Vegetarian</span>
                  <div className="text-2xl font-black text-emerald-400 mt-1">{vegCount}</div>
                  <span className="text-[10px] text-muted-foreground">Guests</span>
                </div>

                <div className="p-3 rounded-xl border bg-zinc-900/80 text-center">
                  <span className="text-[10px] uppercase font-bold text-rose-400">Non-Vegetarian</span>
                  <div className="text-2xl font-black text-rose-400 mt-1">{nonVegCount}</div>
                  <span className="text-[10px] text-muted-foreground">Guests</span>
                </div>

                <div className="p-3 rounded-xl border bg-zinc-900/80 text-center">
                  <span className="text-[10px] uppercase font-bold text-amber-400">Jain / No Root</span>
                  <div className="text-2xl font-black text-amber-400 mt-1">{jainCount}</div>
                  <span className="text-[10px] text-muted-foreground">Guests</span>
                </div>
              </div>

              {/* Kitchen Portion Requirements Table */}
              <div className="border rounded-xl overflow-hidden text-xs">
                <div className="p-3 bg-muted/30 font-bold border-b flex justify-between items-center">
                  <span>Dish Preparation Quantities (with 10% safety buffer)</span>
                  <span className="text-[10px] text-muted-foreground">Updated in real-time from RSVPs</span>
                </div>
                <div className="divide-y max-h-56 overflow-y-auto">
                  {cateringCalculations.slice(0, 6).map((calc) => (
                    <div key={calc.id} className="p-2.5 flex items-center justify-between hover:bg-muted/10">
                      <div>
                        <span className="font-semibold text-foreground">{calc.menu_item?.name || 'Dish Item'}</span>
                        <p className="text-[10px] text-muted-foreground">
                          Confirmed: {calc.confirmed_quantity} + Buffer ({calc.buffer_percentage}%): {calc.buffer_quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-amber-500 font-mono text-sm">{calc.recommended_quantity} portions</span>
                        <p className="text-[10px] text-muted-foreground">₹{calc.total_estimated_cost.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ROLE VIEW: SEATING MANAGER */}
      {userRole === 'seating_manager' && (
        <div className="space-y-4">
          <Card className="border-indigo-500/40 bg-gradient-to-r from-indigo-950/20 via-zinc-900 to-zinc-950">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <CardTitle className="text-xl font-bold flex items-center gap-2 text-indigo-400">
                    <Armchair className="w-5 h-5" /> Venue Seating Studio & Table Allocations
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Interactive 2D table floor-plan, family table clustering, and automatic seating allocation
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRunSeating}
                    className="text-xs gap-1 border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/20"
                  >
                    <Sparkles className="w-3.5 h-3.5" /> Auto-Allocate Families
                  </Button>
                  <Link to="/seating">
                    <Button variant="default" size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs gap-1">
                      <Armchair className="w-3.5 h-3.5" /> Open Seating Studio
                    </Button>
                  </Link>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-1">
              {seatingFeedback && (
                <div className="p-3 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-200 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  <span>{seatingFeedback}</span>
                </div>
              )}

              {/* Seating KPIs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-4 rounded-xl border bg-zinc-900/80">
                  <span className="text-muted-foreground uppercase font-bold text-[10px]">Allocated Seats</span>
                  <div className="text-2xl font-black text-indigo-400 mt-1">{allocatedSeats} / {totalSeats}</div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    {Math.round((allocatedSeats / (totalSeats || 1)) * 100)}% venue capacity occupied
                  </p>
                </div>

                <div className="p-4 rounded-xl border bg-zinc-900/80">
                  <span className="text-muted-foreground uppercase font-bold text-[10px]">Unassigned Attendees</span>
                  <div className="text-2xl font-black text-amber-400 mt-1">{Math.max(0, totalAttendees - allocatedSeats)}</div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Confirmed guests awaiting table assignment</p>
                </div>

                <div className="p-4 rounded-xl border bg-zinc-900/80">
                  <span className="text-muted-foreground uppercase font-bold text-[10px]">Configured Tables</span>
                  <div className="text-2xl font-black text-white mt-1">{venueLayout.tables.length} Tables</div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">VIP, Family, and Banquet round tables</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ROLE VIEW: GUEST MANAGER & INVITATION MANAGER */}
      {(userRole === 'guest_manager' || userRole === 'invitation_manager') && (
        <div className="space-y-4">
          <Card className="border-blue-500/40 bg-gradient-to-r from-blue-950/20 via-zinc-900 to-zinc-950">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <CardTitle className="text-xl font-bold flex items-center gap-2 text-blue-400">
                    <Users className="w-5 h-5" /> Guest Relations & WhatsApp Outreach
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Family invitations, attendance status, WhatsApp broadcasts, and token generation
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Link to="/guests">
                    <Button variant="outline" size="sm" className="text-xs gap-1 border-blue-500/40 text-blue-300 hover:bg-blue-500/20">
                      <Users className="w-3.5 h-3.5" /> Guest List
                    </Button>
                  </Link>
                  <Link to="/whatsapp">
                    <Button variant="default" size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs gap-1">
                      <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Broadcast
                    </Button>
                  </Link>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-1">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl border bg-zinc-900/80 text-center">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground">Total Invited</span>
                  <div className="text-xl font-bold text-white mt-1">{totalInvitations} Households</div>
                </div>
                <div className="p-3 rounded-xl border bg-zinc-900/80 text-center">
                  <span className="text-[10px] uppercase font-bold text-emerald-400">Confirmed RSVPs</span>
                  <div className="text-xl font-bold text-emerald-400 mt-1">{confirmedRSVPs.length} Families</div>
                </div>
                <div className="p-3 rounded-xl border bg-zinc-900/80 text-center">
                  <span className="text-[10px] uppercase font-bold text-blue-400">WhatsApp Delivered</span>
                  <div className="text-xl font-bold text-blue-400 mt-1">{whatsappQueue.filter((q) => q.status === 'delivered' || q.status === 'read').length}</div>
                </div>
                <div className="p-3 rounded-xl border bg-zinc-900/80 text-center">
                  <span className="text-[10px] uppercase font-bold text-amber-400">Pending Response</span>
                  <div className="text-xl font-bold text-amber-400 mt-1">{Math.max(0, totalInvitations - rsvps.length)}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ROLE VIEW: PLATFORM ADMIN */}
      {userRole === 'admin' && (
        <div className="space-y-4">
          <Card className="border-red-500/40 bg-gradient-to-r from-red-950/20 via-zinc-900 to-zinc-950">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <CardTitle className="text-xl font-bold flex items-center gap-2 text-red-400">
                    <ShieldCheck className="w-5 h-5" /> SaaS Platform Infrastructure & Multi-Tenancy
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Tenant isolation, Supabase PostgreSQL synchronization, and SaaS subscriptions
                  </CardDescription>
                </div>
                <Link to="/admin">
                  <Button variant="default" size="sm" className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Open SaaS Console
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-xs pt-1">
              <div className="p-3 rounded-xl border bg-zinc-900/80 flex justify-between items-center">
                <div>
                  <span className="font-semibold text-white">Active Tenant Organization:</span>
                  <p className="text-[11px] text-muted-foreground font-mono">{activeOrgName}</p>
                </div>
                <Badge variant="gold">Professional Wedding Tier</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* 4. HOLISTIC 360° EVENT COMMAND CENTER (Visible to Owner, Event Manager, and Admin) */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-rose-950 p-6 sm:p-8 text-white shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-rose-500/20 px-3 py-1 text-xs font-semibold text-rose-300 backdrop-blur-sm border border-rose-500/30">
              Live Event Command Center
            </span>
            <Badge variant="gold">{event.category.toUpperCase()}</Badge>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-display">
            {event.name}
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            {event.venue_name} • {event.start_date} to {event.end_date}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link to="/checkin">
              <Button variant="gold" size="sm" className="gap-2">
                <QrCode className="w-4 h-4" /> Open Gate Scanner
              </Button>
            </Link>
            <Link to="/designer">
              <Button variant="outline" size="sm" className="bg-white/10 text-white hover:bg-white/20 border-white/20 gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" /> Digital Designer
              </Button>
            </Link>
            <Link to="/whatsapp">
              <Button variant="whatsapp" size="sm" className="gap-2">
                <MessageCircle className="w-4 h-4" /> WhatsApp Broadcast
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Primary KPI Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Families */}
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Family Invitations
              </p>
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold">{totalInvitations}</span>
              <span className="text-xs text-muted-foreground">Households</span>
            </div>
            <p className="text-[11px] text-emerald-600 font-medium mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> {whatsappQueue.filter((q) => q.status === 'delivered' || q.status === 'read').length} WhatsApp Delivered
            </p>
          </CardContent>
        </Card>

        {/* Confirmed Attendees */}
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Confirmed Attendees
              </p>
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold">{totalAttendees}</span>
              <span className="text-xs text-muted-foreground">
                ({adultAttendees} Adults, {childAttendees} Kids)
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-1">
              {confirmedRSVPs.length} Confirmed Families
            </p>
          </CardContent>
        </Card>

        {/* Live Gate Check-ins */}
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Live Gate Check-ins
              </p>
              <div className="p-2 rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-950">
                <QrCode className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-amber-600">{checkedInAttendees}</span>
              <span className="text-xs text-muted-foreground">
                / {totalAttendees} ({Math.round((checkedInAttendees / (totalAttendees || 1)) * 100)}%)
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-1">
              {checkinLogs.length} Scans recorded at gate
            </p>
          </CardContent>
        </Card>

        {/* Seating Allocation */}
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Seating Allocation
              </p>
              <div className="p-2 rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-950">
                <Armchair className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold">{allocatedSeats}</span>
              <span className="text-xs text-muted-foreground">/ {totalSeats} Seats</span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-1">
              {venueLayout.tables.length} Tables Designed
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Arrival Time Slots Occupancy */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" /> Arrival Time Window Distribution
            </CardTitle>
            <CardDescription>Guest arrival reservations across scheduled slots</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={slotChartData}>
                  <XAxis dataKey="time" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Bar dataKey="Booked" fill="#e11d48" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Capacity" fill="#e4e4e7" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Dietary Preferences Chart */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-primary" /> Food & Dietary Preferences
            </CardTitle>
            <CardDescription>Live guest breakdown for catering preparation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dietaryChartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {dietaryChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Multi-Function Itinerary Timeline */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-primary" /> Event Celebrations & Multi-Day Itinerary
              </CardTitle>
              <CardDescription>Detailed schedule of ceremonies and assigned menus</CardDescription>
            </div>
            <Link to="/events">
              <Button variant="outline" size="sm" className="text-xs">
                Manage Functions
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {event.functions.map((fn, idx) => (
              <div key={fn.id} className="p-3.5 rounded-xl border bg-muted/20 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-foreground text-sm">{fn.name}</span>
                  <Badge variant="outline" className="text-[9px]">Day {idx + 1}</Badge>
                </div>
                <p className="text-muted-foreground text-[11px] flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {fn.date} ({fn.start_time} - {fn.end_time})
                </p>
                <p className="text-muted-foreground text-[11px] truncate">
                  Venue: {fn.venue_name}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
