import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { Button } from '@/modules/invitedecide/components/ui/button';
import { Download, Copy, Check } from 'lucide-react';

interface QRCodeDisplayProps {
  value: string;
  size?: number;
  title?: string;
  subtitle?: string;
  displayCode?: string;
}

export const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({
  value,
  size = 220,
  title,
  subtitle,
  displayCode,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (canvasRef.current && value) {
      QRCode.toCanvas(canvasRef.current, value, {
        width: size,
        margin: 2,
        color: {
          dark: '#1e1b4b',
          light: '#ffffff',
        },
      });
    }
  }, [value, size]);

  const handleDownloadPNG = () => {
    if (!canvasRef.current) return;
    const url = canvasRef.current.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `InviteDecide_QR_${displayCode || 'Pass'}.png`;
    link.href = url;
    link.click();
  };

  const handleCopyCode = () => {
    if (!displayCode) return;
    navigator.clipboard.writeText(displayCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-zinc-800 border shadow-sm">
      {title && <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-center">{title}</h4>}
      {subtitle && <p className="text-xs text-muted-foreground text-center mb-3">{subtitle}</p>}

      <div className="p-3 bg-white rounded-xl shadow-inner border border-zinc-200">
        <canvas ref={canvasRef} />
      </div>

      {displayCode && (
        <div className="mt-3 flex items-center gap-2">
          <span className="font-mono text-sm font-bold tracking-widest text-primary px-3 py-1 bg-primary/10 rounded-lg">
            {displayCode}
          </span>
          <button
            onClick={handleCopyCode}
            title="Copy Code"
            className="p-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-500"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      )}

      <div className="mt-4 flex gap-2">
        <Button variant="outline" size="sm" onClick={handleDownloadPNG} className="gap-1.5 text-xs">
          <Download className="w-3.5 h-3.5" /> Download QR
        </Button>
      </div>
    </div>
  );
};
