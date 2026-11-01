import React from 'react';
import { useAppStore } from '@/modules/invitedecide/stores/useAppStore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/modules/invitedecide/components/ui/card';
import { Button } from '@/modules/invitedecide/components/ui/button';
import { exportToCSV, exportToExcel, generateCateringOrderPDF } from '@/modules/invitedecide/utils/export';
import {
  FileSpreadsheet,
  Download,
  FileText,
  Users,
  UtensilsCrossed,
  Armchair,
  QrCode,
  Clock,
  DollarSign,
} from 'lucide-react';

export const ReportsPage: React.FC = () => {
  const {
    event,
    guests,
    invitations,
    rsvps,
    attendees,
    timeSlots,
    venueLayout,
    qrPasses,
    checkinLogs,
    getCateringCalculations,
  } = useAppStore();

  const calculations = getCateringCalculations();

  // Export 1: Complete Guest & Invitation Directory
  const handleExportGuests = () => {
    const data = guests.map((g) => ({
      'Guest ID': g.id,
      'Full Name': g.full_name,
      'Family Title': g.family_name || '',
      'WhatsApp Phone': g.whatsapp_number,
      Category: g.category,
      Dietary: g.dietary_preference,
      'Invitation Code': g.invitation_code,
      Status: g.invitation_status,
      'Invitation URL': `${window.location.origin}${window.location.pathname}#/invite/${g.invitation_token}`,
    }));
    exportToCSV(data, `InviteDecide_Guest_Directory_${event.slug}`);
  };

  // Export 2: RSVP & Attendees Report
  const handleExportAttendees = () => {
    const data = attendees.map((a) => ({
      'Attendee ID': a.id,
      'Full Name': a.full_name,
      Classification: a.is_child ? 'Child' : 'Adult',
      Dietary: a.dietary_preference,
      'Checked In': a.checked_in ? 'YES' : 'NO',
      'Check-in Time': a.checked_in_at || '',
      'Table ID': a.table_id || 'Unallocated',
      'Seat ID': a.seat_id || 'Unallocated',
    }));
    exportToCSV(data, `InviteDecide_Attendee_Report_${event.slug}`);
  };

  // Export 3: Catering Preparation Sheet
  const handleExportCatering = () => {
    const formatted = calculations.map((c) => ({
      dishName: c.menu_item?.name || '',
      category: 'Catering Prep',
      dietary: c.menu_item?.is_vegetarian ? 'Veg' : 'Non-Veg',
      confirmedQty: c.confirmed_quantity,
      bufferQty: c.buffer_quantity,
      recommendedQty: c.recommended_quantity,
      unitCost: c.unit_cost,
      totalCost: c.total_estimated_cost,
    }));

    generateCateringOrderPDF(
      event.name,
      event.start_date,
      event.venue_name,
      event.settings.catering_buffer_percentage,
      formatted
    );
  };

  // Export 4: Gate Check-in Logs
  const handleExportCheckins = () => {
    const data = checkinLogs.map((log) => ({
      'Log ID': log.id,
      'Attendee Name': log.attendee_name,
      'Scan Type': log.scan_type,
      Status: log.status,
      'Scanned By': log.scanned_by,
      Timestamp: log.timestamp,
    }));
    exportToCSV(data, `InviteDecide_Checkin_Logs_${event.slug}`);
  };

  // Export 5: Master Excel Workbook with all sheets
  const handleExportMasterExcel = () => {
    const sheets = {
      'Guest Directory': guests.map((g) => ({
        Name: g.full_name,
        Phone: g.whatsapp_number,
        Category: g.category,
        Code: g.invitation_code,
      })),
      'Attendees': attendees.map((a) => ({
        Name: a.full_name,
        Type: a.is_child ? 'Child' : 'Adult',
        Diet: a.dietary_preference,
        CheckedIn: a.checked_in ? 'YES' : 'NO',
      })),
      'Catering Order': calculations.map((c) => ({
        Dish: c.menu_item?.name,
        Confirmed: c.confirmed_quantity,
        Buffer: c.buffer_quantity,
        Recommended: c.recommended_quantity,
        UnitCost: c.unit_cost,
        TotalCost: c.total_estimated_cost,
      })),
      'Check-in Logs': checkinLogs.map((l) => ({
        Guest: l.attendee_name,
        Method: l.scan_type,
        Time: l.timestamp,
      })),
    };

    exportToExcel(sheets, `InviteDecide_Master_Event_Report_${event.slug}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Event Reports & Data Exports</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Download comprehensive operational spreadsheets and caterer PDFs with role-based access.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="gold" size="sm" onClick={handleExportMasterExcel} className="gap-1.5 text-xs">
            <FileSpreadsheet className="w-3.5 h-3.5" /> Download Master Excel Workbook
          </Button>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Report 1 */}
        <Card className="hover:border-primary/50 transition-all">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Users className="w-5 h-5 text-blue-600" />
              <Button size="sm" variant="outline" onClick={handleExportGuests} className="text-xs gap-1">
                <Download className="w-3 h-3" /> CSV
              </Button>
            </div>
            <CardTitle className="text-base font-bold mt-2">Guest Directory & Invitations</CardTitle>
            <CardDescription className="text-xs">
              All {guests.length} invited households, WhatsApp phones, unique invitation codes, and delivery status.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Report 2 */}
        <Card className="hover:border-primary/50 transition-all">
          <CardHeader>
            <div className="flex items-center justify-between">
              <UtensilsCrossed className="w-5 h-5 text-amber-600" />
              <Button size="sm" variant="gold" onClick={handleExportCatering} className="text-xs gap-1">
                <FileText className="w-3 h-3" /> PDF
              </Button>
            </div>
            <CardTitle className="text-base font-bold mt-2">Catering Order & Preparation Sheet</CardTitle>
            <CardDescription className="text-xs">
              Aggregated dish quantities, configured {event.settings.catering_buffer_percentage}% buffer, and total expenditure.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Report 3 */}
        <Card className="hover:border-primary/50 transition-all">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Clock className="w-5 h-5 text-purple-600" />
              <Button size="sm" variant="outline" onClick={handleExportAttendees} className="text-xs gap-1">
                <Download className="w-3 h-3" /> CSV
              </Button>
            </div>
            <CardTitle className="text-base font-bold mt-2">Confirmed Attendees & Dietary</CardTitle>
            <CardDescription className="text-xs">
              All {attendees.length} confirmed family members, adult/child status, dietary habits, and table assignments.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Report 4 */}
        <Card className="hover:border-primary/50 transition-all">
          <CardHeader>
            <div className="flex items-center justify-between">
              <QrCode className="w-5 h-5 text-indigo-600" />
              <Button size="sm" variant="outline" onClick={handleExportCheckins} className="text-xs gap-1">
                <Download className="w-3 h-3" /> CSV
              </Button>
            </div>
            <CardTitle className="text-base font-bold mt-2">Gate Check-in & Security Logs</CardTitle>
            <CardDescription className="text-xs">
              Complete audit trail of all {checkinLogs.length} scans at venue entrance with timestamp and scanner operator.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};
