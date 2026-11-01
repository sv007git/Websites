import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { LandingPage } from '@/pages/landing/LandingPage';
import { LoginPage } from '@/pages/auth/LoginPage';
import { OverviewPage } from '@/pages/dashboard/OverviewPage';
import { EventsListPage } from '@/pages/events/EventsListPage';
import { InvitationDesignerPage } from '@/pages/invitations/InvitationDesignerPage';
import { GuestListPage } from '@/pages/guests/GuestListPage';
import { WhatsAppManagerPage } from '@/pages/whatsapp/WhatsAppManagerPage';
import { RSVPManagerPage } from '@/pages/rsvp/RSVPManagerPage';
import { CateringPlannerPage } from '@/pages/catering/CateringPlannerPage';
import { SeatingStudioPage } from '@/pages/seating/SeatingStudioPage';
import { StaffCheckInPage } from '@/pages/checkin/StaffCheckInPage';
import { ReportsPage } from '@/pages/reports/ReportsPage';
import { PlatformAdminPage } from '@/pages/admin/PlatformAdminPage';
import { VendorPortalPage } from '@/pages/vendor/VendorPortalPage';
import { GuestInvitePortalPage } from '@/pages/rsvp/GuestInvitePortalPage';
import { GuestPassPage } from '@/pages/rsvp/GuestPassPage';

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
