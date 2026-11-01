import React, { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { Dialog } from '@/modules/invitedecide/components/ui/dialog';
import { Button } from '@/modules/invitedecide/components/ui/button';
import { Input } from '@/modules/invitedecide/components/ui/input';
import { Camera, CameraOff, Keyboard } from 'lucide-react';

interface QRScannerModalProps {
  open: boolean;
  onClose: () => void;
  onScanSuccess: (decodedText: string) => void;
}

export const QRScannerModal: React.FC<QRScannerModalProps> = ({
  open,
  onClose,
  onScanSuccess,
}) => {
  const [manualCode, setManualCode] = useState('');
  const [scanning, setScanning] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showManualInput, setShowManualInput] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    if (open && !showManualInput) {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      stopCamera();
    };
  }, [open, showManualInput]);

  const startCamera = async () => {
    try {
      setErrorMessage('');
      setScanning(true);

      const html5QrCode = new Html5Qrcode('qr-reader-target');
      scannerRef.current = html5QrCode;

      await html5QrCode.start(
        { facingMode: 'environment' },
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
        },
        (decodedText) => {
          stopCamera();
          onScanSuccess(decodedText);
          onClose();
        },
        () => {
          // ignore scan frame misses
        }
      );
    } catch (err: any) {
      console.warn('Camera scan failed to start:', err);
      setErrorMessage(
        'Could not access camera. Please allow camera permissions, or enter the pass code manually below.'
      );
      setScanning(false);
      setShowManualInput(true);
    }
  };

  const stopCamera = async () => {
    if (scannerRef.current && scannerRef.current.isScanning) {
      try {
        await scannerRef.current.stop();
        scannerRef.current.clear();
      } catch (err) {
        console.warn('Error stopping camera:', err);
      }
      scannerRef.current = null;
    }
    setScanning(false);
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (manualCode.trim()) {
      stopCamera();
      onScanSuccess(manualCode.trim());
      onClose();
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        if (!val) stopCamera();
        onClose();
      }}
      title="Scan Guest QR Pass"
      description="Position the QR code inside the viewfinder for instant check-in verification."
    >
      <div className="flex flex-col items-center">
        {!showManualInput ? (
          <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-zinc-950 p-2 text-center text-white">
            <div id="qr-reader-target" className="w-full min-h-[280px]" />
            {scanning && (
              <p className="mt-2 text-xs text-zinc-400">
                Camera Active • Point at Guest QR Pass
              </p>
            )}
          </div>
        ) : (
          <form onSubmit={handleManualSubmit} className="w-full space-y-4 py-4">
            <div>
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Enter QR Pass Display Code or Token
              </label>
              <Input
                placeholder="e.g. QP-8042 or INV-9042"
                value={manualCode}
                onChange={(e) => setManualCode(e.target.value)}
                autoFocus
                className="mt-1.5 font-mono text-base uppercase"
              />
            </div>
            <Button type="submit" className="w-full" variant="gold">
              Verify & Check In
            </Button>
          </form>
        )}

        {errorMessage && (
          <div className="mt-3 rounded-lg bg-red-50 p-3 text-xs text-red-600 dark:bg-red-950/50 dark:text-red-300">
            {errorMessage}
          </div>
        )}

        <div className="mt-4 flex w-full justify-between border-t pt-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setShowManualInput(!showManualInput);
              if (showManualInput) {
                startCamera();
              } else {
                stopCamera();
              }
            }}
            className="gap-2 text-xs"
          >
            {showManualInput ? (
              <>
                <Camera className="w-4 h-4" /> Use Camera Scanner
              </>
            ) : (
              <>
                <Keyboard className="w-4 h-4" /> Manual Code Lookup
              </>
            )}
          </Button>

          <Button variant="outline" size="sm" onClick={onClose} className="text-xs">
            Cancel
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
