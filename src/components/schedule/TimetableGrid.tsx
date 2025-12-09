import { ScheduleSlot } from '@/types';
import { cn } from '@/lib/utils';
import { Clock, MapPin } from 'lucide-react';

interface TimetableGridProps {
  schedule: ScheduleSlot[];
  onSlotClick?: (slot: ScheduleSlot) => void;
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

const subjectColors: Record<string, string> = {
  'Data Structures': 'bg-primary/20 border-primary/40 text-primary',
  'Machine Learning': 'bg-accent/20 border-accent/40 text-accent',
  'Web Development': 'bg-success/20 border-success/40 text-success',
  'Algorithms': 'bg-warning/20 border-warning/40 text-warning',
  'Database Systems': 'bg-destructive/20 border-destructive/40 text-destructive',
};

export const TimetableGrid = ({ schedule, onSlotClick }: TimetableGridProps) => {
  const getSlotForDayAndTime = (day: string, time: string): ScheduleSlot | undefined => {
    return schedule.find(
      (slot) =>
        slot.day === day &&
        slot.startTime <= time &&
        slot.endTime > time
    );
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b border-border/30">
              <th className="p-4 text-left text-sm font-medium text-muted-foreground w-20">
                Time
              </th>
              {days.map((day) => (
                <th
                  key={day}
                  className="p-4 text-center text-sm font-medium text-muted-foreground"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((time) => (
              <tr key={time} className="border-b border-border/20">
                <td className="p-4 text-sm font-mono text-muted-foreground">
                  {time}
                </td>
                {days.map((day) => {
                  const slot = getSlotForDayAndTime(day, time);
                  const isStartTime = slot?.startTime === time;

                  if (slot && !isStartTime) {
                    return <td key={`${day}-${time}`} className="p-2" />;
                  }

                  return (
                    <td key={`${day}-${time}`} className="p-2">
                      {slot && isStartTime && (
                        <div
                          onClick={() => onSlotClick?.(slot)}
                          className={cn(
                            'p-3 rounded-lg border cursor-pointer transition-all duration-300 hover:scale-[1.02]',
                            subjectColors[slot.subjectName] || 'bg-secondary/50 border-border/30'
                          )}
                        >
                          <p className="font-medium text-sm">{slot.subjectName}</p>
                          <div className="flex items-center gap-1 mt-1 text-xs opacity-80">
                            <Clock className="w-3 h-3" />
                            {slot.startTime} - {slot.endTime}
                          </div>
                          <div className="flex items-center gap-1 mt-1 text-xs opacity-80">
                            <MapPin className="w-3 h-3" />
                            {slot.room}
                          </div>
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
