import React, { useState } from 'react';
import { useAppStore } from '@/modules/invitedecide/stores/useAppStore';
import { EventSetupFormData, EventFunctionInput } from '@/modules/invitedecide/services/eventGenerator';
import { Button } from '@/modules/invitedecide/components/ui/button';
import { Input } from '@/modules/invitedecide/components/ui/input';
import { Badge } from '@/modules/invitedecide/components/ui/badge';
import {
  Sparkles,
  CalendarDays,
  MapPin,
  Clock,
  UtensilsCrossed,
  Armchair,
  QrCode,
  Users,
  CheckCircle2,
  Plus,
  Trash2,
  X,
  ArrowRight,
  ArrowLeft,
  Heart,
  Briefcase,
  Cake,
  Wand2,
} from 'lucide-react';

export const EventSetupWizardModal: React.FC = () => {
  const { isSetupWizardOpen, setSetupWizardOpen, populateEventFromUserInput } = useAppStore();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Form State
  const defaultStartDate = new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0];
  const defaultEndDate = new Date(Date.now() + 32 * 86400000).toISOString().split('T')[0];

  const [formData, setFormData] = useState<EventSetupFormData>({
    eventName: "Aditya & Priya's Grand Wedding",
    category: 'wedding',
    hostNames: 'Dr. Ramesh & Sunita Sharma & Mr. Rajesh & Anita Verma',
    venueName: 'The Leela Palace & Royal Heritage Lawns',
    address: 'Diplomatic Enclave, Chanakyapuri, New Delhi',
    googleMapsLink: 'https://maps.google.com/?q=The+Leela+Palace+New+Delhi',
    contactPhone: '+91 98765 43210',
    contactWhatsApp: '+919876543210',
    startDate: defaultStartDate,
    endDate: defaultEndDate,
    dressCode: 'Royal Festive Traditional / Silk Sherwani',
    guestCapacity: 300,
    cateringBufferPercentage: 10,
    dietaryPreferences: ['veg', 'non_veg', 'jain'],
    cuisineStyle: 'north_indian',
    starterGuestsOption: 'realistic_sample',
    functions: [
      {
        name: 'Mehendi & Haldi Ceremony',
        date: defaultStartDate,
        start_time: '11:00',
        end_time: '15:00',
        venue_name: 'Poolside Verandah & Lawns',
        dress_code: 'Yellow & Floral Festive',
        description: 'Vibrant daytime ceremony with live folk music and henna artists.',
      },
      {
        name: 'Sangeet & Cocktail Night',
        date: defaultStartDate,
        start_time: '19:00',
        end_time: '23:30',
        venue_name: 'Grand Ballroom',
        dress_code: 'Glitz & Glamour / Indo-Western',
        description: 'Music, dance performances, and cocktail feast.',
      },
      {
        name: 'Traditional Wedding Ceremony (Pheras)',
        date: new Date(Date.now() + 31 * 86400000).toISOString().split('T')[0],
        start_time: '16:00',
        end_time: '20:30',
        venue_name: 'Royal Heritage Mandap Lawns',
        dress_code: 'Traditional Silk Sarees & Sherwanis',
        description: 'Vedic rituals, Baraat procession, and sacred Pheras at sunset.',
      },
      {
        name: 'Grand Royal Reception Feast',
        date: defaultEndDate,
        start_time: '19:30',
        end_time: '23:30',
        venue_name: 'Palace Courtyard & Banquets',
        dress_code: 'Black Tie / Royal Formal',
        description: 'Celebratory gala dinner welcoming the newlyweds.',
      },
    ],
  });

  if (!isSetupWizardOpen) return null;

  // Preset 1: Royal Indian Wedding
  const loadWeddingPreset = () => {
    const sDate = new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0];
    const eDate = new Date(Date.now() + 32 * 86400000).toISOString().split('T')[0];
    setFormData({
      eventName: "Aditya & Priya's Grand Wedding",
      category: 'wedding',
      hostNames: 'Dr. Ramesh & Sunita Sharma & Mr. Rajesh & Anita Verma',
      venueName: 'The Leela Palace & Royal Heritage Lawns',
      address: 'Diplomatic Enclave, Chanakyapuri, New Delhi',
      googleMapsLink: 'https://maps.google.com/?q=The+Leela+Palace+New+Delhi',
      contactPhone: '+91 98765 43210',
      contactWhatsApp: '+919876543210',
      startDate: sDate,
      endDate: eDate,
      dressCode: 'Royal Festive Traditional',
      guestCapacity: 350,
      cateringBufferPercentage: 12,
      dietaryPreferences: ['veg', 'non_veg', 'jain'],
      cuisineStyle: 'north_indian',
      starterGuestsOption: 'realistic_sample',
      functions: [
        {
          name: 'Mehendi & Haldi Ceremony',
          date: sDate,
          start_time: '11:00',
          end_time: '15:00',
          venue_name: 'Poolside Verandah & Lawns',
          dress_code: 'Yellow & Floral Festive',
        },
        {
          name: 'Sangeet & Cocktail Night',
          date: sDate,
          start_time: '19:00',
          end_time: '23:30',
          venue_name: 'Grand Ballroom',
          dress_code: 'Glitz & Glamour / Indo-Western',
        },
        {
          name: 'Traditional Wedding Ceremony (Pheras)',
          date: new Date(Date.now() + 31 * 86400000).toISOString().split('T')[0],
          start_time: '16:00',
          end_time: '20:30',
          venue_name: 'Royal Mandap Lawns',
          dress_code: 'Traditional Silk Sarees & Sherwanis',
        },
        {
          name: 'Grand Royal Reception Feast',
          date: eDate,
          start_time: '19:30',
          end_time: '23:30',
          venue_name: 'Palace Courtyard & Banquets',
          dress_code: 'Black Tie / Royal Formal',
        },
      ],
    });
  };

  // Preset 2: Birthday Celebration
  const loadBirthdayPreset = () => {
    const bDate = new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0];
    setFormData({
      eventName: "Rohan's 30th Birthday Bash & Cocktails",
      category: 'birthday',
      hostNames: 'Sneha Kapoor & Close Friends',
      venueName: 'Skyline Rooftop Lounge & Terrace',
      address: 'Level 14, High Street Phoenix, Lower Parel, Mumbai',
      googleMapsLink: 'https://maps.google.com/?q=High+Street+Phoenix+Mumbai',
      contactPhone: '+91 98200 12345',
      contactWhatsApp: '+919820012345',
      startDate: bDate,
      endDate: bDate,
      dressCode: 'Smart Casual / Cocktail Chic',
      guestCapacity: 80,
      cateringBufferPercentage: 10,
      dietaryPreferences: ['veg', 'non_veg'],
      cuisineStyle: 'multi_cuisine',
      starterGuestsOption: 'realistic_sample',
      functions: [
        {
          name: 'Sunset Cocktails & Cake Cutting',
          date: bDate,
          start_time: '18:30',
          end_time: '20:30',
          venue_name: 'Skyline Rooftop Lounge',
          dress_code: 'Cocktail Chic',
        },
        {
          name: 'Dinner Buffet & DJ Party',
          date: bDate,
          start_time: '20:30',
          end_time: '01:00',
          venue_name: 'Indoor Dance Pavilion',
          dress_code: 'Party Casual',
        },
      ],
    });
  };

  // Preset 3: Corporate Summit
  const loadCorporatePreset = () => {
    const cDate = new Date(Date.now() + 21 * 86400000).toISOString().split('T')[0];
    const cDateEnd = new Date(Date.now() + 22 * 86400000).toISOString().split('T')[0];
    setFormData({
      eventName: 'TechNex Global Innovation Summit & Gala 2026',
      category: 'corporate',
      hostNames: 'TechNex Executive Steering Committee',
      venueName: 'Grand Hyatt Convention Center',
      address: 'Bandra Kurla Complex (BKC), Mumbai',
      googleMapsLink: 'https://maps.google.com/?q=Grand+Hyatt+Mumbai',
      contactPhone: '+91 99000 88888',
      contactWhatsApp: '+919900088888',
      startDate: cDate,
      endDate: cDateEnd,
      dressCode: 'Business Formal / Black Tie',
      guestCapacity: 250,
      cateringBufferPercentage: 10,
      dietaryPreferences: ['veg', 'non_veg', 'vegan'],
      cuisineStyle: 'continental',
      starterGuestsOption: 'realistic_sample',
      functions: [
        {
          name: 'Keynote & Tech Showcase',
          date: cDate,
          start_time: '09:00',
          end_time: '17:00',
          venue_name: 'Main Auditorium Hall A',
          dress_code: 'Business Formal',
        },
        {
          name: 'Networking Gala Dinner & Awards',
          date: cDate,
          start_time: '19:00',
          end_time: '23:00',
          venue_name: 'Hyatt Grand Ballroom',
          dress_code: 'Cocktail / Black Tie',
        },
      ],
    });
  };

  // Preset 4: Engagement Ceremony
  const loadEngagementPreset = () => {
    const eDate = new Date(Date.now() + 20 * 86400000).toISOString().split('T')[0];
    setFormData({
      eventName: "Arjun & Sneha's Ring Ceremony",
      category: 'engagement',
      hostNames: 'Mr. & Mrs. Deepak Mehta & Mr. & Mrs. Sanjay Patel',
      venueName: 'ITC Gardenia Grand Ballroom',
      address: '1 Residency Road, Ashok Nagar, Bengaluru',
      googleMapsLink: 'https://maps.google.com/?q=ITC+Gardenia+Bengaluru',
      contactPhone: '+91 98450 11223',
      contactWhatsApp: '+919845011223',
      startDate: eDate,
      endDate: eDate,
      dressCode: 'Traditional Silk / Indo-Western',
      guestCapacity: 150,
      cateringBufferPercentage: 10,
      dietaryPreferences: ['veg', 'jain'],
      cuisineStyle: 'north_indian',
      starterGuestsOption: 'realistic_sample',
      functions: [
        {
          name: 'Auspicious Ring Exchange Ceremony',
          date: eDate,
          start_time: '17:00',
          end_time: '19:00',
          venue_name: 'Grand Ballroom',
          dress_code: 'Festive Traditional',
        },
        {
          name: 'Celebratory Musical Dinner Feast',
          date: eDate,
          start_time: '19:30',
          end_time: '23:00',
          venue_name: 'Terrace Garden Banquet',
          dress_code: 'Festive Traditional',
        },
      ],
    });
  };

  // Add a new ceremony to the list
  const handleAddFunction = () => {
    const newFn: EventFunctionInput = {
      name: `Ceremony ${formData.functions.length + 1}`,
      date: formData.startDate,
      start_time: '18:00',
      end_time: '22:00',
      venue_name: formData.venueName,
      dress_code: formData.dressCode || 'Festive Traditional',
    };
    setFormData({
      ...formData,
      functions: [...formData.functions, newFn],
    });
  };

  // Update a ceremony in the list
  const handleUpdateFunction = (index: number, updates: Partial<EventFunctionInput>) => {
    const updated = [...formData.functions];
    updated[index] = { ...updated[index], ...updates };
    setFormData({ ...formData, functions: updated });
  };

  // Remove a ceremony
  const handleRemoveFunction = (index: number) => {
    if (formData.functions.length <= 1) return;
    setFormData({
      ...formData,
      functions: formData.functions.filter((_, i) => i !== index),
    });
  };

  // Toggle dietary preference
  const toggleDietary = (diet: 'veg' | 'non_veg' | 'jain' | 'vegan') => {
    const exists = formData.dietaryPreferences.includes(diet);
    let updated: Array<'veg' | 'non_veg' | 'jain' | 'vegan'>;
    if (exists) {
      if (formData.dietaryPreferences.length === 1) return; // Keep at least one
      updated = formData.dietaryPreferences.filter((d) => d !== diet);
    } else {
      updated = [...formData.dietaryPreferences, diet];
    }
    setFormData({ ...formData, dietaryPreferences: updated });
  };

  // Final Action: Populate Everything
  const handlePopulateEverything = () => {
    const result = populateEventFromUserInput(formData);
    setSuccessMessage(result.message);
    setTimeout(() => {
      setSuccessMessage(null);
      setSetupWizardOpen(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setSetupWizardOpen(false)}
      />

      {/* Main Wizard Modal Container */}
      <div className="relative z-50 w-full max-w-4xl rounded-2xl bg-white shadow-2xl dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="p-4 sm:p-6 border-b border-zinc-200 dark:border-zinc-800 bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-transparent flex items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center text-white shadow-md shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold font-display text-zinc-900 dark:text-white">
                  Event Setup Wizard
                </h2>
                <Badge variant="gold" className="text-[10px] uppercase font-bold py-0.5">
                  Populate Everything
                </Badge>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                Input your event details once. We will automatically generate your invitation card, arrival slots, catering plan, seating chart, and guest passes!
              </p>
            </div>
          </div>

          <button
            onClick={() => setSetupWizardOpen(false)}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1-Click Quick Fill Presets Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-zinc-50 dark:bg-zinc-950/60 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="font-bold text-[11px] uppercase tracking-wider text-muted-foreground flex items-center gap-1 shrink-0">
            <Wand2 className="w-3.5 h-3.5 text-amber-500" />
            Quick Presets:
          </span>
          <button
            onClick={loadWeddingPreset}
            className="px-2.5 py-1 rounded-lg border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 font-medium transition-all shrink-0 flex items-center gap-1.5"
          >
            <Heart className="w-3 h-3 text-rose-500" /> Royal Wedding (350 Guests)
          </button>
          <button
            onClick={loadBirthdayPreset}
            className="px-2.5 py-1 rounded-lg border border-purple-500/40 bg-purple-500/10 hover:bg-purple-500/20 text-purple-700 dark:text-purple-300 font-medium transition-all shrink-0 flex items-center gap-1.5"
          >
            <Cake className="w-3 h-3 text-purple-500" /> Birthday Bash (80 Guests)
          </button>
          <button
            onClick={loadCorporatePreset}
            className="px-2.5 py-1 rounded-lg border border-blue-500/40 bg-blue-500/10 hover:bg-blue-500/20 text-blue-700 dark:text-blue-300 font-medium transition-all shrink-0 flex items-center gap-1.5"
          >
            <Briefcase className="w-3 h-3 text-blue-500" /> Corporate Gala (250 Guests)
          </button>
          <button
            onClick={loadEngagementPreset}
            className="px-2.5 py-1 rounded-lg border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-medium transition-all shrink-0 flex items-center gap-1.5"
          >
            <Sparkles className="w-3 h-3 text-emerald-500" /> Engagement (150 Guests)
          </button>
        </div>

        {/* Step Indicator Tabs */}
        <div className="grid grid-cols-4 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs">
          <button
            onClick={() => setStep(1)}
            className={`py-3 px-2 sm:px-4 text-center font-semibold border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              step === 1
                ? 'border-primary text-primary bg-primary/5'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-[11px] font-bold">1</span>
            <span className="hidden sm:inline">Event & Hosts</span>
          </button>

          <button
            onClick={() => setStep(2)}
            className={`py-3 px-2 sm:px-4 text-center font-semibold border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              step === 2
                ? 'border-primary text-primary bg-primary/5'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-[11px] font-bold">2</span>
            <span className="hidden sm:inline">Ceremonies ({formData.functions.length})</span>
          </button>

          <button
            onClick={() => setStep(3)}
            className={`py-3 px-2 sm:px-4 text-center font-semibold border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              step === 3
                ? 'border-primary text-primary bg-primary/5'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-[11px] font-bold">3</span>
            <span className="hidden sm:inline">Catering & Seating</span>
          </button>

          <button
            onClick={() => setStep(4)}
            className={`py-3 px-2 sm:px-4 text-center font-semibold border-b-2 transition-all flex items-center justify-center gap-1.5 ${
              step === 4
                ? 'border-primary text-primary bg-primary/5'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-[11px] font-bold">4</span>
            <span className="hidden sm:inline">Review & Launch</span>
          </button>
        </div>

        {/* Wizard Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5">
          {/* Success Banner */}
          {successMessage && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-200 text-sm font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* STEP 1: EVENT & HOST DETAILS */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wide">
                    Event Title / Celebration Name *
                  </label>
                  <Input
                    value={formData.eventName}
                    onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
                    placeholder="e.g. Aditya & Priya's Grand Wedding"
                    className="font-medium text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wide">
                    Event Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                    className="w-full h-10 px-3 rounded-lg border bg-background text-sm font-medium outline-none"
                  >
                    <option value="wedding">💍 Indian Wedding</option>
                    <option value="reception">🎉 Grand Reception</option>
                    <option value="engagement">💍 Engagement Ceremony</option>
                    <option value="birthday">🎂 Birthday Celebration</option>
                    <option value="anniversary">🥂 Wedding Anniversary</option>
                    <option value="corporate">💼 Corporate Summit & Gala</option>
                    <option value="religious">🕉️ Religious / Housewarming</option>
                    <option value="other">✨ Custom Celebration</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wide">
                    Host Names (Appears on Card) *
                  </label>
                  <Input
                    value={formData.hostNames}
                    onChange={(e) => setFormData({ ...formData, hostNames: e.target.value })}
                    placeholder="e.g. Dr. Ramesh & Sunita Sharma"
                    className="font-medium text-sm"
                  />
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wide">
                    Primary Venue Name *
                  </label>
                  <Input
                    value={formData.venueName}
                    onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
                    placeholder="e.g. The Leela Palace & Royal Heritage Lawns"
                    className="font-medium text-sm"
                  />
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wide">
                    Full Venue Address *
                  </label>
                  <Input
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="e.g. Diplomatic Enclave, Chanakyapuri, New Delhi"
                    className="font-medium text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wide">
                    Start Date *
                  </label>
                  <Input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="font-medium text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wide">
                    End Date *
                  </label>
                  <Input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="font-medium text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wide">
                    Organizer WhatsApp (RSVP Broadcasts) *
                  </label>
                  <Input
                    value={formData.contactWhatsApp}
                    onChange={(e) => setFormData({ ...formData, contactWhatsApp: e.target.value })}
                    placeholder="e.g. +919876543210"
                    className="font-medium text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wide">
                    Dress Code / Theme
                  </label>
                  <Input
                    value={formData.dressCode || ''}
                    onChange={(e) => setFormData({ ...formData, dressCode: e.target.value })}
                    placeholder="e.g. Royal Festive Traditional / Silk Sherwani"
                    className="font-medium text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: CEREMONIES & MULTI-DAY FUNCTIONS */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-foreground">
                    Ceremonies & Multi-Day Functions
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Add separate sub-events for each ceremony with specific dates, times, and venues.
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleAddFunction}
                  className="gap-1.5 text-xs font-bold"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Ceremony
                </Button>
              </div>

              <div className="space-y-3">
                {formData.functions.map((fn, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border bg-muted/20 dark:bg-zinc-800/40 space-y-3 relative"
                  >
                    <div className="flex items-center justify-between gap-2 border-b pb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <input
                          type="text"
                          value={fn.name}
                          onChange={(e) => handleUpdateFunction(idx, { name: e.target.value })}
                          className="font-bold text-sm bg-transparent border-b border-dashed border-primary/40 focus:border-primary outline-none px-1 text-foreground"
                          placeholder="Ceremony Name (e.g. Sangeet)"
                        />
                      </div>

                      {formData.functions.length > 1 && (
                        <button
                          onClick={() => handleRemoveFunction(idx)}
                          className="text-zinc-400 hover:text-rose-500 transition-colors p-1"
                          title="Remove Ceremony"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 text-xs">
                      <div>
                        <label className="text-[10px] font-bold text-muted-foreground uppercase">Date</label>
                        <Input
                          type="date"
                          value={fn.date}
                          onChange={(e) => handleUpdateFunction(idx, { date: e.target.value })}
                          className="h-8 text-xs font-medium mt-0.5"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-bold text-muted-foreground uppercase">Start Time</label>
                        <Input
                          type="time"
                          value={fn.start_time}
                          onChange={(e) => handleUpdateFunction(idx, { start_time: e.target.value })}
                          className="h-8 text-xs font-medium mt-0.5"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-bold text-muted-foreground uppercase">End Time</label>
                        <Input
                          type="time"
                          value={fn.end_time}
                          onChange={(e) => handleUpdateFunction(idx, { end_time: e.target.value })}
                          className="h-8 text-xs font-medium mt-0.5"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-bold text-muted-foreground uppercase">Venue / Hall</label>
                        <Input
                          value={fn.venue_name}
                          onChange={(e) => handleUpdateFunction(idx, { venue_name: e.target.value })}
                          placeholder="e.g. Grand Ballroom"
                          className="h-8 text-xs font-medium mt-0.5"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: CATERING & SEATING */}
          {step === 3 && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wide">
                    Expected Total Guest Capacity *
                  </label>
                  <Input
                    type="number"
                    min={10}
                    max={5000}
                    value={formData.guestCapacity}
                    onChange={(e) => setFormData({ ...formData, guestCapacity: parseInt(e.target.value) || 100 })}
                    className="font-medium text-sm"
                  />
                  <p className="text-[11px] text-muted-foreground">
                    Seating tables and catering dish portions will be automatically scaled to this count.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wide">
                    Catering Safety Buffer % *
                  </label>
                  <select
                    value={formData.cateringBufferPercentage ?? 10}
                    onChange={(e) => setFormData({ ...formData, cateringBufferPercentage: parseInt(e.target.value) || 10 })}
                    className="w-full h-10 px-3 rounded-lg border bg-background text-sm font-medium outline-none"
                  >
                    <option value={5}>5% Buffer (Tight RSVP confirmation)</option>
                    <option value={10}>10% Buffer (Industry Standard Recommended)</option>
                    <option value={15}>15% Buffer (Generous Indian Wedding Buffer)</option>
                    <option value={20}>20% Buffer (High Unannounced Guest Count)</option>
                  </select>
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wide">
                    Cuisine Style *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, cuisineStyle: 'north_indian' })}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        formData.cuisineStyle === 'north_indian'
                          ? 'border-amber-500 bg-amber-500/10 text-foreground shadow-sm'
                          : 'border-border/60 hover:border-border text-muted-foreground'
                      }`}
                    >
                      <p className="font-bold text-xs text-foreground">🍛 North Indian Royal</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">Paneer Tikka, Dal Bukhara, Shahi Gravy, Biryani, Gulab Jamun</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, cuisineStyle: 'south_indian' })}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        formData.cuisineStyle === 'south_indian'
                          ? 'border-amber-500 bg-amber-500/10 text-foreground shadow-sm'
                          : 'border-border/60 hover:border-border text-muted-foreground'
                      }`}
                    >
                      <p className="font-bold text-xs text-foreground">🥥 South Indian Feast</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">Medu Vada, Bisi Bele Bath, Paneer Chettinad, Elaneer Payasam</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, cuisineStyle: 'continental' })}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        formData.cuisineStyle === 'continental'
                          ? 'border-amber-500 bg-amber-500/10 text-foreground shadow-sm'
                          : 'border-border/60 hover:border-border text-muted-foreground'
                      }`}
                    >
                      <p className="font-bold text-xs text-foreground">🍝 Continental & Global</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">Bruschetta, Herb Risotto, Penne Arrabiata, Salmon, Tiramisu</p>
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wide">
                    Dietary Options to Offer Guests *
                  </label>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => toggleDietary('veg')}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all flex items-center gap-1.5 ${
                        formData.dietaryPreferences.includes('veg')
                          ? 'border-emerald-500 bg-emerald-500/20 text-emerald-800 dark:text-emerald-200'
                          : 'border-border text-muted-foreground'
                      }`}
                    >
                      🌱 Pure Vegetarian {formData.dietaryPreferences.includes('veg') && '✓'}
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleDietary('non_veg')}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all flex items-center gap-1.5 ${
                        formData.dietaryPreferences.includes('non_veg')
                          ? 'border-rose-500 bg-rose-500/20 text-rose-800 dark:text-rose-200'
                          : 'border-border text-muted-foreground'
                      }`}
                    >
                      🍗 Non-Vegetarian {formData.dietaryPreferences.includes('non_veg') && '✓'}
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleDietary('jain')}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all flex items-center gap-1.5 ${
                        formData.dietaryPreferences.includes('jain')
                          ? 'border-amber-500 bg-amber-500/20 text-amber-800 dark:text-amber-200'
                          : 'border-border text-muted-foreground'
                      }`}
                    >
                      🌾 Jain (No Root Veg) {formData.dietaryPreferences.includes('jain') && '✓'}
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleDietary('vegan')}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all flex items-center gap-1.5 ${
                        formData.dietaryPreferences.includes('vegan')
                          ? 'border-teal-500 bg-teal-500/20 text-teal-800 dark:text-teal-200'
                          : 'border-border text-muted-foreground'
                      }`}
                    >
                      🥑 Vegan {formData.dietaryPreferences.includes('vegan') && '✓'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: REVIEW & POPULATE */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/5 space-y-3">
                <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  What will be automatically generated from your information:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg border bg-background flex items-center gap-2.5">
                    <CalendarDays className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <span className="font-bold text-foreground">Event & {formData.functions.length} Ceremonies</span>
                      <p className="text-[11px] text-muted-foreground">{formData.eventName} ({formData.startDate})</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg border bg-background flex items-center gap-2.5">
                    <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
                    <div>
                      <span className="font-bold text-foreground">Personalized Digital Card</span>
                      <p className="text-[11px] text-muted-foreground">Hosts: {formData.hostNames}</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg border bg-background flex items-center gap-2.5">
                    <Clock className="w-5 h-5 text-blue-500 shrink-0" />
                    <div>
                      <span className="font-bold text-foreground">3 Arrival Time Slots</span>
                      <p className="text-[11px] text-muted-foreground">Evenly scaled for {formData.guestCapacity} guests</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg border bg-background flex items-center gap-2.5">
                    <UtensilsCrossed className="w-5 h-5 text-orange-500 shrink-0" />
                    <div>
                      <span className="font-bold text-foreground">Custom Catering Menu</span>
                      <p className="text-[11px] text-muted-foreground">
                        {formData.cuisineStyle.replace('_', ' ')} dishes + {formData.cateringBufferPercentage}% buffer
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg border bg-background flex items-center gap-2.5">
                    <Armchair className="w-5 h-5 text-indigo-500 shrink-0" />
                    <div>
                      <span className="font-bold text-foreground">
                        {Math.max(4, Math.min(16, Math.ceil(formData.guestCapacity / 8)))} Seating Tables
                      </span>
                      <p className="text-[11px] text-muted-foreground">VIP Dias + Family Tables on 2D floorplan</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg border bg-background flex items-center gap-2.5">
                    <QrCode className="w-5 h-5 text-emerald-500 shrink-0" />
                    <div>
                      <span className="font-bold text-foreground">Guest Passes & WhatsApp Links</span>
                      <p className="text-[11px] text-muted-foreground">Secure tokens & QR Passes ready to test</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Starter Guests Options */}
              <div className="space-y-2 border-t pt-3">
                <label className="text-xs font-bold text-foreground uppercase tracking-wide">
                  Starter Guest Passes Option:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, starterGuestsOption: 'realistic_sample' })}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      formData.starterGuestsOption === 'realistic_sample'
                        ? 'border-emerald-500 bg-emerald-500/10 text-foreground ring-1 ring-emerald-500'
                        : 'border-border text-muted-foreground hover:border-border/80'
                    }`}
                  >
                    <p className="font-bold text-xs text-foreground flex items-center gap-1.5">
                      <span>🎟️</span> Generate 8 Starter Families (Recommended)
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-1">
                      Includes 8 families with working WhatsApp links, unique tokens, and gate QR passes ready to scan in the check-in scanner immediately.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, starterGuestsOption: 'empty' })}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      formData.starterGuestsOption === 'empty'
                        ? 'border-primary bg-primary/10 text-foreground ring-1 ring-primary'
                        : 'border-border text-muted-foreground hover:border-border/80'
                    }`}
                  >
                    <p className="font-bold text-xs text-foreground flex items-center gap-1.5">
                      <span>📋</span> Start with 0 Guests
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-1">
                      Start with an empty guest roster. You can add your guests manually or import them via CSV/Excel spreadsheet later.
                    </p>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Wizard Bottom Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/70 flex items-center justify-between gap-3">
          {step > 1 ? (
            <Button
              size="sm"
              variant="outline"
              onClick={() => setStep((s) => (s - 1) as any)}
              className="gap-1.5 text-xs font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </Button>
          ) : (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setSetupWizardOpen(false)}
              className="text-xs text-muted-foreground"
            >
              Cancel
            </Button>
          )}

          <div className="flex items-center gap-2">
            {step < 4 ? (
              <Button
                size="sm"
                variant="default"
                onClick={() => setStep((s) => (s + 1) as any)}
                className="gap-1.5 text-xs font-bold"
              >
                Next Step <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            ) : (
              <Button
                size="sm"
                variant="gold"
                onClick={handlePopulateEverything}
                className="gap-2 text-xs font-black shadow-lg hover:shadow-xl transition-all"
              >
                <Sparkles className="w-4 h-4" /> 🚀 Populate Everything & Launch Event
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
