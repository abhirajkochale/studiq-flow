import { Student, Faculty, Subject, ScheduleSlot, AttendanceRecord, AttendanceSession } from '@/types';

export const mockStudent: Student = {
  id: 'STU001',
  name: 'Alex Chen',
  email: 'alex.chen@hackathon.edu',
  rollNumber: 'CS2024001',
  department: 'Computer Science',
  semester: 5,
};

export const mockFaculty: Faculty = {
  id: 'FAC001',
  name: 'Dr. Sarah Wilson',
  email: 'sarah.wilson@hackathon.edu',
  department: 'Computer Science',
  subjects: ['Data Structures', 'Algorithms', 'Machine Learning'],
};

export const mockSchedule: ScheduleSlot[] = [
  {
    id: 'SCH001',
    subjectId: 'SUB001',
    subjectName: 'Data Structures',
    facultyName: 'Dr. Sarah Wilson',
    day: 'Monday',
    startTime: '09:00',
    endTime: '10:30',
    room: 'Lab 101',
  },
  {
    id: 'SCH002',
    subjectId: 'SUB002',
    subjectName: 'Machine Learning',
    facultyName: 'Dr. John Smith',
    day: 'Monday',
    startTime: '11:00',
    endTime: '12:30',
    room: 'Room 205',
  },
  {
    id: 'SCH003',
    subjectId: 'SUB003',
    subjectName: 'Web Development',
    facultyName: 'Prof. Emily Brown',
    day: 'Tuesday',
    startTime: '09:00',
    endTime: '10:30',
    room: 'Lab 102',
  },
  {
    id: 'SCH004',
    subjectId: 'SUB004',
    subjectName: 'Algorithms',
    facultyName: 'Dr. Sarah Wilson',
    day: 'Tuesday',
    startTime: '14:00',
    endTime: '15:30',
    room: 'Room 301',
  },
  {
    id: 'SCH005',
    subjectId: 'SUB001',
    subjectName: 'Data Structures',
    facultyName: 'Dr. Sarah Wilson',
    day: 'Wednesday',
    startTime: '10:00',
    endTime: '11:30',
    room: 'Lab 101',
  },
  {
    id: 'SCH006',
    subjectId: 'SUB005',
    subjectName: 'Database Systems',
    facultyName: 'Dr. Michael Lee',
    day: 'Thursday',
    startTime: '09:00',
    endTime: '10:30',
    room: 'Room 202',
  },
  {
    id: 'SCH007',
    subjectId: 'SUB002',
    subjectName: 'Machine Learning',
    facultyName: 'Dr. John Smith',
    day: 'Friday',
    startTime: '11:00',
    endTime: '12:30',
    room: 'Lab 103',
  },
];

export const mockAttendanceRecords: AttendanceRecord[] = [
  { id: 'ATT001', studentId: 'STU001', subjectId: 'SUB001', date: '2024-12-02', status: 'present', markedBy: 'qr', timestamp: '09:05:00' },
  { id: 'ATT002', studentId: 'STU001', subjectId: 'SUB002', date: '2024-12-02', status: 'present', markedBy: 'self', timestamp: '11:02:00' },
  { id: 'ATT003', studentId: 'STU001', subjectId: 'SUB003', date: '2024-12-03', status: 'late', markedBy: 'faculty', timestamp: '09:15:00' },
  { id: 'ATT004', studentId: 'STU001', subjectId: 'SUB004', date: '2024-12-03', status: 'present', markedBy: 'qr', timestamp: '14:00:00' },
  { id: 'ATT005', studentId: 'STU001', subjectId: 'SUB001', date: '2024-12-04', status: 'absent', markedBy: 'faculty', timestamp: '' },
  { id: 'ATT006', studentId: 'STU001', subjectId: 'SUB005', date: '2024-12-05', status: 'present', markedBy: 'self', timestamp: '09:03:00' },
  { id: 'ATT007', studentId: 'STU001', subjectId: 'SUB002', date: '2024-12-06', status: 'present', markedBy: 'qr', timestamp: '11:00:00' },
];

export const mockStudentList: Student[] = [
  { id: 'STU001', name: 'Alex Chen', email: 'alex.chen@hackathon.edu', rollNumber: 'CS2024001', department: 'Computer Science', semester: 5 },
  { id: 'STU002', name: 'Jordan Lee', email: 'jordan.lee@hackathon.edu', rollNumber: 'CS2024002', department: 'Computer Science', semester: 5 },
  { id: 'STU003', name: 'Sam Taylor', email: 'sam.taylor@hackathon.edu', rollNumber: 'CS2024003', department: 'Computer Science', semester: 5 },
  { id: 'STU004', name: 'Riley Morgan', email: 'riley.morgan@hackathon.edu', rollNumber: 'CS2024004', department: 'Computer Science', semester: 5 },
  { id: 'STU005', name: 'Casey Brooks', email: 'casey.brooks@hackathon.edu', rollNumber: 'CS2024005', department: 'Computer Science', semester: 5 },
  { id: 'STU006', name: 'Drew Anderson', email: 'drew.anderson@hackathon.edu', rollNumber: 'CS2024006', department: 'Computer Science', semester: 5 },
  { id: 'STU007', name: 'Morgan Davis', email: 'morgan.davis@hackathon.edu', rollNumber: 'CS2024007', department: 'Computer Science', semester: 5 },
  { id: 'STU008', name: 'Quinn Wilson', email: 'quinn.wilson@hackathon.edu', rollNumber: 'CS2024008', department: 'Computer Science', semester: 5 },
];

export const mockActiveSession: AttendanceSession = {
  id: 'SES001',
  subjectId: 'SUB001',
  subjectName: 'Data Structures',
  facultyId: 'FAC001',
  date: '2024-12-09',
  startTime: '09:00',
  endTime: '10:30',
  qrCode: 'HACK-DS-2024-12-09-001',
  isActive: true,
};
