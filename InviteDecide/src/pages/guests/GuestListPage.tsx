import React, { useState, useMemo } from 'react';
import { useAppStore } from '@/stores/useAppStore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog } from '@/components/ui/dialog';
import { exportToCSV, exportToExcel } from '@/utils/export';
import { buildWhatsAppLink, formatInvitationMessage } from '@/utils/whatsapp';
import {
  Users,
  Search,
  Plus,
  FileSpreadsheet,
  Download,
  Upload,
  MessageCircle,
  ExternalLink,
  Crown,
  Trash2,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { Guest } from '@/types';

export const GuestListPage: React.FC = () => {
  const { guests, addGuest, deleteGuest, importGuestsFromList, event } = useAppStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [importDialogOpen, setImportDialogOpen] = useState(false);
  const [importRawText, setImportRawText] = useState('');

  // Form State for Adding New Guest
  const [fullName, setFullName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [phone, setPhone] = useState('+91');
  const [category, setCategory] = useState<Guest['category']>('Family');
  const [dietary, setDietary] = useState<Guest['dietary_preference']>('veg');
  const [relationship, setRelationship] = useState('Relative');

  // Filtered guests list
  const filteredGuests = useMemo(() => {
    return guests.filter((g) => {
      const matchSearch =
        g.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        g.whatsapp_number.includes(searchTerm) ||
        (g.invitation_code && g.invitation_code.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (g.family_name && g.family_name.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchCategory =
        selectedCategory === 'ALL' || g.category.toUpperCase() === selectedCategory.toUpperCase();

      return matchSearch && matchCategory;
    });
  }, [guests, searchTerm, selectedCategory]);

  const handleCreateGuest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) return;

    addGuest({
      event_id: event.id,
      organization_id: event.organization_id,
      full_name: fullName.trim(),
      family_name: familyName.trim() || `${fullName} Family`,
      whatsapp_number: phone.trim(),
      category,
      relationship,
      is_child: false,
      dietary_preference: dietary,
      is_primary_contact: true,
    });

    setFullName('');
    setFamilyName('');
    setPhone('+91');
    setAddDialogOpen(false);
  };

  const handleBulkImport = () => {
    // Parse CSV or tab-separated text lines
    const lines = importRawText.split('\n');
    const imported: Partial<Guest>[] = [];

    lines.forEach((line) => {
      const parts = line.split(/[,\t]/).map((p) => p.trim());
      if (parts[0] && parts[0].length > 1 && !parts[0].toLowerCase().includes('name')) {
        imported.push({
          full_name: parts[0],
          whatsapp_number: parts[1] || '+919800000000',
          category: (parts[2] as any) || 'Family',
          dietary_preference: (parts[3] as any) || 'veg',
        });
      }
    });

    if (imported.length > 0) {
      importGuestsFromList(imported);
      setImportRawText('');
      setImportDialogOpen(false);
    }
  };

  const handleExportCSV = () => {
    const exportData = guests.map((g) => ({
      'Full Name': g.full_name,
      'Family Name': g.family_name || '',
      'WhatsApp Number': g.whatsapp_number,
      Category: g.category,
      'Dietary Preference': g.dietary_preference,
      'Invitation Code': g.invitation_code || '',
      'Invitation Token': g.invitation_token || '',
      Status: g.invitation_status || 'draft',
      'Invitation Link': `${window.location.origin}${window.location.pathname}#/invite/${g.invitation_token}`,
    }));
    exportToCSV(exportData, `InviteDecide_Guests_${event.slug}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Guest & Family Directory</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Manage {guests.length} invited guests, generate secure links, and trigger WhatsApp dispatches.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setImportDialogOpen(true)} className="gap-1.5 text-xs">
            <Upload className="w-3.5 h-3.5" /> Import CSV/Excel
          </Button>

          <Button variant="outline" size="sm" onClick={handleExportCSV} className="gap-1.5 text-xs">
            <Download className="w-3.5 h-3.5" /> Export CSV
          </Button>

          <Button variant="default" size="sm" onClick={() => setAddDialogOpen(true)} className="gap-1.5 text-xs">
            <Plus className="w-4 h-4" /> Add Guest / Family
          </Button>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, phone, or code (e.g. INV-9001)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 text-xs"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
          {['ALL', 'VIP', 'FAMILY', 'FRIEND', 'SPECIAL'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs font-semibold rounded-full border transition-all ${
                selectedCategory === cat
                  ? 'bg-primary text-white border-primary shadow-sm'
                  : 'bg-card text-muted-foreground hover:bg-muted'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Guest Table Card */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-muted/50 border-b text-muted-foreground uppercase font-semibold">
                <tr>
                  <th className="p-3.5">Guest / Household Name</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5">WhatsApp Phone</th>
                  <th className="p-3.5">Dietary</th>
                  <th className="p-3.5">Invitation Code</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredGuests.slice(0, 50).map((guest) => {
                  const isVip = guest.category === 'VIP';
                  const invUrl = `${window.location.origin}${window.location.pathname}#/invite/${guest.invitation_token}`;
                  const waMessage = formatInvitationMessage({
                    guestName: guest.full_name,
                    hostNames: event.host_names,
                    eventName: event.name,
                    venueName: event.venue_name,
                    eventDate: event.start_date,
                    invitationUrl: invUrl,
                    invitationCode: guest.invitation_code || 'INV-0000',
                  });
                  const waLink = buildWhatsAppLink(guest.whatsapp_number, waMessage);

                  return (
                    <tr key={guest.id} className="hover:bg-muted/30 transition-colors">
                      <td className="p-3.5 font-medium text-foreground">
                        <div className="flex items-center gap-2">
                          {isVip && <Crown className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />}
                          <div>
                            <span className="font-semibold text-sm">{guest.full_name}</span>
                            {guest.family_name && (
                              <p className="text-[11px] text-muted-foreground">{guest.family_name}</p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="p-3.5">
                        <Badge
                          variant={
                            isVip
                              ? 'gold'
                              : guest.category === 'Family'
                              ? 'default'
                              : 'secondary'
                          }
                          className="text-[10px] py-0"
                        >
                          {guest.category}
                        </Badge>
                      </td>
                      <td className="p-3.5 font-mono text-[11px] text-muted-foreground">
                        {guest.whatsapp_number}
                      </td>
                      <td className="p-3.5">
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${
                            guest.dietary_preference === 'veg'
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                              : guest.dietary_preference === 'jain'
                              ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                              : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                          }`}
                        >
                          {guest.dietary_preference.toUpperCase()}
                        </span>
                      </td>
                      <td className="p-3.5">
                        <span className="font-mono text-xs font-semibold px-2 py-1 bg-muted rounded">
                          {guest.invitation_code}
                        </span>
                      </td>
                      <td className="p-3.5">
                        {guest.invitation_status === 'responded' ? (
                          <Badge variant="success" className="text-[10px] py-0">
                            Responded
                          </Badge>
                        ) : guest.invitation_status === 'opened' ? (
                          <Badge variant="secondary" className="text-[10px] py-0">
                            Opened
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-[10px] py-0">
                            Sent
                          </Badge>
                        )}
                      </td>
                      <td className="p-3.5 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {/* 1-Click WhatsApp Dispatch */}
                          <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-[11px] shadow-sm transition-all"
                            title="Send Invitation via WhatsApp"
                          >
                            <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                          </a>

                          {/* Preview Guest Link */}
                          <a
                            href={invUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground"
                            title="View Guest Portal Link"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>

                          <button
                            onClick={() => deleteGuest(guest.id)}
                            className="p-1.5 rounded hover:bg-red-50 text-muted-foreground hover:text-red-600"
                            title="Delete Guest"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t text-xs text-muted-foreground flex items-center justify-between">
            <span>
              Showing {Math.min(50, filteredGuests.length)} of {filteredGuests.length} matching guests
            </span>
            <span className="text-[11px]">Database contains {guests.length} total records</span>
          </div>
        </CardContent>
      </Card>

      {/* Add Guest Modal */}
      <Dialog
        open={addDialogOpen}
        onOpenChange={setAddDialogOpen}
        title="Add New Guest or Family"
        description="Create an invitation record with unique URL and WhatsApp dispatch link."
      >
        <form onSubmit={handleCreateGuest} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-foreground">Guest Full Name *</label>
            <Input
              required
              placeholder="e.g. Shri Vikram Malhotra"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 text-xs"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-foreground">Family / Household Title</label>
            <Input
              placeholder="e.g. The Malhotra Family"
              value={familyName}
              onChange={(e) => setFamilyName(e.target.value)}
              className="mt-1 text-xs"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-foreground">WhatsApp Number *</label>
              <Input
                required
                placeholder="+919876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 text-xs font-mono"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-foreground">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full mt-1 border rounded-md p-2 text-xs bg-background"
              >
                <option value="Family">Family</option>
                <option value="VIP">VIP</option>
                <option value="Friend">Friend</option>
                <option value="Colleague">Colleague</option>
                <option value="Special">Special Invitee</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-foreground">Dietary Preference</label>
              <select
                value={dietary}
                onChange={(e) => setDietary(e.target.value as any)}
                className="w-full mt-1 border rounded-md p-2 text-xs bg-background"
              >
                <option value="veg">Vegetarian</option>
                <option value="non_veg">Non-Vegetarian</option>
                <option value="jain">Jain (No Root Veg)</option>
                <option value="vegan">Vegan</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-foreground">Relationship</label>
              <Input
                placeholder="e.g. Paternal Cousin"
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                className="mt-1 text-xs"
              />
            </div>
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <Button type="button" variant="outline" size="sm" onClick={() => setAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="default" size="sm">
              Save Guest & Generate Link
            </Button>
          </div>
        </form>
      </Dialog>

      {/* Bulk Import Modal */}
      <Dialog
        open={importDialogOpen}
        onOpenChange={setImportDialogOpen}
        title="Bulk Import Guests (CSV or Tab-Separated)"
        description="Paste guest records below. Format: Full Name, WhatsApp Number, Category, Dietary"
      >
        <div className="space-y-4">
          <textarea
            rows={8}
            placeholder={`Rajesh Sharma, +919811122233, VIP, veg\nVikram Verma, +919822233344, Family, non_veg\nSanjay Gupta, +919833344455, Friend, jain`}
            value={importRawText}
            onChange={(e) => setImportRawText(e.target.value)}
            className="w-full border rounded-lg p-3 text-xs font-mono bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <div className="flex justify-between items-center text-xs text-muted-foreground">
            <span>Supports standard CSV or Excel copy-paste.</span>
            <Button size="sm" onClick={handleBulkImport}>
              Process Import
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
