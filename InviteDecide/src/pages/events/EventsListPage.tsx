import React, { useState } from 'react';
import { useAppStore } from '@/stores/useAppStore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog } from '@/components/ui/dialog';
import {
  CalendarDays,
  Plus,
  MapPin,
  Clock,
  Sparkles,
  Phone,
  MessageCircle,
  ExternalLink,
  Edit,
  CheckCircle2,
} from 'lucide-react';
import { EventFunction } from '@/types';

export const EventsListPage: React.FC = () => {
  const { event, updateEventDetails, updateEventSettings, setSetupWizardOpen } = useAppStore();
  const [addFunctionOpen, setAddFunctionOpen] = useState(false);
  const [fnName, setFnName] = useState('');
  const [fnDate, setFnDate] = useState('2026-11-20');
  const [fnStart, setFnStart] = useState('18:00');
  const [fnEnd, setFnEnd] = useState('22:00');
  const [fnVenue, setFnVenue] = useState('Palace Courtyard');
  const [fnDress, setFnDress] = useState('Festive Traditional');

  const handleCreateFunction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fnName.trim()) return;

    const newFn: EventFunction = {
      id: `fn-${Date.now()}`,
      event_id: event.id,
      name: fnName.trim(),
      date: fnDate,
      start_time: fnStart,
      end_time: fnEnd,
      venue_name: fnVenue,
      dress_code: fnDress,
    };

    updateEventDetails({
      functions: [...event.functions, newFn],
    });

    setFnName('');
    setAddFunctionOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Event Details & Functions</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Configure multi-day wedding functions, venues, host details, and operational rules.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="gold"
            size="sm"
            onClick={() => setSetupWizardOpen(true)}
            className="gap-1.5 text-xs font-bold shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" /> Setup Wizard (Populate All)
          </Button>

          <Button variant="default" size="sm" onClick={() => setAddFunctionOpen(true)} className="gap-1.5 text-xs">
            <Plus className="w-4 h-4" /> Add Event Function
          </Button>
        </div>
      </div>

      {/* Main Event Overview Card */}
      <Card className="overflow-hidden">
        <div className="h-48 relative overflow-hidden bg-zinc-900">
          <img
            src={event.cover_image}
            alt={event.name}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6">
            <div className="text-white space-y-1">
              <Badge variant="gold" className="text-xs uppercase mb-1">
                {event.category}
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display">{event.name}</h2>
              <p className="text-xs text-zinc-300">
                Hosts: {event.host_names}
              </p>
            </div>
          </div>
        </div>

        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-3 rounded-xl border bg-muted/30">
              <span className="text-muted-foreground uppercase font-bold text-[10px]">Primary Venue</span>
              <p className="font-semibold text-foreground text-sm mt-0.5">{event.venue_name}</p>
              <p className="text-muted-foreground text-[11px] mt-0.5">{event.address}</p>
            </div>

            <div className="p-3 rounded-xl border bg-muted/30">
              <span className="text-muted-foreground uppercase font-bold text-[10px]">Dates & Timeline</span>
              <p className="font-semibold text-foreground text-sm mt-0.5">
                {event.start_date} to {event.end_date}
              </p>
              <p className="text-primary font-medium text-[11px] mt-0.5">
                RSVP Deadline: {new Date(event.rsvp_deadline || '').toLocaleDateString()}
              </p>
            </div>

            <div className="p-3 rounded-xl border bg-muted/30">
              <span className="text-muted-foreground uppercase font-bold text-[10px]">Capacity & Dress Code</span>
              <p className="font-semibold text-foreground text-sm mt-0.5">{event.guest_capacity} Invited Guests</p>
              <p className="text-muted-foreground text-[11px] mt-0.5">{event.dress_code}</p>
            </div>

            <div className="p-3 rounded-xl border bg-muted/30">
              <span className="text-muted-foreground uppercase font-bold text-[10px]">Contact Channels</span>
              <p className="font-semibold text-foreground text-sm mt-0.5">{event.contact_phone}</p>
              <p className="text-emerald-600 font-medium text-[11px] mt-0.5 flex items-center gap-1">
                <MessageCircle className="w-3 h-3" /> {event.contact_whatsapp}
              </p>
            </div>
          </div>

          {/* Event Operational Settings */}
          <div className="border-t pt-4">
            <h3 className="text-sm font-bold text-foreground mb-3">Event Automation Rules & Settings</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              <label className="flex items-center gap-2 p-3 rounded-lg border bg-card cursor-pointer">
                <input
                  type="checkbox"
                  checked={event.settings.allow_family_rsvp}
                  onChange={(e) => updateEventSettings({ allow_family_rsvp: e.target.checked })}
                />
                <div>
                  <span className="font-semibold">Allow Family RSVPs</span>
                  <p className="text-[10px] text-muted-foreground">Household representative can respond for all</p>
                </div>
              </label>

              <label className="flex items-center gap-2 p-3 rounded-lg border bg-card cursor-pointer">
                <input
                  type="checkbox"
                  checked={event.settings.require_food_selection}
                  onChange={(e) => updateEventSettings({ require_food_selection: e.target.checked })}
                />
                <div>
                  <span className="font-semibold">Require Menu Selections</span>
                  <p className="text-[10px] text-muted-foreground">Guests select dishes during RSVP</p>
                </div>
              </label>

              <label className="flex items-center gap-2 p-3 rounded-lg border bg-card cursor-pointer">
                <input
                  type="checkbox"
                  checked={event.settings.enable_time_slots}
                  onChange={(e) => updateEventSettings({ enable_time_slots: e.target.checked })}
                />
                <div>
                  <span className="font-semibold">Arrival Time Slots</span>
                  <p className="text-[10px] text-muted-foreground">Balances arrival crowds into hourly slots</p>
                </div>
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Multi-Function Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Scheduled Wedding Functions ({event.functions.length})</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {event.functions.map((fn, idx) => (
            <Card key={fn.id} className="relative overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                      {idx + 1}
                    </span>
                    <CardTitle className="text-base font-bold">{fn.name}</CardTitle>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {fn.date}
                  </Badge>
                </div>
                <CardDescription className="text-xs">
                  {fn.description || 'Traditional ceremony and celebration'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span>
                    {fn.start_time} to {fn.end_time}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span>{fn.venue_name}</span>
                </div>
                {fn.dress_code && (
                  <div className="pt-2 border-t text-[11px] text-amber-700 dark:text-amber-300 font-medium">
                    Dress Code: {fn.dress_code}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Add Function Modal */}
      <Dialog
        open={addFunctionOpen}
        onOpenChange={setAddFunctionOpen}
        title="Add Event Function"
        description="Add a ceremony, ritual, or party under this event."
      >
        <form onSubmit={handleCreateFunction} className="space-y-4 text-xs">
          <div>
            <label className="font-semibold text-foreground">Function Name *</label>
            <Input
              required
              placeholder="e.g. Sangeet & Cocktail Night"
              value={fnName}
              onChange={(e) => setFnName(e.target.value)}
              className="mt-1 text-xs"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-semibold text-foreground">Date</label>
              <Input
                type="date"
                value={fnDate}
                onChange={(e) => setFnDate(e.target.value)}
                className="mt-1 text-xs"
              />
            </div>

            <div>
              <label className="font-semibold text-foreground">Venue</label>
              <Input
                value={fnVenue}
                onChange={(e) => setFnVenue(e.target.value)}
                placeholder="e.g. Grand Ballroom"
                className="mt-1 text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-semibold text-foreground">Start Time</label>
              <Input
                type="time"
                value={fnStart}
                onChange={(e) => setFnStart(e.target.value)}
                className="mt-1 text-xs"
              />
            </div>

            <div>
              <label className="font-semibold text-foreground">End Time</label>
              <Input
                type="time"
                value={fnEnd}
                onChange={(e) => setFnEnd(e.target.value)}
                className="mt-1 text-xs"
              />
            </div>
          </div>

          <div>
            <label className="font-semibold text-foreground">Dress Code</label>
            <Input
              value={fnDress}
              onChange={(e) => setFnDress(e.target.value)}
              placeholder="e.g. Traditional Royal Silk"
              className="mt-1 text-xs"
            />
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <Button type="button" variant="outline" size="sm" onClick={() => setAddFunctionOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="default" size="sm">
              Save Function
            </Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};
