import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { QrCode, Camera, CheckCircle, XCircle } from 'lucide-react';
import { toast } from 'sonner';

interface QRScannerProps {
  onSuccess: (code: string) => void;
}

export const QRScanner = ({ onSuccess }: QRScannerProps) => {
  const [manualCode, setManualCode] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<'success' | 'error' | null>(null);

  const handleManualSubmit = () => {
    if (manualCode.trim()) {
      // Simulate validation
      if (manualCode.startsWith('HACK-')) {
        setScanResult('success');
        toast.success('Attendance marked successfully!');
        onSuccess(manualCode);
      } else {
        setScanResult('error');
        toast.error('Invalid QR code. Please try again.');
      }
    }
  };

  const simulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult('success');
      toast.success('QR Code scanned! Attendance marked.');
      onSuccess('HACK-DS-2024-12-09-001');
    }, 2000);
  };

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg gradient-primary glow-primary">
          <QrCode className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Scan QR Code</h3>
          <p className="text-sm text-muted-foreground">Scan the class QR to mark attendance</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Camera Scanner Area */}
        <div
          onClick={simulateScan}
          className={cn(
            'relative aspect-square max-w-xs mx-auto rounded-xl border-2 border-dashed cursor-pointer transition-all duration-300',
            isScanning ? 'border-primary animate-pulse' : 'border-border/50 hover:border-primary/50',
            scanResult === 'success' && 'border-success bg-success/10',
            scanResult === 'error' && 'border-destructive bg-destructive/10'
          )}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            {isScanning ? (
              <>
                <div className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin" />
                <p className="text-sm text-muted-foreground">Scanning...</p>
              </>
            ) : scanResult === 'success' ? (
              <>
                <CheckCircle className="w-16 h-16 text-success" />
                <p className="text-sm text-success font-medium">Attendance Marked!</p>
              </>
            ) : scanResult === 'error' ? (
              <>
                <XCircle className="w-16 h-16 text-destructive" />
                <p className="text-sm text-destructive font-medium">Invalid Code</p>
              </>
            ) : (
              <>
                <Camera className="w-12 h-12 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Tap to scan QR</p>
              </>
            )}
          </div>

          {/* Scanner overlay animation */}
          {isScanning && (
            <div className="absolute inset-4">
              <div className="w-full h-1 bg-primary animate-bounce" style={{ animationDuration: '1s' }} />
            </div>
          )}
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/30" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-card px-4 text-sm text-muted-foreground">or enter code manually</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Input
            placeholder="Enter attendance code"
            value={manualCode}
            onChange={(e) => setManualCode(e.target.value)}
            className="bg-secondary/50 border-border/30 font-mono"
          />
          <Button onClick={handleManualSubmit} variant="gradient">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
