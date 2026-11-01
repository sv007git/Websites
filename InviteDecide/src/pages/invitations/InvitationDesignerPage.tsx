import React, { useState } from 'react';
import { useAppStore } from '@/stores/useAppStore';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Sparkles,
  Smartphone,
  Monitor,
  Type,
  Image as ImageIcon,
  Layers,
  Palette,
  Eye,
  CheckCircle2,
  Trash2,
  Move,
  RotateCw,
  Plus,
} from 'lucide-react';
import { InvitationCanvasElement } from '@/types';

export const InvitationDesignerPage: React.FC = () => {
  const { invitationDesign, updateInvitationDesign, addCanvasElement, updateCanvasElement, deleteCanvasElement, publishInvitation, event } = useAppStore();
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [selectedElementId, setSelectedElementId] = useState<string | null>(null);
  const [testGuestName, setTestGuestName] = useState('Shri Rajesh Sharma & Family');

  const selectedElement = invitationDesign.elements.find((el) => el.id === selectedElementId);

  // Template switch presets
  const handleSelectTemplate = (category: typeof invitationDesign.template_category) => {
    if (category === 'royal') {
      updateInvitationDesign({
        template_category: 'royal',
        background_color: '#30080f',
        background_image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
      });
    } else if (category === 'indian_wedding') {
      updateInvitationDesign({
        template_category: 'indian_wedding',
        background_color: '#450a0a',
        background_image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      });
    } else if (category === 'south_indian') {
      updateInvitationDesign({
        template_category: 'south_indian',
        background_color: '#14532d',
        background_image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      });
    } else if (category === 'luxury') {
      updateInvitationDesign({
        template_category: 'luxury',
        background_color: '#09090b',
        background_image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
      });
    }
  };

  const handleAddText = () => {
    const newEl: InvitationCanvasElement = {
      id: `el-text-${Date.now()}`,
      type: 'text',
      x: 100,
      y: 200,
      width: 400,
      height: 50,
      rotation: 0,
      zIndex: invitationDesign.elements.length + 1,
      content: 'Click here to edit invitation text...',
      style: {
        fontFamily: 'Playfair Display',
        fontSize: 20,
        color: '#f6eed0',
        textAlign: 'center',
      },
    };
    addCanvasElement(newEl);
    setSelectedElementId(newEl.id);
  };

  const handleAddMotif = (motifSymbol: string) => {
    const newEl: InvitationCanvasElement = {
      id: `el-motif-${Date.now()}`,
      type: 'motif',
      x: 250,
      y: 100,
      width: 150,
      height: 50,
      rotation: 0,
      zIndex: invitationDesign.elements.length + 1,
      content: motifSymbol,
      style: {
        fontFamily: 'Cinzel',
        fontSize: 22,
        color: '#d9a744',
        textAlign: 'center',
      },
    };
    addCanvasElement(newEl);
    setSelectedElementId(newEl.id);
  };

  // Replace personalization tokens for rendering preview
  const renderResolvedContent = (content: string) => {
    return content
      .replace(/{{guest_name}}/g, testGuestName)
      .replace(/{{event_name}}/g, event.name)
      .replace(/{{host_names}}/g, event.host_names)
      .replace(/{{venue}}/g, event.venue_name)
      .replace(/{{date}}/g, event.start_date);
  };

  return (
    <div className="space-y-6">
      {/* Top action bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight">Digital Invitation Designer</h1>
            {invitationDesign.is_published ? (
              <Badge variant="success" className="gap-1">
                <CheckCircle2 className="w-3 h-3" /> Live & Published
              </Badge>
            ) : (
              <Badge variant="outline">Draft</Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-0.5">
            Visual editor with dynamic guest personalization, custom typography, and multi-template support.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Viewport switch */}
          <div className="flex items-center rounded-lg border bg-muted p-1">
            <button
              onClick={() => setPreviewMode('desktop')}
              className={`p-1.5 rounded-md ${previewMode === 'desktop' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground'}`}
              title="Desktop View"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPreviewMode('mobile')}
              className={`p-1.5 rounded-md ${previewMode === 'mobile' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground'}`}
              title="Mobile View"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>

          <Button variant="gold" onClick={publishInvitation} className="gap-1.5">
            <Sparkles className="w-4 h-4" /> Publish Invitation
          </Button>
        </div>
      </div>

      {/* Editor Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Toolbar / Element Controls */}
        <div className="lg:col-span-1 space-y-4">
          {/* Templates Section */}
          <Card className="p-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5" /> Wedding Templates
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => handleSelectTemplate('royal')}
                className={`p-2.5 rounded-lg border text-left font-medium transition-all ${
                  invitationDesign.template_category === 'royal'
                    ? 'border-amber-500 bg-amber-500/10 text-amber-900 dark:text-amber-300 font-bold'
                    : 'hover:bg-muted'
                }`}
              >
                👑 Royal Heritage
              </button>
              <button
                onClick={() => handleSelectTemplate('indian_wedding')}
                className={`p-2.5 rounded-lg border text-left font-medium transition-all ${
                  invitationDesign.template_category === 'indian_wedding'
                    ? 'border-rose-500 bg-rose-500/10 text-rose-900 dark:text-rose-300 font-bold'
                    : 'hover:bg-muted'
                }`}
              >
                🌺 Crimson Flora
              </button>
              <button
                onClick={() => handleSelectTemplate('south_indian')}
                className={`p-2.5 rounded-lg border text-left font-medium transition-all ${
                  invitationDesign.template_category === 'south_indian'
                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-900 dark:text-emerald-300 font-bold'
                    : 'hover:bg-muted'
                }`}
              >
                🦚 South Indian Temple
              </button>
              <button
                onClick={() => handleSelectTemplate('luxury')}
                className={`p-2.5 rounded-lg border text-left font-medium transition-all ${
                  invitationDesign.template_category === 'luxury'
                    ? 'border-zinc-700 bg-zinc-900 text-white font-bold'
                    : 'hover:bg-muted'
                }`}
              >
                ✨ Luxury Obsidian
              </button>
            </div>
          </Card>

          {/* Add Elements */}
          <Card className="p-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Plus className="w-3.5 h-3.5" /> Add Design Elements
            </h3>
            <div className="flex flex-col gap-2">
              <Button variant="outline" size="sm" onClick={handleAddText} className="justify-start gap-2 text-xs">
                <Type className="w-4 h-4 text-primary" /> Add Custom Text
              </Button>
              <div className="pt-2 border-t text-[11px] font-semibold text-muted-foreground">
                Auspicious Vedic Motifs:
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                <Button variant="outline" size="sm" onClick={() => handleAddMotif('🕉️ || श्री गणेशाय नमः ||')} className="text-[10px] px-1">
                  गणेशाय
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleAddMotif('⚜️ शुभ विवाह ⚜️')} className="text-[10px] px-1">
                  शुभ विवाह
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleAddMotif('🪔 Mangalam 🪔')} className="text-[10px] px-1">
                  Mangalam
                </Button>
              </div>
            </div>
          </Card>

          {/* Element Inspector */}
          {selectedElement ? (
            <Card className="p-4 space-y-3 border-primary/40 bg-primary/5">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-primary">
                  Element Properties
                </h3>
                <button
                  onClick={() => {
                    deleteCanvasElement(selectedElement.id);
                    setSelectedElementId(null);
                  }}
                  className="p-1 text-red-500 hover:bg-red-50 rounded"
                  title="Delete Element"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <label className="text-[11px] font-medium text-muted-foreground">Content</label>
                  <Input
                    value={selectedElement.content}
                    onChange={(e) => updateCanvasElement(selectedElement.id, { content: e.target.value })}
                    className="text-xs mt-1"
                  />
                  <p className="text-[10px] text-muted-foreground mt-1">
                    Tip: Use <code className="bg-muted px-1 rounded">{'{{guest_name}}'}</code> for personalized recipient.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] font-medium text-muted-foreground">Font</label>
                    <select
                      value={selectedElement.style.fontFamily || 'Inter'}
                      onChange={(e) => updateCanvasElement(selectedElement.id, { style: { fontFamily: e.target.value } })}
                      className="w-full mt-1 border rounded p-1.5 text-xs bg-background"
                    >
                      <option value="Great Vibes">Great Vibes (Script)</option>
                      <option value="Playfair Display">Playfair Display (Serif)</option>
                      <option value="Cinzel">Cinzel (Royal Classical)</option>
                      <option value="Montserrat">Montserrat (Clean)</option>
                      <option value="Inter">Inter (Sans)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-muted-foreground">Font Size (px)</label>
                    <Input
                      type="number"
                      value={selectedElement.style.fontSize || 16}
                      onChange={(e) => updateCanvasElement(selectedElement.id, { style: { fontSize: parseInt(e.target.value) || 16 } })}
                      className="text-xs mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] font-medium text-muted-foreground">Color</label>
                    <div className="flex items-center gap-1.5 mt-1">
                      <input
                        type="color"
                        value={selectedElement.style.color || '#ffffff'}
                        onChange={(e) => updateCanvasElement(selectedElement.id, { style: { color: e.target.value } })}
                        className="w-6 h-6 rounded cursor-pointer border"
                      />
                      <span className="font-mono text-[11px]">{selectedElement.style.color}</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-muted-foreground">Align</label>
                    <div className="flex rounded border mt-1 overflow-hidden">
                      {(['left', 'center', 'right'] as const).map((align) => (
                        <button
                          key={align}
                          onClick={() => updateCanvasElement(selectedElement.id, { style: { textAlign: align } })}
                          className={`flex-1 py-1 text-[11px] uppercase ${selectedElement.style.textAlign === align ? 'bg-primary text-white font-bold' : 'hover:bg-muted'}`}
                        >
                          {align[0]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ) : (
            <div className="rounded-xl border border-dashed p-4 text-center text-xs text-muted-foreground">
              Click any text on the invitation card to edit its content, font, color, and positioning.
            </div>
          )}

          {/* Dynamic Preview Persona */}
          <Card className="p-4 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" /> Preview Personalization
            </h3>
            <label className="text-[11px] text-muted-foreground">Test Guest Placeholder:</label>
            <Input
              value={testGuestName}
              onChange={(e) => setTestGuestName(e.target.value)}
              placeholder="e.g. Shri Rajesh Sharma & Family"
              className="text-xs"
            />
          </Card>
        </div>

        {/* Center Canvas / Preview Area */}
        <div className="lg:col-span-3 flex justify-center items-start bg-zinc-100 dark:bg-zinc-900/60 p-4 sm:p-8 rounded-2xl overflow-x-auto min-h-[750px]">
          <div
            className={`transition-all duration-300 shadow-2xl rounded-2xl overflow-hidden relative border-8 border-amber-900/40 ${
              previewMode === 'mobile' ? 'w-[380px] min-h-[640px]' : 'w-[680px] min-h-[920px]'
            }`}
            style={{
              backgroundColor: invitationDesign.background_color,
              backgroundImage: `url(${invitationDesign.background_image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Elegant Golden Border Filigree */}
            <div className="absolute inset-3 border-2 border-amber-400/40 pointer-events-none rounded-xl" />
            <div className="absolute inset-5 border border-amber-300/30 pointer-events-none rounded-lg" />

            {/* Elements Layer */}
            <div className="relative z-10 p-8 flex flex-col items-center justify-between min-h-full">
              {invitationDesign.elements.map((el) => {
                const isSelected = selectedElementId === el.id;

                return (
                  <div
                    key={el.id}
                    onClick={() => setSelectedElementId(el.id)}
                    className={`cursor-pointer transition-all my-2 relative max-w-full ${
                      isSelected ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-black/50 rounded p-1' : 'hover:outline-dashed hover:outline-1 hover:outline-amber-300/60'
                    }`}
                    style={{
                      fontFamily: el.style.fontFamily || 'inherit',
                      fontSize: previewMode === 'mobile' ? Math.max((el.style.fontSize || 16) * 0.75, 12) : el.style.fontSize,
                      color: el.style.color || '#ffffff',
                      textAlign: el.style.textAlign || 'center',
                      fontWeight: el.style.fontWeight || 'normal',
                      letterSpacing: el.style.letterSpacing ? `${el.style.letterSpacing}px` : undefined,
                      lineHeight: el.style.lineHeight || 1.4,
                      zIndex: el.zIndex,
                    }}
                  >
                    {renderResolvedContent(el.content)}
                  </div>
                );
              })}

              {/* RSVP Call-to-Action on Invitation Card */}
              <div className="mt-8 text-center pt-6 border-t border-amber-400/30 w-full max-w-md">
                <Button variant="gold" size="lg" className="w-full shadow-xl text-base font-bold tracking-wider">
                  CONFIRM RSVP & SELECT MENU
                </Button>
                <p className="mt-2 text-[11px] text-amber-200/80">
                  Unique Invitation Code: <span className="font-mono font-bold text-white">INV-DEMO-9001</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
