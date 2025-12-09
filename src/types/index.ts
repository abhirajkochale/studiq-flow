export interface Student {
  id: string;
  name: string;
  email: string;
  rollNumber: string;
  department: string;
  semester: number;
  avatar?: string;
}

export interface Faculty {
  id: string;
  name: string;
  email: string;
  department: string;
  subjects: string[];
  avatar?: string;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  facultyId: string;
  schedule: ScheduleSlot[];
}

export interface ScheduleSlot {
  id: string;
  subjectId: string;
  subjectName: string;
  facultyName: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
  startTime: string;
  endTime: string;
  room: string;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  subjectId: string;
  date: string;
  status: 'present' | 'absent' | 'late';
  markedBy: 'self' | 'qr' | 'faculty';
  timestamp: string;
}

export interface AttendanceSession {
  id: string;
  subjectId: string;
  subjectName: string;
  facultyId: string;
  date: string;
  startTime: string;
  endTime: string;
  qrCode?: string;
  isActive: boolean;
}
