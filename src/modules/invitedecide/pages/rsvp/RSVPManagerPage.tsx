import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppStore } from '@/modules/invitedecide/stores/useAppStore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/modules/invitedecide/components/ui/card';
import { Button } from '@/modules/invitedecide/components/ui/button';
import { Input } from '@/modules/invitedecide/components/ui/input';
import { Badge } from '@/modules/invitedecide/components/ui/badge';
import { Dialog } from '@/modules/invitedecide/components/ui/dialog';
import {
  Clock,
  CheckCircle2,
  XCircle,
  Users,
  Plus,
  AlertTriangle,
  Download,
  Calendar,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import { exportToCSV } from '@/modules/invitedecide/utils/export';

export const RSVPManagerPage: React.FC = () => {
  const { rsvps, timeSlots, attendees, event } = useAppStore();
  const [activeTab, setActiveTab] = useState<'slots' | 'responses'>('slots');
  const [filterStatus, setFilterStatus] = useState<string>('ALL');

  const confirmedCount = rsvps.filter((r) => r.status === 'confirmed').length;
  const declinedCount = rsvps.filter((r) => r.status === 'declined').length;
  const undecidedCount = rsvps.filter((r) => r.status === 'undecided').length;

  const totalAttendees = attendees.length;
  const adultCount = attendees.filter((a) => !a.is_child).length;
  const childCount = attendees.filter((a) => a.is_child).length;

  const filteredRSVPs = rsvps.filter((r) => {
    if (filterStatus === 'ALL') return true;
    return r.status.toUpperCase() === filterStatus.toUpperCase();
  });

  const handleExportRSVPs = () => {
    const csvData = rsvps.map((r) => {
      const slot = timeSlots.find((s) => s.id === r.time_slot_id);
      return {
        'RSVP ID': r.id,
        Status: r.status,
        'Total Attendees': r.total_attendees,
        Adults: r.adult_count,
        Children: r.child_count,
        'Arrival Date': r.arrival_date || '',
        'Time Slot': slot ? `${slot.start_time} - ${slot.end_time}` : 'Unselected',
        'Dietary Notes': r.dietary_notes || '',
        'Special Requests': r.special_requests || '',
        'Response Time': r.responded_at,
      };
    });
    exportToCSV(csvData, `InviteDecide_RSVP_List_${event.slug}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">RSVP & Arrival Time Slots</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Monitor confirmed attendee counts, dietary notes, and hourly entrance crowd distribution.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/dashboard">
            <Button variant="ghost" size="sm" className="gap-1.5 text-xs text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-3.5 h-3.5" /> Dashboard
            </Button>
          </Link>
          <Button variant="outline" size="sm" onClick={handleExportRSVPs} className="gap-1.5 text-xs">
            <Download className="w-3.5 h-3.5" /> Export RSVPs (CSV)
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase">Confirmed Families</span>
            <div className="text-2xl font-bold text-emerald-600 mt-1">{confirmedCount}</div>
            <p className="text-[11px] text-muted-foreground mt-0.5">Accepted Invitations</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase">Total Attendees</span>
            <div className="text-2xl font-bold mt-1">{totalAttendees}</div>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              {adultCount} Adults • {childCount} Kids
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase">Declined With Regrets</span>
            <div className="text-2xl font-bold text-rose-600 mt-1">{declinedCount}</div>
            <p className="text-[11px] text-muted-foreground mt-0.5">Cannot Attend</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase">Arrival Slots</span>
            <div className="text-2xl font-bold text-primary mt-1">{timeSlots.length} Slots</div>
            <p className="text-[11px] text-muted-foreground mt-0.5">Crowd Load Balanced</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b pb-2">
        <button
          onClick={() => setActiveTab('slots')}
          className={`px-4 py-2 text-sm font-semibold border-b-2 -mb-2 transition-all ${
            activeTab === 'slots'
              ? 'border-primary text-primary'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          Arrival Time Slots & Capacity
        </button>
        <button
          onClick={() => setActiveTab('responses')}
          className={`px-4 py-2 text-sm font-semibold border-b-2 -mb-2 transition-all ${
            activeTab === 'responses'
              ? 'border-primary text-primary'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          Guest Responses ({rsvps.length})
        </button>
      </div>

      {activeTab === 'slots' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {timeSlots.map((slot) => {
            const occupancyPct = Math.round((slot.booked_count / (slot.capacity || 1)) * 100);
            const isFull = slot.booked_count >= slot.capacity;

            return (
              <Card key={slot.id} className="relative overflow-hidden">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base">
                          {slot.start_time} - {slot.end_time}
                        </h3>
                        <p className="text-xs text-muted-foreground">Date: {slot.slot_date}</p>
                      </div>
                    </div>

                    <Badge variant={isFull ? 'destructive' : 'gold'}>
                      {isFull ? 'Full Capacity' : 'Booking Open'}
                    </Badge>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs">
                    <span className="font-semibold text-foreground">
                      Booked: {slot.booked_count} Guests
                    </span>
                    <span className="text-muted-foreground">
                      Max: {slot.capacity} (+{slot.buffer_capacity} Buffer)
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2.5 bg-muted rounded-full mt-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        occupancyPct > 90 ? 'bg-rose-500' : 'bg-primary'
                      }`}
                      style={{ width: `${Math.min(occupancyPct, 100)}%` }}
                    />
                  </div>

                  <div className="mt-3 text-[11px] text-muted-foreground flex items-center justify-between">
                    <span>Available Capacity: {Math.max(0, slot.capacity - slot.booked_count)}</span>
                    <span className="font-mono">{occupancyPct}% full</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-muted/50 border-b text-muted-foreground uppercase font-semibold">
                  <tr>
                    <th className="p-3.5">Response ID</th>
                    <th className="p-3.5">Status</th>
                    <th className="p-3.5">Attendees</th>
                    <th className="p-3.5">Assigned Time Slot</th>
                    <th className="p-3.5">Dietary / Special Needs</th>
                    <th className="p-3.5">Submitted On</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredRSVPs.slice(0, 30).map((r) => {
                    const slot = timeSlots.find((s) => s.id === r.time_slot_id);

                    return (
                      <tr key={r.id} className="hover:bg-muted/30">
                        <td className="p-3.5 font-mono text-[11px]">{r.id}</td>
                        <td className="p-3.5">
                          <Badge
                            variant={
                              r.status === 'confirmed'
                                ? 'success'
                                : r.status === 'declined'
                                ? 'destructive'
                                : 'secondary'
                            }
                            className="text-[10px]"
                          >
                            {r.status}
                          </Badge>
                        </td>
                        <td className="p-3.5 font-semibold">
                          {r.total_attendees} ({r.adult_count} Adults, {r.child_count} Kids)
                        </td>
                        <td className="p-3.5 text-muted-foreground">
                          {slot ? `${slot.start_time} - ${slot.end_time}` : 'None'}
                        </td>
                        <td className="p-3.5 text-muted-foreground max-w-xs truncate">
                          {r.dietary_notes || r.special_requests || 'Standard'}
                        </td>
                        <td className="p-3.5 text-muted-foreground">
                          {new Date(r.responded_at).toLocaleDateString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
