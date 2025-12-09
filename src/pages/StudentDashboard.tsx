import { Navbar } from '@/components/layout/Navbar';
import { StatCard } from '@/components/dashboard/StatCard';
import { AttendanceChart } from '@/components/dashboard/AttendanceChart';
import { mockStudent, mockAttendanceRecords, mockSchedule } from '@/data/mockData';
import { BarChart3, CheckCircle, Clock, AlertTriangle, Calendar, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

const StudentDashboard = () => {
  const totalClasses = mockAttendanceRecords.length;
  const presentClasses = mockAttendanceRecords.filter((r) => r.status === 'present').length;
  const lateClasses = mockAttendanceRecords.filter((r) => r.status === 'late').length;
  const absentClasses = mockAttendanceRecords.filter((r) => r.status === 'absent').length;
  const attendancePercentage = Math.round((presentClasses / totalClasses) * 100);

  const todayClasses = mockSchedule.filter((s) => s.day === 'Monday'); // Simulated today

  const recentAttendance = mockAttendanceRecords.slice(-5).reverse();

  return (
    <div className="min-h-screen bg-background">
      <Navbar userType="student" userName={mockStudent.name} />

      <main className="pt-20 pb-8 px-4 max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, <span className="gradient-text">{mockStudent.name.split(' ')[0]}</span>
          </h1>
          <p className="text-muted-foreground">
            {mockStudent.department} • Semester {mockStudent.semester} • {mockStudent.rollNumber}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Overall Attendance"
            value={`${attendancePercentage}%`}
            icon={BarChart3}
            variant="primary"
            trend={attendancePercentage >= 75 ? 'up' : 'down'}
            trendValue={attendancePercentage >= 75 ? 'Above minimum' : 'Below minimum'}
            className="animate-slide-up delay-100"
          />
          <StatCard
            title="Classes Attended"
            value={presentClasses}
            subtitle={`out of ${totalClasses} classes`}
            icon={CheckCircle}
            variant="success"
            className="animate-slide-up delay-200"
          />
          <StatCard
            title="Late Arrivals"
            value={lateClasses}
            icon={Clock}
            variant="warning"
            className="animate-slide-up delay-300"
          />
          <StatCard
            title="Absences"
            value={absentClasses}
            icon={AlertTriangle}
            variant={absentClasses > 2 ? 'warning' : 'default'}
            className="animate-slide-up delay-400"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart */}
          <div className="lg:col-span-2 animate-slide-up delay-500">
            <AttendanceChart />
          </div>

          {/* Today's Classes */}
          <div className="glass-card p-6 rounded-xl animate-slide-up delay-500">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Today's Classes</h3>
            </div>
            <div className="space-y-3">
              {todayClasses.map((cls, index) => (
                <div
                  key={cls.id}
                  className="p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-medium text-sm">{cls.subjectName}</p>
                    <span className="text-xs font-mono text-muted-foreground">
                      {cls.startTime}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{cls.room}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 glass-card rounded-xl overflow-hidden animate-slide-up">
          <div className="p-6 border-b border-border/30">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Recent Attendance</h3>
            </div>
          </div>
          <div className="divide-y divide-border/20">
            {recentAttendance.map((record) => {
              const subject = mockSchedule.find((s) => s.subjectId === record.subjectId);
              return (
                <div key={record.id} className="p-4 flex items-center justify-between hover:bg-secondary/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        'w-10 h-10 rounded-lg flex items-center justify-center',
                        record.status === 'present' && 'bg-success/20 text-success',
                        record.status === 'late' && 'bg-warning/20 text-warning',
                        record.status === 'absent' && 'bg-destructive/20 text-destructive'
                      )}
                    >
                      {record.status === 'present' && <CheckCircle className="w-5 h-5" />}
                      {record.status === 'late' && <Clock className="w-5 h-5" />}
                      {record.status === 'absent' && <AlertTriangle className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="font-medium">{subject?.subjectName || 'Unknown Subject'}</p>
                      <p className="text-sm text-muted-foreground">{record.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className={cn(
                        'inline-flex px-2 py-1 rounded-full text-xs font-medium',
                        record.status === 'present' && 'bg-success/20 text-success',
                        record.status === 'late' && 'bg-warning/20 text-warning',
                        record.status === 'absent' && 'bg-destructive/20 text-destructive'
                      )}
                    >
                      {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">
                      via {record.markedBy}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
