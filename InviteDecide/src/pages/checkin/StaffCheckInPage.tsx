import React, { useState } from 'react';
import { useAppStore } from '@/stores/useAppStore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { QRScannerModal } from '@/components/qr/QRScannerModal';
import {
  QrCode,
  Search,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  Armchair,
  Users,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react';

export const StaffCheckInPage: React.FC = () => {
  const {
    event,
    attendees,
    qrPasses,
    checkinLogs,
    validateAndCheckIn,
    venueLayout,
  } = useAppStore();

  const [scannerOpen, setScannerOpen] = useState(false);
  const [manualQuery, setManualQuery] = useState('');
  const [lastScanResult, setLastScanResult] = useState<{
    success: boolean;
    guestName?: string;
    error?: string;
    alreadyCheckedIn?: boolean;
    passCode?: string;
    tableSeatInfo?: string;
  } | null>(null);

  const checkedInCount = attendees.filter((a) => a.checked_in).length;
  const totalCount = attendees.length;
  const checkinPercentage = Math.round((checkedInCount / (totalCount || 1)) * 100);

  const handleScanSuccess = (decodedToken: string) => {
    const res = validateAndCheckIn(decodedToken, undefined, 'Staff Gate Operator 1');

    if (res.success) {
      // Find table/seat info if allocated
      const attendee = attendees.find((a) => a.full_name === res.attendeeName);
      let tableInfo = 'Open Seating / Unallocated';
      if (attendee?.seat_id) {
        venueLayout.tables.forEach((t) => {
          const seat = t.seats.find((s) => s.id === attendee.seat_id);
          if (seat) {
            tableInfo = `${t.name} (Seat ${seat.seat_number})`;
          }
        });
      }

      setLastScanResult({
        success: true,
        guestName: res.attendeeName,
        passCode: res.pass?.display_code,
        tableSeatInfo: tableInfo,
      });
    } else {
      setLastScanResult({
        success: false,
        error: res.error,
        alreadyCheckedIn: res.alreadyCheckedIn,
      });
    }
  };

  const handleManualSearchCheckIn = (attendeeId: string) => {
    const att = attendees.find((a) => a.id === attendeeId);
    if (!att) return;

    // Find pass
    const pass = qrPasses.find((p) => p.rsvp_id === att.rsvp_id);
    const token = pass?.display_code || 'MANUAL-OVERRIDE';

    const res = validateAndCheckIn(token, attendeeId, 'Manual Search Staff');

    let tableInfo = 'Open Seating / Unallocated';
    if (att.seat_id) {
      venueLayout.tables.forEach((t) => {
        const seat = t.seats.find((s) => s.id === att.seat_id);
        if (seat) {
          tableInfo = `${t.name} (Seat ${seat.seat_number})`;
        }
      });
    }

    if (res.success) {
      setLastScanResult({
        success: true,
        guestName: att.full_name,
        passCode: pass?.display_code,
        tableSeatInfo: tableInfo,
      });
      setManualQuery('');
    } else {
      setLastScanResult({
        success: false,
        error: res.error,
        alreadyCheckedIn: res.alreadyCheckedIn,
      });
    }
  };

  // Filter attendees for manual lookup
  const searchResults = manualQuery.trim()
    ? attendees.filter(
        (a) =>
          a.full_name.toLowerCase().includes(manualQuery.toLowerCase()) ||
          (a.rsvp_id && a.rsvp_id.toLowerCase().includes(manualQuery.toLowerCase()))
      ).slice(0, 8)
    : [];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Mobile-Friendly Gate Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight">Event Entrance Gate Scanner</h1>
            <Badge variant="gold">Real-time Check-in</Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-0.5">
            {event.name} • Gate Entrance Verification
          </p>
        </div>

        <div>
          <Button
            variant="gold"
            size="lg"
            onClick={() => setScannerOpen(true)}
            className="w-full sm:w-auto gap-2 shadow-lg text-base font-bold"
          >
            <QrCode className="w-5 h-5" /> Launch Camera Scanner
          </Button>
        </div>
      </div>

      {/* Progress & Live Arrival Metrics */}
      <Card className="bg-gradient-to-r from-zinc-950 to-zinc-900 text-white border-zinc-800">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Overall Arrival Progress
              </span>
              <div className="text-3xl font-black mt-1 font-display">
                {checkedInCount} <span className="text-lg font-normal text-zinc-400">/ {totalCount} Checked In</span>
              </div>
            </div>

            <div className="text-right sm:text-right">
              <span className="text-2xl font-black text-amber-400 font-display">
                {checkinPercentage}%
              </span>
              <p className="text-xs text-zinc-400">Venue Capacity Filled</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 bg-zinc-800 rounded-full mt-4 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-rose-500 transition-all duration-500"
              style={{ width: `${checkinPercentage}%` }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Last Scan Result Alert Box */}
      {lastScanResult && (
        <Card
          className={`border-2 transition-all shadow-lg ${
            lastScanResult.success
              ? 'border-emerald-500 bg-emerald-500/10'
              : 'border-rose-500 bg-rose-500/10'
          }`}
        >
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              {lastScanResult.success ? (
                <div className="p-3 bg-emerald-500 text-white rounded-2xl shadow-md shrink-0">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
              ) : (
                <div className="p-3 bg-rose-500 text-white rounded-2xl shadow-md shrink-0">
                  <XCircle className="w-8 h-8" />
                </div>
              )}

              <div className="space-y-1">
                <h3
                  className={`text-xl font-bold ${
                    lastScanResult.success ? 'text-emerald-900 dark:text-emerald-200' : 'text-rose-900 dark:text-rose-200'
                  }`}
                >
                  {lastScanResult.success ? 'Entry Verified & Access Granted!' : 'Entry Rejected'}
                </h3>

                {lastScanResult.success ? (
                  <>
                    <p className="text-base font-semibold text-foreground">
                      Welcome, {lastScanResult.guestName} Ji
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1.5 pt-1">
                      <Armchair className="w-4 h-4 text-primary" />
                      <span>Allocated Seating: <strong>{lastScanResult.tableSeatInfo}</strong></span>
                    </p>
                  </>
                ) : (
                  <p className="text-sm text-rose-700 dark:text-rose-300 font-medium">
                    {lastScanResult.error}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Manual Guest Lookup Fallback */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-bold flex items-center gap-2">
            <Search className="w-4 h-4 text-primary" /> Manual Guest Lookup & Override
          </CardTitle>
          <CardDescription>
            Search by guest name to check them in if they do not have their phone or QR pass.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Type guest name (e.g. Rajesh, Vikram)..."
            value={manualQuery}
            onChange={(e) => setManualQuery(e.target.value)}
            className="text-sm"
          />

          {searchResults.length > 0 && (
            <div className="divide-y border rounded-xl overflow-hidden">
              {searchResults.map((att) => (
                <div
                  key={att.id}
                  className="p-3 flex items-center justify-between hover:bg-muted/50 transition-colors text-xs"
                >
                  <div>
                    <span className="font-bold text-sm text-foreground">{att.full_name}</span>
                    <div className="flex items-center gap-2 text-muted-foreground mt-0.5">
                      <span>{att.is_child ? 'Child' : 'Adult'}</span>
                      <span>•</span>
                      <span>{att.dietary_preference.toUpperCase()}</span>
                      {att.checked_in && (
                        <span className="text-emerald-600 font-semibold">• Already Checked In</span>
                      )}
                    </div>
                  </div>

                  <div>
                    {att.checked_in ? (
                      <Badge variant="success" className="text-[10px]">
                        Checked In
                      </Badge>
                    ) : (
                      <Button
                        size="sm"
                        variant="default"
                        onClick={() => handleManualSearchCheckIn(att.id)}
                        className="text-xs"
                      >
                        Check In Now
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Live Recent Check-in Logs */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-bold flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" /> Recent Gate Arrival Activity
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y text-xs">
            {checkinLogs.slice(0, 10).map((log) => (
              <div key={log.id} className="p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <span className="font-semibold text-foreground text-sm">
                      {log.attendee_name || 'Guest Pass Scanned'}
                    </span>
                    <p className="text-[10px] text-muted-foreground">
                      Method: {log.scan_type} • Operator: {log.scanned_by}
                    </p>
                  </div>
                </div>

                <div className="text-right text-[11px] text-muted-foreground">
                  {new Date(log.timestamp).toLocaleTimeString()}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* QR Scanner Modal with Camera */}
      <QRScannerModal
        open={scannerOpen}
        onClose={() => setScannerOpen(false)}
        onScanSuccess={handleScanSuccess}
      />
    </div>
  );
};
