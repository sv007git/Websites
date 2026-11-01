import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppStore } from '@/modules/invitedecide/stores/useAppStore';
import { Card, CardContent } from '@/modules/invitedecide/components/ui/card';
import { Button } from '@/modules/invitedecide/components/ui/button';
import { Input } from '@/modules/invitedecide/components/ui/input';
import { Badge } from '@/modules/invitedecide/components/ui/badge';
import { QRCodeDisplay } from '@/modules/invitedecide/components/qr/QRCodeDisplay';
import {
  Sparkles,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  Users,
  UtensilsCrossed,
  Share2,
  ExternalLink,
  ChevronDown,
  Info,
  QrCode,
  ShieldCheck,
  ArrowLeft,
  LayoutDashboard,
  Home,
  MessageCircle,
} from 'lucide-react';
import { QRPass } from '@/modules/invitedecide/types';

export const GuestInvitePortalPage: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const {
    event,
    invitations,
    guests,
    timeSlots,
    menuCategories,
    menuItems,
    invitationDesign,
    submitRSVP,
    qrPasses,
  } = useAppStore();

  // Find invitation by token
  const invitation = invitations.find((i) => i.token === token) || invitations[0];
  const primaryGuest = guests.find((g) => g.id === invitation?.guest_id) || guests[0];

  // RSVP Form State
  const [rsvpStatus, setRsvpStatus] = useState<'confirmed' | 'declined'>('confirmed');
  const [selectedSlotId, setSelectedSlotId] = useState(timeSlots[0]?.id || '');
  const [attendeesList, setAttendeesList] = useState<
    Array<{
      full_name: string;
      is_child: boolean;
      dietary_preference: 'veg' | 'non_veg' | 'jain' | 'vegan';
      selectedDishes: string[];
    }>
  >([
    {
      full_name: primaryGuest ? primaryGuest.full_name : 'Valued Guest',
      is_child: false,
      dietary_preference: primaryGuest ? primaryGuest.dietary_preference : 'veg',
      selectedDishes: ['item-01', 'item-03', 'item-06', 'item-09'],
    },
    {
      full_name: 'Family Member 2',
      is_child: false,
      dietary_preference: 'veg',
      selectedDishes: ['item-01', 'item-05', 'item-08', 'item-10'],
    },
  ]);

  const [dietaryNotes, setDietaryNotes] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [generatedPass, setGeneratedPass] = useState<QRPass | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [shareCopied, setShareCopied] = useState(false);

  const handleAddMember = () => {
    setAttendeesList([
      ...attendeesList,
      {
        full_name: `Family Attendee ${attendeesList.length + 1}`,
        is_child: false,
        dietary_preference: 'veg',
        selectedDishes: ['item-01', 'item-03', 'item-06', 'item-09'],
      },
    ]);
  };

  const handleRemoveMember = (idx: number) => {
    if (attendeesList.length <= 1) return;
    setAttendeesList(attendeesList.filter((_, i) => i !== idx));
  };

  const handleToggleDish = (memberIdx: number, dishId: string) => {
    const updated = [...attendeesList];
    const current = updated[memberIdx].selectedDishes;
    if (current.includes(dishId)) {
      updated[memberIdx].selectedDishes = current.filter((id) => id !== dishId);
    } else {
      updated[memberIdx].selectedDishes = [...current, dishId];
    }
    setAttendeesList(updated);
  };

  const handleSubmitRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const formattedAttendees = attendeesList.map((att) => ({
      full_name: att.full_name,
      is_child: att.is_child,
      dietary_preference: att.dietary_preference,
      food_selections: att.selectedDishes.map((dishId) => ({
        menu_item_id: dishId,
        quantity: 1,
      })),
    }));

    const result = submitRSVP(invitation ? invitation.token : 'demo', {
      status: rsvpStatus,
      timeSlotId: rsvpStatus === 'confirmed' ? selectedSlotId : undefined,
      attendees: rsvpStatus === 'confirmed' ? formattedAttendees : [],
      dietary_notes: dietaryNotes,
      special_requests: specialRequests,
    });

    if (result.success) {
      setSubmissionSuccess(true);
      if (result.qrPass) {
        setGeneratedPass(result.qrPass);
      }
    } else {
      setErrorMessage(result.error || 'Failed to submit RSVP. Please check your connection.');
    }
  };

  const handleShareWhatsApp = () => {
    const shareUrl = window.location.href;
    const text = encodeURIComponent(
      `🕉️ You are cordially invited to the wedding of Aditya & Priya! View your personalized invitation and RSVP here: ${shareUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      {/* 1. Persistent Top Navigation Bar (Fixes fullpage trapped issue) */}
      <header className="sticky top-0 z-50 w-full bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80 px-4 py-2.5 shadow-md">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-amber-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg transition-colors font-medium shadow-sm hover:border-zinc-700"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/dashboard"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white px-2.5 py-1.5 rounded-lg transition-colors hover:bg-zinc-900"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Organizer Dashboard</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {invitation && (
              <Link
                to={`/pass/${invitation.token}`}
                className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-lg transition-colors font-medium"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Entry Pass</span>
              </Link>
            )}

            <button
              type="button"
              onClick={handleShareWhatsApp}
              className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-lg transition-colors font-medium"
              title="Share on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Main Content Container */}
      <main className="flex-1 w-full max-w-2xl mx-auto py-6 px-4 sm:px-6 flex flex-col items-center">
        {/* Guest Personalized Top Welcome Pill */}
        <div className="w-full mb-4 flex items-center justify-between text-xs bg-zinc-900/80 border border-zinc-800 p-2.5 rounded-xl">
          <span className="text-zinc-400">
            Personal Invitation for: <strong className="text-amber-300">{primaryGuest?.full_name}</strong>
          </span>
          <span className="font-mono text-zinc-500">{invitation?.invitation_code}</span>
        </div>

        {/* Main Digital Invitation Presentation Card */}
        <div
          className="w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-600/40 relative mb-8"
          style={{
            backgroundColor: invitationDesign.background_color,
            backgroundImage: `url(${invitationDesign.background_image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-2 border border-amber-400/30 rounded-xl pointer-events-none" />

          <div className="relative z-10 p-6 sm:p-10 flex flex-col items-center text-center space-y-4">
            <p className="font-serif text-sm tracking-widest text-amber-300 font-bold">
              🕉️ || श्री गणेशाय नमः ||
            </p>

            <p className="text-xs uppercase tracking-widest text-zinc-200">
              TOGETHER WITH THEIR FAMILIES
            </p>

            <p className="font-serif text-base text-white">{event.host_names}</p>

            <div className="py-2">
              <h1 className="font-display text-4xl sm:text-5xl text-amber-300 drop-shadow-md">
                Aditya & Priya
              </h1>
            </div>

            <p className="text-xs font-semibold tracking-wider text-zinc-200 uppercase">
              REQUEST THE PLEASURE OF YOUR COMPANY TO CELEBRATE THEIR WEDDING
            </p>

            <div className="py-2 border-y border-amber-400/30 w-full text-xs space-y-1">
              <p className="font-bold text-amber-200 text-sm">
                {event.start_date} • {event.venue_name}
              </p>
              <p className="text-zinc-300">{event.address}</p>
            </div>

            {event.google_maps_link && (
              <a
                href={event.google_maps_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:underline pt-1"
              >
                <MapPin className="w-3.5 h-3.5" /> View on Google Maps <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* Multi-Function Itinerary Timeline */}
        <div className="w-full mb-8 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 text-center">
            Wedding Itinerary & Celebrations
          </h3>
          <div className="space-y-2">
            {event.functions.map((fn) => (
              <div
                key={fn.id}
                className="p-3.5 rounded-xl border border-zinc-800 bg-zinc-900/60 text-xs flex items-center justify-between"
              >
                <div>
                  <h4 className="font-bold text-sm text-zinc-100">{fn.name}</h4>
                  <p className="text-zinc-400 text-[11px] mt-0.5">
                    {fn.date} • {fn.start_time} - {fn.end_time} • {fn.venue_name}
                  </p>
                  {fn.dress_code && (
                    <p className="text-[10px] text-amber-400/80 mt-0.5">Dress Code: {fn.dress_code}</p>
                  )}
                </div>
                <Badge variant="outline" className="border-zinc-700 text-zinc-300 text-[10px]">
                  {fn.name.split(' ')[0]}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* RSVP Section or Confirmed QR Pass Display */}
        <div className="w-full">
          {submissionSuccess && generatedPass ? (
            <Card className="bg-zinc-900 border-emerald-500/40 text-zinc-100 shadow-2xl">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white">RSVP Successfully Confirmed!</h2>
                  <p className="text-xs text-zinc-400 mt-1">
                    Thank you, {primaryGuest.full_name}. We look forward to celebrating with your family.
                  </p>
                </div>

                {/* QR Pass */}
                <div className="py-2">
                  <QRCodeDisplay
                    value={generatedPass.token_plaintext || generatedPass.display_code}
                    displayCode={generatedPass.display_code}
                    title="Official Gate Entry Pass"
                    subtitle={`Admit: ${generatedPass.max_attendees} Family Attendees`}
                    size={200}
                  />
                </div>

                <div className="p-3 rounded-xl bg-zinc-800/80 text-xs text-zinc-300 text-left space-y-1">
                  <p className="flex items-center gap-1.5 font-semibold text-amber-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Gate Check-in Instructions:
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    Please show this QR code upon arrival at the venue gate for instant check-in and escort to your reserved seating.
                  </p>
                </div>

                {/* Action Buttons for Easy Navigation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  <Link
                    to={`/pass/${invitation?.token}`}
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold text-xs shadow-md transition-all"
                  >
                    <QrCode className="w-4 h-4" /> Open Full-Screen Pass
                  </Link>

                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-xs transition-all border border-zinc-700"
                  >
                    <Home className="w-4 h-4" /> Return to Homepage
                  </Link>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-zinc-900 border-zinc-800 text-zinc-100 shadow-xl">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-bold font-display text-white">Confirm Your Attendance</h2>
                  <p className="text-xs text-zinc-400 mt-1">
                    Kindly let us know if your family will attend so we can ensure personalized catering and seating.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-800 text-xs text-rose-300">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmitRSVP} className="space-y-6">
                  {/* Accept or Decline Pills */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setRsvpStatus('confirmed')}
                      className={`p-3 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                        rsvpStatus === 'confirmed'
                          ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300'
                          : 'border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:bg-zinc-800'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" /> Gladly Accept
                    </button>

                    <button
                      type="button"
                      onClick={() => setRsvpStatus('declined')}
                      className={`p-3 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                        rsvpStatus === 'declined'
                          ? 'border-rose-500 bg-rose-500/20 text-rose-300'
                          : 'border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:bg-zinc-800'
                      }`}
                    >
                      <XCircle className="w-4 h-4" /> Decline with Regrets
                    </button>
                  </div>

                  {rsvpStatus === 'confirmed' && (
                    <>
                      {/* Time Slot Selection */}
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-primary" /> Select Preferred Arrival Time Window:
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {timeSlots.map((slot) => {
                            const isFull = slot.booked_count >= slot.capacity;
                            const isSelected = selectedSlotId === slot.id;

                            return (
                              <button
                                key={slot.id}
                                type="button"
                                disabled={isFull}
                                onClick={() => setSelectedSlotId(slot.id)}
                                className={`p-3 rounded-xl border text-left transition-all ${
                                  isSelected
                                    ? 'border-amber-400 bg-amber-500/10 text-white font-bold'
                                    : isFull
                                    ? 'border-zinc-800/40 bg-zinc-950/30 text-zinc-600 cursor-not-allowed'
                                    : 'border-zinc-800 bg-zinc-950/60 text-zinc-300 hover:border-zinc-700'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-semibold">
                                    {slot.start_time} - {slot.end_time}
                                  </span>
                                  {isFull && <Badge variant="destructive" className="text-[9px]">Full</Badge>}
                                </div>
                                <p className="text-[10px] text-zinc-400 mt-1">Date: {slot.slot_date}</p>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Attending Family Members */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5 text-primary" /> Attending Family Members ({attendeesList.length}):
                          </label>
                          <button
                            type="button"
                            onClick={handleAddMember}
                            className="text-xs text-amber-400 hover:underline"
                          >
                            + Add Member
                          </button>
                        </div>

                        {attendeesList.map((member, mIdx) => (
                          <div key={mIdx} className="p-3 rounded-xl border border-zinc-800 bg-zinc-950/80 space-y-3">
                            <div className="flex items-center justify-between gap-2">
                              <Input
                                value={member.full_name}
                                onChange={(e) => {
                                  const updated = [...attendeesList];
                                  updated[mIdx].full_name = e.target.value;
                                  setAttendeesList(updated);
                                }}
                                placeholder={`Attendee ${mIdx + 1} Name`}
                                className="text-xs bg-zinc-900 border-zinc-700"
                              />
                              {attendeesList.length > 1 && (
                                <button
                                  type="button"
                                  onClick={() => handleRemoveMember(mIdx)}
                                  className="text-zinc-500 hover:text-rose-400 text-xs px-2"
                                >
                                  Remove
                                </button>
                              )}
                            </div>

                            {/* Member Dietary */}
                            <div className="flex items-center gap-2 text-xs">
                              <span className="text-[11px] text-zinc-400">Diet:</span>
                              {(['veg', 'non_veg', 'jain'] as const).map((diet) => (
                                <button
                                  key={diet}
                                  type="button"
                                  onClick={() => {
                                    const updated = [...attendeesList];
                                    updated[mIdx].dietary_preference = diet;
                                    setAttendeesList(updated);
                                  }}
                                  className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase border transition-all ${
                                    member.dietary_preference === diet
                                      ? 'bg-amber-500/20 text-amber-300 border-amber-500'
                                      : 'border-zinc-800 text-zinc-500'
                                  }`}
                                >
                                  {diet.replace('_', ' ')}
                                </button>
                              ))}
                            </div>

                            {/* Member Dish Selections */}
                            <div className="pt-1">
                              <p className="text-[10px] text-zinc-400 mb-1.5">
                                Preferred Dish Selections for this guest:
                              </p>
                              <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                                {menuItems.slice(0, 6).map((item) => {
                                  const isSelected = member.selectedDishes.includes(item.id);
                                  return (
                                    <button
                                      key={item.id}
                                      type="button"
                                      onClick={() => handleToggleDish(mIdx, item.id)}
                                      className={`p-2 rounded-lg border text-left truncate transition-all ${
                                        isSelected
                                          ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300 font-semibold'
                                          : 'border-zinc-800 text-zinc-400 hover:bg-zinc-900'
                                      }`}
                                    >
                                      {isSelected ? '✓ ' : '+ '} {item.name}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Special Requests */}
                      <div>
                        <label className="text-xs font-semibold text-zinc-300">
                          Dietary Allergies or Special Assistance (Optional)
                        </label>
                        <Input
                          value={specialRequests}
                          onChange={(e) => setSpecialRequests(e.target.value)}
                          placeholder="e.g. Nut allergy, wheelchair access at entrance"
                          className="mt-1 text-xs bg-zinc-900 border-zinc-700"
                        />
                      </div>
                    </>
                  )}

                  <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
                    <Button type="submit" variant="gold" size="lg" className="w-full sm:flex-1 text-sm font-bold">
                      {rsvpStatus === 'confirmed' ? 'Submit RSVP & Receive QR Pass' : 'Submit Response'}
                    </Button>
                    <Link
                      to="/"
                      className="w-full sm:w-auto text-center px-4 py-2.5 rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800 text-xs font-medium"
                    >
                      Cancel / Back
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};
