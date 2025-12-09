import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { mockStudentList } from '@/data/mockData';
import { Check, X, Search, Save, UserCheck, UserX } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface AttendanceState {
  [studentId: string]: 'present' | 'absent' | 'late' | null;
}

export const RollCall = () => {
  const [attendance, setAttendance] = useState<AttendanceState>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const filteredStudents = mockStudentList.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.rollNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const markStudent = (studentId: string, status: 'present' | 'absent' | 'late') => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: prev[studentId] === status ? null : status,
    }));
  };

  const markAllPresent = () => {
    const newState: AttendanceState = {};
    mockStudentList.forEach((student) => {
      newState[student.id] = 'present';
    });
    setAttendance(newState);
    toast.success('All students marked present');
  };

  const saveAttendance = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      toast.success('Attendance saved successfully!');
    }, 1500);
  };

  const presentCount = Object.values(attendance).filter((s) => s === 'present').length;
  const absentCount = Object.values(attendance).filter((s) => s === 'absent').length;
  const lateCount = Object.values(attendance).filter((s) => s === 'late').length;

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border/30">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search students..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-secondary/50 border-border/30"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={markAllPresent}>
              <UserCheck className="w-4 h-4 mr-2" />
              Mark All Present
            </Button>
            <Button variant="gradient" onClick={saveAttendance} disabled={isSaving}>
              {isSaving ? (
                <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
              ) : (
                <Save className="w-4 h-4 mr-2" />
              )}
              Save
            </Button>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full bg-success" />
            <span className="text-muted-foreground">Present: {presentCount}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <span className="text-muted-foreground">Absent: {absentCount}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full bg-warning" />
            <span className="text-muted-foreground">Late: {lateCount}</span>
          </div>
        </div>
      </div>

      <div className="divide-y divide-border/20">
        {filteredStudents.map((student, index) => (
          <div
            key={student.id}
            className={cn(
              'flex items-center justify-between p-4 transition-all duration-300 hover:bg-secondary/30',
              'animate-slide-up opacity-0'
            )}
            style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-medium text-sm">
                {student.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <p className="font-medium">{student.name}</p>
                <p className="text-sm text-muted-foreground font-mono">{student.rollNumber}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                size="sm"
                variant={attendance[student.id] === 'present' ? 'default' : 'outline'}
                className={cn(
                  attendance[student.id] === 'present' && 'bg-success hover:bg-success/90 border-success'
                )}
                onClick={() => markStudent(student.id, 'present')}
              >
                <Check className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant={attendance[student.id] === 'late' ? 'default' : 'outline'}
                className={cn(
                  attendance[student.id] === 'late' && 'bg-warning hover:bg-warning/90 border-warning text-warning-foreground'
                )}
                onClick={() => markStudent(student.id, 'late')}
              >
                L
              </Button>
              <Button
                size="sm"
                variant={attendance[student.id] === 'absent' ? 'default' : 'outline'}
                className={cn(
                  attendance[student.id] === 'absent' && 'bg-destructive hover:bg-destructive/90 border-destructive'
                )}
                onClick={() => markStudent(student.id, 'absent')}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
