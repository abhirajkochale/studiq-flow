import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { StatCard } from '@/components/dashboard/StatCard';
import { mockFaculty, mockStudentList, mockSchedule } from '@/data/mockData';
import { Users, BookOpen, Clock, TrendingUp, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FacultyDashboard = () => {
  const todayClasses = mockSchedule.filter((s) => s.day === 'Monday' && s.facultyName === mockFaculty.name);

  return (
    <div className="min-h-screen bg-background">
      <Navbar userType="faculty" userName={mockFaculty.name} />

      <main className="pt-20 pb-8 px-4 max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-3xl font-bold mb-2">
            Welcome, <span className="gradient-text">{mockFaculty.name}</span>
          </h1>
          <p className="text-muted-foreground">{mockFaculty.department} Department</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Total Students"
            value={mockStudentList.length}
            subtitle="in your classes"
            icon={Users}
            variant="primary"
            className="animate-slide-up delay-100"
          />
          <StatCard
            title="Subjects Teaching"
            value={mockFaculty.subjects.length}
            icon={BookOpen}
            variant="accent"
            className="animate-slide-up delay-200"
          />
          <StatCard
            title="Today's Classes"
            value={todayClasses.length}
            icon={Clock}
            variant="success"
            className="animate-slide-up delay-300"
          />
          <StatCard
            title="Avg. Attendance"
            value="87%"
            trend="up"
            trendValue="+3% this week"
            icon={TrendingUp}
            className="animate-slide-up delay-400"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Schedule */}
          <div className="glass-card rounded-xl overflow-hidden animate-slide-up delay-500">
            <div className="p-6 border-b border-border/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Today's Classes</h3>
              </div>
              <Link to="/faculty/schedule">
                <Button variant="ghost" size="sm">
                  View All <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
            <div className="divide-y divide-border/20">
              {todayClasses.length > 0 ? (
                todayClasses.map((cls) => (
                  <div key={cls.id} className="p-4 hover:bg-secondary/30 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium">{cls.subjectName}</p>
                        <p className="text-sm text-muted-foreground">{cls.room}</p>
                      </div>
                      <span className="text-sm font-mono text-primary">
                        {cls.startTime} - {cls.endTime}
                      </span>
                    </div>
                    <Link to="/faculty/attendance">
                      <Button variant="outline" size="sm" className="w-full mt-2">
                        Take Attendance
                      </Button>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-muted-foreground">
                  <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No classes scheduled for today</p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="glass-card p-6 rounded-xl animate-slide-up delay-500">
            <h3 className="font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link to="/faculty/attendance" className="block">
                <Button variant="gradient" size="lg" className="w-full justify-start">
                  <Users className="w-5 h-5 mr-3" />
                  Take Roll Call Attendance
                </Button>
              </Link>
              <Link to="/faculty/attendance" className="block">
                <Button variant="glass" size="lg" className="w-full justify-start">
                  <Calendar className="w-5 h-5 mr-3" />
                  Generate QR for Class
                </Button>
              </Link>
              <Link to="/faculty/schedule" className="block">
                <Button variant="outline" size="lg" className="w-full justify-start">
                  <BookOpen className="w-5 h-5 mr-3" />
                  View Teaching Schedule
                </Button>
              </Link>
            </div>

            {/* Subjects */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Your Subjects</h4>
              <div className="flex flex-wrap gap-2">
                {mockFaculty.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Student Overview */}
        <div className="mt-8 glass-card rounded-xl overflow-hidden animate-slide-up">
          <div className="p-6 border-b border-border/30">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Student Overview</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
            {mockStudentList.slice(0, 8).map((student) => (
              <div
                key={student.id}
                className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-medium">
                  {student.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-sm truncate">{student.name}</p>
                  <p className="text-xs text-muted-foreground font-mono">{student.rollNumber}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FacultyDashboard;
