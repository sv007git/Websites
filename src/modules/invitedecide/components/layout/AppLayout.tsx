import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';
import { EventSetupWizardModal } from '@/modules/invitedecide/components/events/EventSetupWizardModal';

export const AppLayout: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  const isPublicGuestRoute =
    location.pathname.startsWith('/invite') ||
    location.pathname === '/rsvp' ||
    location.pathname.startsWith('/rsvp/') ||
    location.pathname.startsWith('/pass');

  if (isPublicGuestRoute) {
    return (
      <main className="min-h-screen bg-zinc-950 text-zinc-100">
        <Outlet />
      </main>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar onToggleMobileNav={() => setMobileNavOpen(true)} />
      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      <EventSetupWizardModal />

      <div className="flex-1 flex flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
