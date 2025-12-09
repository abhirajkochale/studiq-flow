import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { UserCheck, Clock, MapPin, CheckCircle } from 'lucide-react';
import { mockActiveSession } from '@/data/mockData';
import { toast } from 'sonner';

export const SelfMarking = () => {
  const [isMarked, setIsMarked] = useState(false);
  const [isMarking, setIsMarking] = useState(false);

  const handleMarkAttendance = () => {
    setIsMarking(true);
    setTimeout(() => {
      setIsMarking(false);
      setIsMarked(true);
      toast.success('Attendance marked successfully!');
    }, 1500);
  };

  if (!mockActiveSession.isActive) {
    return (
      <div className="glass-card p-6 rounded-xl text-center">
        <div className="p-4 rounded-full bg-muted inline-flex mb-4">
          <Clock className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold mb-2">No Active Session</h3>
        <p className="text-sm text-muted-foreground">
          There's no class session active right now. Check your schedule for upcoming classes.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg gradient-accent glow-accent">
          <UserCheck className="w-6 h-6 text-accent-foreground" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Self Mark Attendance</h3>
          <p className="text-sm text-muted-foreground">Mark your attendance for the current class</p>
        </div>
      </div>

      <div className="bg-secondary/30 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-primary mb-2">{mockActiveSession.subjectName}</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{mockActiveSession.startTime} - {mockActiveSession.endTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Lab 101</span>
          </div>
        </div>
      </div>

      {isMarked ? (
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-success" />
          </div>
          <div className="text-center">
            <p className="font-semibold text-success">Attendance Marked!</p>
            <p className="text-sm text-muted-foreground">Marked at {new Date().toLocaleTimeString()}</p>
          </div>
        </div>
      ) : (
        <Button
          onClick={handleMarkAttendance}
          variant="gradient"
          size="lg"
          className="w-full"
          disabled={isMarking}
        >
          {isMarking ? (
            <>
              <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
              Marking...
            </>
          ) : (
            <>
              <UserCheck className="w-5 h-5" />
              Mark My Attendance
            </>
          )}
        </Button>
      )}
    </div>
  );
};
