import React, { useState } from 'react';
import { useAppStore } from '@/modules/invitedecide/stores/useAppStore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/modules/invitedecide/components/ui/card';
import { Button } from '@/modules/invitedecide/components/ui/button';
import { Badge } from '@/modules/invitedecide/components/ui/badge';
import { Dialog } from '@/modules/invitedecide/components/ui/dialog';
import { exportToCSV } from '@/modules/invitedecide/utils/export';
import {
  Armchair,
  Wand2,
  Users,
  Crown,
  Accessibility,
  Download,
  Plus,
  CheckCircle2,
  AlertTriangle,
  Move,
} from 'lucide-react';
import { VenueTable, Attendee } from '@/modules/invitedecide/types';

export const SeatingStudioPage: React.FC = () => {
  const {
    venueLayout,
    attendees,
    allocateSeat,
    unallocateSeat,
    runAutoSeatingAllocation,
    updateTablePosition,
    event,
  } = useAppStore();

  const [selectedTableId, setSelectedTableId] = useState<string | null>(venueLayout.tables[0]?.id || null);
  const [selectedSeatId, setSelectedSeatId] = useState<string | null>(null);
  const [assignModalOpen, setAssignModalOpen] = useState(false);
  const [autoAllocateMessage, setAutoAllocateMessage] = useState<string | null>(null);

  const selectedTable = venueLayout.tables.find((t) => t.id === selectedTableId);

  // Unseated attendees
  const unseatedAttendees = attendees.filter((a) => !a.seat_id);

  const handleRunAutoAllocation = () => {
    const res = runAutoSeatingAllocation();
    setAutoAllocateMessage(res.message);
    setTimeout(() => setAutoAllocateMessage(null), 5000);
  };

  const handleSelectSeat = (seatId: string) => {
    setSelectedSeatId(seatId);
    setAssignModalOpen(true);
  };

  const handleAssignGuest = (attendeeId: string) => {
    if (!selectedSeatId) return;
    allocateSeat(selectedSeatId, attendeeId);
    setAssignModalOpen(false);
    setSelectedSeatId(null);
  };

  const handleExportSeatingCSV = () => {
    const seatingData: any[] = [];
    venueLayout.tables.forEach((t) => {
      t.seats.forEach((s) => {
        seatingData.push({
          'Table Name': t.name,
          'Table Shape': t.shape,
          'Seat Number': s.seat_number,
          'Guest Name': s.allocated_attendee_name || 'Unoccupied',
          'Is VIP Table': t.is_vip ? 'YES' : 'NO',
          'Accessible Seat': s.is_accessible ? 'YES' : 'NO',
        });
      });
    });
    exportToCSV(seatingData, `InviteDecide_Seating_Plan_${event.slug}`);
  };

  // Seating statistics
  let totalCapacity = 0;
  let totalAssigned = 0;
  venueLayout.tables.forEach((t) => {
    totalCapacity += t.seats.length;
    totalAssigned += t.seats.filter((s) => s.allocated_attendee_id).length;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Venue Seating Studio & Floor Plan</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            2D floor plan layout, automatic family-first seating allocator, and VIP zone management.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleExportSeatingCSV} className="gap-1.5 text-xs">
            <Download className="w-3.5 h-3.5" /> Export Seating Plan (CSV)
          </Button>

          <Button variant="gold" size="sm" onClick={handleRunAutoAllocation} className="gap-1.5 text-xs">
            <Wand2 className="w-3.5 h-3.5" /> Auto-Allocate Families
          </Button>
        </div>
      </div>

      {autoAllocateMessage && (
        <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/30 text-emerald-800 dark:text-emerald-200 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{autoAllocateMessage}</span>
        </div>
      )}

      {/* Capacity & Stats Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 rounded-xl border bg-card text-xs">
          <span className="text-muted-foreground uppercase font-bold text-[10px]">Total Venue Tables</span>
          <p className="text-lg font-bold mt-0.5">{venueLayout.tables.length} Tables</p>
        </div>
        <div className="p-3 rounded-xl border bg-card text-xs">
          <span className="text-muted-foreground uppercase font-bold text-[10px]">Total Available Seats</span>
          <p className="text-lg font-bold mt-0.5">{totalCapacity} Seats</p>
        </div>
        <div className="p-3 rounded-xl border bg-card text-xs">
          <span className="text-muted-foreground uppercase font-bold text-[10px]">Allocated Guests</span>
          <p className="text-lg font-bold mt-0.5 text-primary">{totalAssigned} Seated</p>
        </div>
        <div className="p-3 rounded-xl border bg-card text-xs">
          <span className="text-muted-foreground uppercase font-bold text-[10px]">Unseated Attendees</span>
          <p className="text-lg font-bold mt-0.5 text-amber-600">{unseatedAttendees.length} Pending</p>
        </div>
      </div>

      {/* Main Studio Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: 2D Venue Canvas */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="p-4 bg-zinc-950 text-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs">
              <span className="font-semibold text-zinc-300 flex items-center gap-2">
                <span>📍</span> {venueLayout.name} (Main Stage & Banquet Lawns)
              </span>
              <span className="text-[11px] text-zinc-400">Click any table to view and seat guests</span>
            </div>

            {/* Stage Representation */}
            <div className="w-3/4 mx-auto my-3 py-2 rounded-lg bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 text-center text-xs font-bold uppercase tracking-widest text-zinc-950 shadow-md">
              👑 ROYAL WEDDING MANDAP / MAIN STAGE
            </div>

            {/* Tables Grid Layout */}
            <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 max-h-[550px] overflow-y-auto">
              {venueLayout.tables.map((tbl) => {
                const isSelected = selectedTableId === tbl.id;
                const seatedCount = tbl.seats.filter((s) => s.allocated_attendee_id).length;
                const isFull = seatedCount >= tbl.capacity;

                return (
                  <div
                    key={tbl.id}
                    onClick={() => setSelectedTableId(tbl.id)}
                    className={`p-3 rounded-2xl cursor-pointer transition-all border flex flex-col items-center justify-between min-h-[140px] text-center ${
                      isSelected
                        ? 'border-amber-400 bg-amber-500/10 shadow-lg scale-102 ring-2 ring-amber-400/50'
                        : 'border-zinc-800 bg-zinc-900/80 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      {tbl.is_vip && <Crown className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />}
                      <span className="font-bold text-xs text-white truncate max-w-[120px]">{tbl.name}</span>
                    </div>

                    {/* Table Shape Graphical Display */}
                    <div
                      className={`my-2 flex items-center justify-center font-bold text-xs ${
                        tbl.shape === 'round'
                          ? 'w-14 h-14 rounded-full border-2 border-dashed border-amber-400/60 bg-amber-950/40 text-amber-200'
                          : 'w-20 h-12 rounded-lg border-2 border-dashed border-rose-400/60 bg-rose-950/40 text-rose-200'
                      }`}
                    >
                      {seatedCount} / {tbl.capacity}
                    </div>

                    <div className="text-[10px] text-zinc-400">
                      {isFull ? (
                        <span className="text-emerald-400 font-semibold">● Full Capacity</span>
                      ) : (
                        <span>{tbl.capacity - seatedCount} seats available</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Right Col: Selected Table Seat Allocator */}
        <div className="lg:col-span-1 space-y-4">
          {selectedTable ? (
            <Card className="p-4 space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <h3 className="font-bold text-base flex items-center gap-1.5">
                    {selectedTable.is_vip && <Crown className="w-4 h-4 text-amber-500 fill-amber-500" />}
                    {selectedTable.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Shape: <span className="capitalize">{selectedTable.shape}</span> • Capacity: {selectedTable.capacity} Seats
                  </p>
                </div>

                <Badge variant={selectedTable.is_vip ? 'gold' : 'secondary'} className="text-[10px]">
                  {selectedTable.category || 'General'}
                </Badge>
              </div>

              {/* Individual Seats in Table */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase">
                  Table Seats & Assigned Guests
                </p>

                {selectedTable.seats.map((seat) => (
                  <div
                    key={seat.id}
                    className="flex items-center justify-between p-2.5 rounded-lg border bg-muted/40 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-[10px]">
                        {seat.seat_number}
                      </div>
                      <div>
                        {seat.allocated_attendee_name ? (
                          <span className="font-semibold text-foreground">
                            {seat.allocated_attendee_name}
                          </span>
                        ) : (
                          <span className="text-muted-foreground italic">Vacant Seat</span>
                        )}
                      </div>
                    </div>

                    <div>
                      {seat.allocated_attendee_name ? (
                        <button
                          onClick={() => unallocateSeat(seat.id)}
                          className="text-[11px] text-red-500 hover:underline"
                        >
                          Vacate
                        </button>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleSelectSeat(seat.id)}
                          className="h-6 text-[10px] px-2"
                        >
                          Seat Guest
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ) : (
            <div className="rounded-xl border border-dashed p-6 text-center text-xs text-muted-foreground">
              Select a table from the floor plan to view and assign seats.
            </div>
          )}

          {/* Quick Unseated List */}
          <Card className="p-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-between">
              <span>Unseated Attendees ({unseatedAttendees.length})</span>
            </h4>
            <div className="max-h-48 overflow-y-auto divide-y text-xs">
              {unseatedAttendees.slice(0, 10).map((u) => (
                <div key={u.id} className="py-2 flex items-center justify-between">
                  <span className="font-medium">{u.full_name}</span>
                  <Badge variant="outline" className="text-[10px] py-0">
                    {u.dietary_preference}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Seat Assignment Modal */}
      <Dialog
        open={assignModalOpen}
        onOpenChange={setAssignModalOpen}
        title="Assign Attendee to Seat"
        description="Select an unseated confirmed attendee to assign to this seat."
      >
        <div className="space-y-3 max-h-72 overflow-y-auto">
          {unseatedAttendees.length === 0 ? (
            <p className="text-center text-xs text-muted-foreground py-4">
              All confirmed attendees are currently seated!
            </p>
          ) : (
            unseatedAttendees.slice(0, 30).map((u) => (
              <div
                key={u.id}
                onClick={() => handleAssignGuest(u.id)}
                className="p-2.5 rounded-lg border hover:bg-primary/5 hover:border-primary cursor-pointer flex items-center justify-between text-xs transition-colors"
              >
                <div>
                  <p className="font-semibold text-foreground">{u.full_name}</p>
                  <p className="text-[10px] text-muted-foreground">
                    {u.is_child ? 'Child Guest' : 'Adult'} • {u.dietary_preference.toUpperCase()}
                  </p>
                </div>
                <Button size="sm" variant="outline" className="text-[10px] h-7">
                  Assign
                </Button>
              </div>
            ))
          )}
        </div>
      </Dialog>
    </div>
  );
};
