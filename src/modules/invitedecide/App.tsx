import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from '@/modules/invitedecide/components/layout/AppLayout';
import { LandingPage } from '@/modules/invitedecide/pages/landing/LandingPage';
import { LoginPage } from '@/modules/invitedecide/pages/auth/LoginPage';
import { OverviewPage } from '@/modules/invitedecide/pages/dashboard/OverviewPage';
import { EventsListPage } from '@/modules/invitedecide/pages/events/EventsListPage';
import { InvitationDesignerPage } from '@/modules/invitedecide/pages/invitations/InvitationDesignerPage';
import { GuestListPage } from '@/modules/invitedecide/pages/guests/GuestListPage';
import { WhatsAppManagerPage } from '@/modules/invitedecide/pages/whatsapp/WhatsAppManagerPage';
import { RSVPManagerPage } from '@/modules/invitedecide/pages/rsvp/RSVPManagerPage';
import { CateringPlannerPage } from '@/modules/invitedecide/pages/catering/CateringPlannerPage';
import { SeatingStudioPage } from '@/modules/invitedecide/pages/seating/SeatingStudioPage';
import { StaffCheckInPage } from '@/modules/invitedecide/pages/checkin/StaffCheckInPage';
import { ReportsPage } from '@/modules/invitedecide/pages/reports/ReportsPage';
import { PlatformAdminPage } from '@/modules/invitedecide/pages/admin/PlatformAdminPage';
import { VendorPortalPage } from '@/modules/invitedecide/pages/vendor/VendorPortalPage';
import { GuestInvitePortalPage } from '@/modules/invitedecide/pages/rsvp/GuestInvitePortalPage';
import { GuestPassPage } from '@/modules/invitedecide/pages/rsvp/GuestPassPage';

export function App() {
  return (
    <Router>
      <Routes>
        {/* Public Landing & Auth Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage initialTab="login" />} />
        <Route path="/register" element={<LoginPage initialTab="signup" />} />
        <Route path="/signup" element={<LoginPage initialTab="signup" />} />

        {/* Public Guest Invitation & QR Pass Routes */}
        <Route path="/invite/:token" element={<GuestInvitePortalPage />} />
        <Route path="/invite" element={<GuestInvitePortalPage />} />
        <Route path="/pass/:token" element={<GuestPassPage />} />
        <Route path="/pass" element={<GuestPassPage />} />

        {/* Organizer & Staff SaaS App Shell */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<OverviewPage />} />
          <Route path="/events" element={<EventsListPage />} />
          <Route path="/designer" element={<InvitationDesignerPage />} />
          <Route path="/guests" element={<GuestListPage />} />
          <Route path="/whatsapp" element={<WhatsAppManagerPage />} />
          <Route path="/rsvp-manager" element={<RSVPManagerPage />} />
          <Route path="/catering" element={<CateringPlannerPage />} />
          <Route path="/seating" element={<SeatingStudioPage />} />
          <Route path="/checkin" element={<StaffCheckInPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/admin" element={<PlatformAdminPage />} />
          <Route path="/settings" element={<PlatformAdminPage />} />
          <Route path="/vendor" element={<VendorPortalPage />} />
        </Route>

        {/* Fallback to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
