import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { QrCode, RefreshCw, Copy, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export const QRGenerator = () => {
  const [qrCode, setQrCode] = useState('');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [copied, setCopied] = useState(false);

  const generateCode = () => {
    const code = `HACK-DS-${new Date().toISOString().split('T')[0]}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    setQrCode(code);
    setTimeLeft(300);
  };

  useEffect(() => {
    generateCode();
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      generateCode();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const copyCode = () => {
    navigator.clipboard.writeText(qrCode);
    setCopied(true);
    toast.success('Code copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg gradient-primary glow-primary">
          <QrCode className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Session QR Code</h3>
          <p className="text-sm text-muted-foreground">Students can scan to mark attendance</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        {/* QR Code Display Area */}
        <div className="relative">
          <div className="w-48 h-48 bg-foreground rounded-xl p-4 flex items-center justify-center">
            {/* Simulated QR pattern */}
            <div className="grid grid-cols-8 gap-1 w-full h-full">
              {Array.from({ length: 64 }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-sm ${Math.random() > 0.5 ? 'bg-background' : 'bg-transparent'}`}
                />
              ))}
            </div>
          </div>
          
          {/* Timer overlay */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-card px-4 py-1 rounded-full border border-border/30">
            <span className={`font-mono text-sm ${timeLeft < 60 ? 'text-destructive' : 'text-muted-foreground'}`}>
              Expires in {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        {/* Code Display */}
        <div className="w-full bg-secondary/30 rounded-lg p-4">
          <p className="text-xs text-muted-foreground mb-1">Attendance Code</p>
          <div className="flex items-center justify-between gap-2">
            <code className="font-mono text-lg text-primary">{qrCode}</code>
            <Button size="sm" variant="ghost" onClick={copyCode}>
              {copied ? <CheckCircle className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        <Button variant="outline" onClick={generateCode} className="w-full">
          <RefreshCw className="w-4 h-4 mr-2" />
          Generate New Code
        </Button>
      </div>
    </div>
  );
};
