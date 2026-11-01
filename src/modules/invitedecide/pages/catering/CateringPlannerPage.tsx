import React, { useState } from 'react';
import { useAppStore } from '@/modules/invitedecide/stores/useAppStore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/modules/invitedecide/components/ui/card';
import { Button } from '@/modules/invitedecide/components/ui/button';
import { Input } from '@/modules/invitedecide/components/ui/input';
import { Badge } from '@/modules/invitedecide/components/ui/badge';
import { Dialog } from '@/modules/invitedecide/components/ui/dialog';
import { generateCateringOrderPDF, exportToCSV } from '@/modules/invitedecide/utils/export';
import {
  UtensilsCrossed,
  Plus,
  Download,
  FileText,
  DollarSign,
  TrendingUp,
  AlertCircle,
  Percent,
  CheckCircle2,
  Trash2,
  Edit,
} from 'lucide-react';
import { MenuItem } from '@/modules/invitedecide/types';

export const CateringPlannerPage: React.FC = () => {
  const {
    menuCategories,
    menuItems,
    addMenuItem,
    deleteMenuItem,
    getCateringCalculations,
    event,
    updateEventSettings,
  } = useAppStore();

  const [bufferInput, setBufferInput] = useState(event.settings.catering_buffer_percentage || 12);
  const [addDishOpen, setAddDishOpen] = useState(false);

  // New Dish Form State
  const [dishName, setDishName] = useState('');
  const [categoryId, setCategoryId] = useState(menuCategories[0]?.id || '');
  const [description, setDescription] = useState('');
  const [portionSize, setPortionSize] = useState('Standard (200g)');
  const [unitCost, setUnitCost] = useState(150);
  const [isVeg, setIsVeg] = useState(true);
  const [isJain, setIsJain] = useState(false);
  const [isNonVeg, setIsNonVeg] = useState(false);

  const calculations = getCateringCalculations();

  const grandTotalCost = calculations.reduce((acc, c) => acc + c.total_estimated_cost, 0);
  const totalPortions = calculations.reduce((acc, c) => acc + c.recommended_quantity, 0);

  const handleUpdateBuffer = (newBuffer: number) => {
    setBufferInput(newBuffer);
    updateEventSettings({ catering_buffer_percentage: newBuffer });
  };

  const handleCreateDish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dishName.trim()) return;

    addMenuItem({
      category_id: categoryId,
      event_id: event.id,
      name: dishName.trim(),
      description: description.trim(),
      portion_size: portionSize,
      unit_cost: unitCost,
      is_vegetarian: isVeg,
      is_non_veg: isNonVeg,
      is_jain: isJain,
      is_vegan: false,
      allergens: isVeg && !isNonVeg ? ['Dairy'] : [],
      is_available: true,
    });

    setDishName('');
    setDescription('');
    setAddDishOpen(false);
  };

  const handleExportPDF = () => {
    const formatted = calculations.map((c) => {
      const cat = menuCategories.find((cat) => cat.id === c.menu_item?.category_id);
      return {
        dishName: c.menu_item?.name || 'Dish',
        category: cat?.name || 'General',
        dietary: c.menu_item?.is_vegetarian ? 'Veg' : c.menu_item?.is_non_veg ? 'Non-Veg' : 'Jain',
        confirmedQty: c.confirmed_quantity,
        bufferQty: c.buffer_quantity,
        recommendedQty: c.recommended_quantity,
        unitCost: c.unit_cost,
        totalCost: c.total_estimated_cost,
      };
    });

    generateCateringOrderPDF(
      event.name,
      event.start_date,
      event.venue_name,
      event.settings.catering_buffer_percentage,
      formatted
    );
  };

  const handleExportCSV = () => {
    const csvData = calculations.map((c) => ({
      'Dish Name': c.menu_item?.name,
      'Unit Cost (INR)': c.unit_cost,
      'Confirmed Selections': c.confirmed_quantity,
      'Buffer %': c.buffer_percentage,
      'Buffer Quantity': c.buffer_quantity,
      'Recommended Quantity': c.recommended_quantity,
      'Total Cost (INR)': c.total_estimated_cost,
    }));
    exportToCSV(csvData, `InviteDecide_Catering_Order_${event.slug}`);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Catering & Food Quantity Engine</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Transparent food quantity calculation: <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">Recommended = Confirmed Selections + Safety Buffer</code>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleExportCSV} className="gap-1.5 text-xs">
            <Download className="w-3.5 h-3.5" /> Export Excel/CSV
          </Button>

          <Button variant="gold" size="sm" onClick={handleExportPDF} className="gap-1.5 text-xs">
            <FileText className="w-3.5 h-3.5" /> Download Caterer Order PDF
          </Button>

          <Button variant="default" size="sm" onClick={() => setAddDishOpen(true)} className="gap-1.5 text-xs">
            <Plus className="w-4 h-4" /> Add Dish
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-amber-500/10 to-transparent border-amber-500/30">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground uppercase">
                Estimated Catering Cost
              </span>
              <DollarSign className="w-4 h-4 text-amber-600" />
            </div>
            <div className="mt-2 text-2xl font-black font-display text-zinc-900 dark:text-zinc-100">
              ₹ {grandTotalCost.toLocaleString('en-IN')}
            </div>
            <p className="text-[11px] text-muted-foreground mt-1">
              Includes ingredients, preparation, and live safety buffer
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground uppercase">
                Total Recommended Portions
              </span>
              <UtensilsCrossed className="w-4 h-4 text-primary" />
            </div>
            <div className="mt-2 text-2xl font-bold">{totalPortions.toLocaleString()}</div>
            <p className="text-[11px] text-muted-foreground mt-1">
              Across {menuItems.length} curated dishes & beverages
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground uppercase">
                Organizer Safety Buffer
              </span>
              <Percent className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="mt-2 flex items-center gap-3">
              <span className="text-2xl font-bold text-emerald-600">+{bufferInput}%</span>
              <div className="flex gap-1">
                {[5, 10, 12, 15, 20].map((b) => (
                  <button
                    key={b}
                    onClick={() => handleUpdateBuffer(b)}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                      bufferInput === b
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    {b}%
                  </button>
                ))}
              </div>
            </div>
            <p className="text-[11px] text-muted-foreground mt-1">
              Guarantees food never runs short without unnecessary wastage
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Dish Calculations Table */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-bold">Dish-by-Dish Preparation Quantities</CardTitle>
          <CardDescription>
            Live requirements aggregated from confirmed guest selections with configured buffer
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-muted/50 border-b text-muted-foreground uppercase font-semibold">
                <tr>
                  <th className="p-3.5">Dish Name & Dietary</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5">Portion Size</th>
                  <th className="p-3.5 text-right">Confirmed RSVP</th>
                  <th className="p-3.5 text-right">Buffer (+{bufferInput}%)</th>
                  <th className="p-3.5 text-right font-bold text-primary">Total Prep Qty</th>
                  <th className="p-3.5 text-right">Unit Rate</th>
                  <th className="p-3.5 text-right">Total Est. Cost</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {calculations.map((calc) => {
                  const item = calc.menu_item;
                  if (!item) return null;
                  const cat = menuCategories.find((c) => c.id === item.category_id);

                  return (
                    <tr key={calc.id} className="hover:bg-muted/30 transition-colors">
                      <td className="p-3.5 font-medium">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                              item.is_vegetarian ? 'bg-emerald-500' : 'bg-rose-500'
                            }`}
                          />
                          <div>
                            <span className="font-semibold text-sm">{item.name}</span>
                            <div className="flex gap-1 mt-0.5">
                              {item.is_jain && (
                                <span className="text-[9px] px-1 bg-amber-100 text-amber-800 rounded font-bold">
                                  JAIN
                                </span>
                              )}
                              {item.allergens.length > 0 && (
                                <span className="text-[9px] text-muted-foreground">
                                  Contains: {item.allergens.join(', ')}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3.5 text-muted-foreground">{cat?.name}</td>
                      <td className="p-3.5 text-muted-foreground">{item.portion_size}</td>
                      <td className="p-3.5 text-right font-semibold">{calc.confirmed_quantity}</td>
                      <td className="p-3.5 text-right text-emerald-600 font-medium">
                        +{calc.buffer_quantity}
                      </td>
                      <td className="p-3.5 text-right font-bold text-sm text-primary">
                        {calc.recommended_quantity}
                      </td>
                      <td className="p-3.5 text-right font-mono">₹ {calc.unit_cost}</td>
                      <td className="p-3.5 text-right font-mono font-bold">
                        ₹ {calc.total_estimated_cost.toLocaleString('en-IN')}
                      </td>
                      <td className="p-3.5 text-right">
                        <button
                          onClick={() => deleteMenuItem(item.id)}
                          className="p-1.5 rounded hover:bg-red-50 text-muted-foreground hover:text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Add Dish Modal */}
      <Dialog
        open={addDishOpen}
        onOpenChange={setAddDishOpen}
        title="Add New Menu Dish"
        description="Add a dish to your event menu and configure catering costs and dietary traits."
      >
        <form onSubmit={handleCreateDish} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-foreground">Dish Name *</label>
            <Input
              required
              placeholder="e.g. Saffron Rasmalai with Pistachio"
              value={dishName}
              onChange={(e) => setDishName(e.target.value)}
              className="mt-1 text-xs"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-foreground">Menu Category</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full mt-1 border rounded p-2 text-xs bg-background"
              >
                {menuCategories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-foreground">Estimated Unit Cost (₹)</label>
              <Input
                type="number"
                value={unitCost}
                onChange={(e) => setUnitCost(parseFloat(e.target.value) || 0)}
                className="mt-1 text-xs font-mono"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-foreground">Portion Size</label>
            <Input
              value={portionSize}
              onChange={(e) => setPortionSize(e.target.value)}
              placeholder="e.g. 2 pcs or Bowl (200g)"
              className="mt-1 text-xs"
            />
          </div>

          <div className="flex gap-4 pt-2 text-xs">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={isVeg}
                onChange={(e) => {
                  setIsVeg(e.target.checked);
                  if (e.target.checked) setIsNonVeg(false);
                }}
              />
              <span>Vegetarian</span>
            </label>

            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={isNonVeg}
                onChange={(e) => {
                  setIsNonVeg(e.target.checked);
                  if (e.target.checked) {
                    setIsVeg(false);
                    setIsJain(false);
                  }
                }}
              />
              <span>Non-Vegetarian</span>
            </label>

            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={isJain}
                onChange={(e) => {
                  setIsJain(e.target.checked);
                  if (e.target.checked) {
                    setIsVeg(true);
                    setIsNonVeg(false);
                  }
                }}
              />
              <span>Jain Friendly</span>
            </label>
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <Button type="button" variant="outline" size="sm" onClick={() => setAddDishOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="default" size="sm">
              Add Dish to Menu
            </Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};
