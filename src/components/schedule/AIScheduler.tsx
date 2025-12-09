import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Calendar, Clock, Zap } from 'lucide-react';
import { toast } from 'sonner';

export const AIScheduler = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const generateSchedule = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setSuggestions([
        '🎯 Optimized Monday morning for ML sessions - peak focus time',
        '⚡ Grouped practical labs together to reduce context switching',
        '🧠 Added 15-min breaks between intensive subjects',
        '📊 Balanced workload across the week',
      ]);
      toast.success('AI schedule optimization complete!');
    }, 2500);
  };

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg gradient-accent glow-accent animate-pulse-glow">
          <Sparkles className="w-6 h-6 text-accent-foreground" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">AI Schedule Optimizer</h3>
          <p className="text-sm text-muted-foreground">Let AI optimize your timetable</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
          <Clock className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm font-medium">Smart Scheduling</p>
            <p className="text-xs text-muted-foreground">Considers your peak productivity hours</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
          <Zap className="w-5 h-5 text-warning" />
          <div>
            <p className="text-sm font-medium">Energy Management</p>
            <p className="text-xs text-muted-foreground">Balances intensive and light sessions</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
          <Calendar className="w-5 h-5 text-accent" />
          <div>
            <p className="text-sm font-medium">Conflict Resolution</p>
            <p className="text-xs text-muted-foreground">Automatically resolves schedule conflicts</p>
          </div>
        </div>
      </div>

      {suggestions.length > 0 && (
        <div className="mb-6 p-4 bg-success/10 border border-success/30 rounded-lg">
          <p className="text-sm font-medium text-success mb-3">Optimization Results:</p>
          <ul className="space-y-2">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Button
        variant="gradient"
        size="lg"
        className="w-full"
        onClick={generateSchedule}
        disabled={isGenerating}
      >
        {isGenerating ? (
          <>
            <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
            Optimizing Schedule...
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5" />
            Optimize My Schedule
          </>
        )}
      </Button>
    </div>
  );
};
