import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/utils/cn';
import { useAppStore } from '@/stores/useAppStore';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  LayoutDashboard,
  CalendarDays,
  Palette,
  Users,
  MessageCircle,
  Clock,
  UtensilsCrossed,
  Armchair,
  QrCode,
  FileSpreadsheet,
  Settings,
  ShieldCheck,
  Sparkles,
  RotateCcw,
} from 'lucide-react';

interface SidebarProps {
  className?: string;
}

export const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/events', label: 'Event & Functions', icon: CalendarDays },
  { to: '/designer', label: 'Digital Designer', icon: Palette },
  { to: '/guests', label: 'Guests & Families', icon: Users },
  { to: '/whatsapp', label: 'WhatsApp Messenger', icon: MessageCircle },
  { to: '/rsvp-manager', label: 'RSVP & Time Slots', icon: Clock },
  { to: '/catering', label: 'Catering & Menu', icon: UtensilsCrossed },
  { to: '/seating', label: 'Venue Seating Studio', icon: Armchair },
  { to: '/checkin', label: 'Gate Check-in', icon: QrCode },
  { to: '/reports', label: 'Reports & Exports', icon: FileSpreadsheet },
  { to: '/admin', label: 'SaaS Platform Admin', icon: ShieldCheck },
  { to: '/settings', label: 'Settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const {
    userRole,
    isDemoMode,
    loadDemoDataIntoWorkspace,
    clearWorkspaceData,
    setSetupWizardOpen,
    activeOrgName,
  } = useAppStore();

  // Role tag helpers
  const getRoleBadgeForItem = (path: string) => {
    if (userRole === 'checkin_operator' && path === '/checkin') return 'Gate Lead';
    if ((userRole === 'vendor' || userRole === 'catering_manager') && path === '/catering') return 'Kitchen';
    if (userRole === 'seating_manager' && path === '/seating') return 'Studio';
    if (userRole === 'guest_manager' && path === '/guests') return 'Focus';
    if (userRole === 'invitation_manager' && path === '/designer') return 'Cards';
    if (userRole === 'admin' && path === '/admin') return 'Admin';
    return null;
  };

  return (
    <aside
      className={cn(
        'hidden md:flex flex-col w-64 border-r bg-zinc-50/70 dark:bg-zinc-900/40 p-4 min-h-[calc(100vh-4rem)]',
        className
      )}
    >
      <div className="space-y-1">
        <div className="flex items-center justify-between px-3 mb-2">
          <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
            Event Planning
          </p>
          <Badge variant="outline" className="text-[9px] uppercase font-bold py-0">
            {userRole.replace('_', ' ')}
          </Badge>
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const roleBadge = getRoleBadgeForItem(item.to);

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-all',
                  isActive
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100'
                )
              }
            >
              <div className="flex items-center gap-3">
                <Icon className="h-4 w-4 shrink-0" />
                <span>{item.label}</span>
              </div>
              {roleBadge && (
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-500">
                  {roleBadge}
                </span>
              )}
            </NavLink>
          );
        })}
      </div>

      <div className="mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-2.5">
        <Button
          size="sm"
          variant="gold"
          onClick={() => setSetupWizardOpen(true)}
          className="w-full text-xs font-bold gap-1.5 shadow-sm"
          title="Launch wizard to input data and populate everything"
        >
          <Sparkles className="w-3.5 h-3.5" /> Setup Wizard
        </Button>

        {isDemoMode ? (
          <div className="rounded-xl bg-gradient-to-br from-amber-50 to-amber-100/70 p-3 text-xs text-amber-900 dark:bg-amber-950/40 dark:text-amber-200 space-y-1.5">
            <p className="font-bold flex items-center gap-1.5">
              <span>👑</span> Sample Demo Active
            </p>
            <p className="text-[11px] text-amber-800/80 dark:text-amber-300/80">
              500 Family invitations loaded for testing.
            </p>
            <Button
              size="sm"
              variant="outline"
              onClick={clearWorkspaceData}
              className="w-full text-[10px] h-6 bg-white/70 dark:bg-zinc-900/60 border-amber-300"
            >
              Start Empty Workspace
            </Button>
          </div>
        ) : (
          <div className="rounded-xl bg-muted/40 p-3 text-xs space-y-1.5 border">
            <p className="font-bold flex items-center gap-1.5 text-foreground">
              <span>🟢</span> Live Workspace
            </p>
            <p className="text-[11px] text-muted-foreground truncate">
              {activeOrgName}
            </p>
            <Button
              size="sm"
              variant="outline"
              onClick={loadDemoDataIntoWorkspace}
              className="w-full text-[10px] h-6 border-primary/30 text-primary"
            >
              Load Sample Demo Data
            </Button>
          </div>
        )}
      </div>
    </aside>
  );
};
