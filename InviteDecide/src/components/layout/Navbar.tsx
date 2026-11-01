import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppStore } from '@/stores/useAppStore';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UserRole } from '@/types';
import {
  Sparkles,
  QrCode,
  ShieldCheck,
  Building2,
  Calendar,
  Utensils,
  Menu,
  LogOut,
  Crown,
  RotateCcw,
  UserCheck,
} from 'lucide-react';

interface NavbarProps {
  onToggleMobileNav?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleMobileNav }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    event,
    userRole,
    setUserRole,
    activeOrgName,
    userName,
    isDemoMode,
    loadDemoDataIntoWorkspace,
    clearWorkspaceData,
    setSetupWizardOpen,
    logout,
  } = useAppStore();

  const isPublicPage =
    location.pathname.startsWith('/invite') ||
    location.pathname === '/rsvp' ||
    location.pathname.startsWith('/rsvp/') ||
    location.pathname.startsWith('/pass');

  if (isPublicPage) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const roleColors: Record<UserRole, string> = {
    owner: 'border-amber-500/40 text-amber-500 bg-amber-500/10',
    event_manager: 'border-rose-500/40 text-rose-500 bg-rose-500/10',
    checkin_operator: 'border-emerald-500/40 text-emerald-500 bg-emerald-500/10',
    vendor: 'border-orange-500/40 text-orange-500 bg-orange-500/10',
    catering_manager: 'border-yellow-500/40 text-yellow-500 bg-yellow-500/10',
    seating_manager: 'border-indigo-500/40 text-indigo-500 bg-indigo-500/10',
    guest_manager: 'border-blue-500/40 text-blue-500 bg-blue-500/10',
    invitation_manager: 'border-purple-500/40 text-purple-500 bg-purple-500/10',
    admin: 'border-red-500/40 text-red-500 bg-red-500/10',
    readonly: 'border-zinc-500/40 text-zinc-500 bg-zinc-500/10',
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-zinc-950/90 dark:border-zinc-800">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Left: Mobile hamburger & Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMobileNav}
            className="md:hidden p-2 rounded-lg text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            aria-label="Open Navigation"
          >
            <Menu className="w-5 h-5" />
          </button>

          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-600 via-rose-500 to-amber-500 text-white shadow-md">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-zinc-900 dark:text-white font-display">
                Invite<span className="text-primary">Decide</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 dark:bg-amber-950/70 dark:text-amber-300 px-1.5 py-0.5 rounded">
                SaaS Enterprise
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Active Event Badge & Workspace Status */}
        <div className="hidden lg:flex items-center gap-2 text-xs">
          <Building2 className="w-4 h-4 text-zinc-400" />
          <span className="font-medium text-zinc-600 dark:text-zinc-400 truncate max-w-[180px]">
            {activeOrgName}
          </span>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <Calendar className="w-4 h-4 text-primary" />
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 truncate max-w-[200px]">
            {event.name}
          </span>

          {isDemoMode ? (
            <Badge variant="gold" className="text-[10px] py-0 px-2 cursor-pointer hover:opacity-80" onClick={clearWorkspaceData} title="Click to switch to a clean workspace">
              Sample Demo (500 Guests)
            </Badge>
          ) : (
            <Badge variant="outline" className="text-[10px] py-0 px-2 border-emerald-500/40 text-emerald-600 dark:text-emerald-400">
              Live Workspace
            </Badge>
          )}
        </div>

        {/* Right: Interactive Role Dropdown, Fast Actions & Logout */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Active Role Switcher Dropdown */}
          <div className="flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-800 p-1 rounded-lg text-xs border border-zinc-200 dark:border-zinc-700 shadow-sm">
            <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded border ${roleColors[userRole] || ''}`}>
              {userRole === 'owner' && '👑 Host'}
              {userRole === 'checkin_operator' && '🎟️ Gate'}
              {userRole === 'vendor' && '🍽️ Caterer'}
              {userRole === 'catering_manager' && '👨‍🍳 Food'}
              {userRole === 'seating_manager' && '🪑 Seating'}
              {userRole === 'guest_manager' && '👥 Guests'}
              {userRole === 'invitation_manager' && '💌 Invites'}
              {userRole === 'event_manager' && '📋 Planner'}
              {userRole === 'admin' && '🛡️ Admin'}
              {userRole === 'readonly' && '👁️ Viewer'}
            </span>
            <select
              value={userRole}
              onChange={(e) => setUserRole(e.target.value as UserRole)}
              className="bg-transparent font-medium text-zinc-800 dark:text-zinc-200 outline-none cursor-pointer pr-1 text-xs"
              title="Select Role to view dashboard permissions"
            >
              <option value="owner">Owner / Host</option>
              <option value="event_manager">Event Manager</option>
              <option value="checkin_operator">Gate Check-in Staff</option>
              <option value="vendor">Caterer / Vendor</option>
              <option value="catering_manager">Catering Manager</option>
              <option value="seating_manager">Seating Manager</option>
              <option value="guest_manager">Guest Manager</option>
              <option value="admin">Platform Admin</option>
            </select>
          </div>

          <Button
            size="sm"
            variant="gold"
            onClick={() => setSetupWizardOpen(true)}
            className="hidden sm:flex gap-1.5 text-xs font-bold shadow-sm"
            title="Launch Setup Wizard to populate your event"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Setup Wizard</span>
          </Button>

          <Link to="/checkin">
            <Button size="sm" variant="outline" className="hidden sm:flex gap-1.5 text-xs">
              <QrCode className="w-3.5 h-3.5 text-primary" />
              <span>Gate</span>
            </Button>
          </Link>

          {/* User Sign Out */}
          <Button
            size="sm"
            variant="ghost"
            onClick={handleLogout}
            className="text-xs text-zinc-500 hover:text-rose-600 px-2"
            title="Log Out of InviteDecide"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
