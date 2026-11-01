import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppStore } from '@/stores/useAppStore';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { QRCodeDisplay } from '@/components/qr/QRCodeDisplay';
import {
  Sparkles,
  MapPin,
  Clock,
  Calendar,
  Armchair,
  ShieldCheck,
  CheckCircle2,
  Share2,
  ArrowLeft,
  LayoutDashboard,
  Home,
  MessageCircle,
} from 'lucide-react';

export const GuestPassPage: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const { invitations, guests, event, qrPasses, attendees, venueLayout } = useAppStore();

  const invitation = invitations.find((i) => i.token === token) || invitations[0];
  const primaryGuest = guests.find((g) => g.id === invitation?.guest_id) || guests[0];
  const pass = qrPasses.find((p) => p.invitation_id === invitation?.id) || qrPasses[0];

  // Attendee seating info
  const familyAttendees = attendees.filter(
    (a) => a.guest_id === primaryGuest?.id || a.rsvp_id === pass?.rsvp_id
  );
  const firstSeated = familyAttendees.find((a) => a.seat_id);
  let seatLabel = 'Assigned upon arrival';
  if (firstSeated?.seat_id) {
    venueLayout.tables.forEach((t) => {
      const s = t.seats.find((seat) => seat.id === firstSeated.seat_id);
      if (s) seatLabel = `${t.name} (Seat ${s.seat_number})`;
    });
  }

  const handleShareWhatsApp = () => {
    const shareUrl = window.location.href;
    const text = encodeURIComponent(
      `🎟️ Official Gate Entry QR Pass for ${primaryGuest?.full_name} at the wedding of Aditya & Priya: ${shareUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80 px-4 py-2.5 shadow-md">
        <div className="max-w-md mx-auto flex items-center justify-between gap-2">
          <Link
            to={invitation ? `/invite/${invitation.token}` : '/'}
            className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-amber-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg transition-colors font-medium shadow-sm hover:border-zinc-700"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Invitation</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white px-2 py-1.5 rounded-lg"
            >
              <Home className="w-3.5 h-3.5" />
            </Link>
            <button
              type="button"
              onClick={handleShareWhatsApp}
              className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-lg transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Share Pass</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Gate Pass Card */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-md bg-zinc-900 border-amber-500/40 text-white shadow-2xl relative overflow-hidden">
          {/* Decorative Top Accent */}
          <div className="h-2 bg-gradient-to-r from-amber-500 via-rose-500 to-amber-500" />

          <CardContent className="p-6 text-center space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <span className="font-bold text-xs uppercase tracking-wider text-amber-400 font-display">
                {event.name}
              </span>
              <Badge variant="gold" className="text-[10px]">
                Gate Entry Pass
              </Badge>
            </div>

            <div>
              <h2 className="text-xl font-bold font-display text-white">
                {primaryGuest?.full_name} & Family
              </h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                Authorized Attendance: <strong>{pass?.max_attendees || 2} Guests</strong>
              </p>
            </div>

            {/* QR Code Presentation */}
            <div className="py-2">
              <QRCodeDisplay
                value={pass?.token_plaintext || pass?.display_code || 'PASS-DEMO'}
                displayCode={pass?.display_code || 'QP-8042'}
                title="Official Entrance Pass"
                subtitle="Scan at venue gate entrance"
                size={210}
              />
            </div>

            {/* Seating and Schedule Info */}
            <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-left text-xs space-y-2">
              <div className="flex items-center gap-2 text-zinc-300">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{event.start_date} • Main Reception</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{event.venue_name}</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Armchair className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  Seating: <strong>{seatLabel}</strong>
                </span>
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center text-xs text-zinc-400 border-t border-zinc-800">
              <Link
                to={`/invite/${invitation?.token}`}
                className="text-amber-400 hover:underline flex items-center gap-1"
              >
                <ArrowLeft className="w-3 h-3" /> View Full Invitation
              </Link>
              <span className="flex items-center gap-1 text-[11px] text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified Pass
              </span>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};
