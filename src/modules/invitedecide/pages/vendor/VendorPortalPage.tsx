import React from 'react';
import { useAppStore } from '@/modules/invitedecide/stores/useAppStore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/modules/invitedecide/components/ui/card';
import { Button } from '@/modules/invitedecide/components/ui/button';
import { Badge } from '@/modules/invitedecide/components/ui/badge';
import { generateCateringOrderPDF, exportToCSV } from '@/modules/invitedecide/utils/export';
import {
  Utensils,
  Clock,
  ShieldCheck,
  FileText,
  Download,
  AlertCircle,
  Building,
} from 'lucide-react';

export const VendorPortalPage: React.FC = () => {
  const { event, getCateringCalculations, timeSlots, attendees } = useAppStore();

  const calculations = getCateringCalculations();
  const totalPortions = calculations.reduce((a, b) => a + b.recommended_quantity, 0);

  const vegCount = attendees.filter((a) => a.dietary_preference === 'veg').length;
  const nonVegCount = attendees.filter((a) => a.dietary_preference === 'non_veg').length;
  const jainCount = attendees.filter((a) => a.dietary_preference === 'jain').length;

  const handleDownloadPDF = () => {
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

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Vendor Portal Notice */}
      <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
          <span>
            <strong>Scoped Vendor Portal:</strong> Authorized operational view for Royal Palace Catering Services. Private guest names and contact details are withheld for data protection.
          </span>
        </div>
        <Badge variant="gold">Restricted Access</Badge>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Caterer Operational Production Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Event: {event.name} • Venue: {event.venue_name}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="gold" size="sm" onClick={handleDownloadPDF} className="gap-1.5 text-xs">
            <FileText className="w-3.5 h-3.5" /> Download Preparation Order PDF
          </Button>
        </div>
      </div>

      {/* High-level Quantities */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase">Total Preparation Portions</span>
            <div className="text-2xl font-bold text-primary mt-1">{totalPortions.toLocaleString()}</div>
            <p className="text-[11px] text-muted-foreground mt-0.5">Includes {event.settings.catering_buffer_percentage}% Buffer</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase">Pure Vegetarian Portions</span>
            <div className="text-2xl font-bold text-emerald-600 mt-1">{vegCount}</div>
            <p className="text-[11px] text-muted-foreground mt-0.5">Strict Veg Counter</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase">Jain Dietary Special</span>
            <div className="text-2xl font-bold text-amber-600 mt-1">{jainCount}</div>
            <p className="text-[11px] text-muted-foreground mt-0.5">No Onion / Garlic / Root Veg</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase">Non-Veg Delicacies</span>
            <div className="text-2xl font-bold text-rose-600 mt-1">{nonVegCount}</div>
            <p className="text-[11px] text-muted-foreground mt-0.5">Separate Kitchen Station</p>
          </CardContent>
        </Card>
      </div>

      {/* Production Dish Requirement Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-bold">Kitchen Production Schedule & Portions</CardTitle>
          <CardDescription>
            Precise preparation target quantities for head chef and banquet operations
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-muted/50 border-b text-muted-foreground uppercase font-semibold">
                <tr>
                  <th className="p-3.5">Menu Item</th>
                  <th className="p-3.5">Dietary Class</th>
                  <th className="p-3.5">Standard Serving Portion</th>
                  <th className="p-3.5 text-right">Confirmed Selections</th>
                  <th className="p-3.5 text-right font-bold text-primary">Target Prep Quantity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {calculations.map((c) => (
                  <tr key={c.id} className="hover:bg-muted/30">
                    <td className="p-3.5 font-bold text-sm text-foreground">
                      {c.menu_item?.name}
                    </td>
                    <td className="p-3.5">
                      <Badge
                        variant={
                          c.menu_item?.is_vegetarian
                            ? 'success'
                            : c.menu_item?.is_jain
                            ? 'gold'
                            : 'destructive'
                        }
                        className="text-[10px]"
                      >
                        {c.menu_item?.is_vegetarian ? 'VEG' : c.menu_item?.is_jain ? 'JAIN' : 'NON-VEG'}
                      </Badge>
                    </td>
                    <td className="p-3.5 text-muted-foreground">{c.menu_item?.portion_size}</td>
                    <td className="p-3.5 text-right font-semibold">{c.confirmed_quantity}</td>
                    <td className="p-3.5 text-right font-bold text-base text-primary">
                      {c.recommended_quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Arrival Wave Crowd Load for Food Heating */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-bold flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" /> Hourly Arrival Waves (Buffet Replenishment)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            {timeSlots.map((s) => (
              <div key={s.id} className="p-3.5 rounded-xl border bg-muted/30 text-xs">
                <span className="font-bold text-foreground">
                  {s.start_time} - {s.end_time}
                </span>
                <p className="text-primary font-bold text-lg mt-1">{s.booked_count} Guests</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">Live Buffet Capacity: {s.capacity}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
