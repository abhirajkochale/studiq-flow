import { Navbar } from '@/components/layout/Navbar';
import { TimetableGrid } from '@/components/schedule/TimetableGrid';
import { AIScheduler } from '@/components/schedule/AIScheduler';
import { mockStudent, mockSchedule } from '@/data/mockData';

const StudentSchedule = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar userType="student" userName={mockStudent.name} />

      <main className="pt-20 pb-8 px-4 max-w-7xl mx-auto">
        <div className="mb-8 animate-slide-up">
          <h1 className="text-3xl font-bold mb-2">
            Your <span className="gradient-text">Schedule</span>
          </h1>
          <p className="text-muted-foreground">View your weekly timetable and optimize with AI</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 animate-slide-up delay-100">
            <TimetableGrid schedule={mockSchedule} />
          </div>
          <div className="animate-slide-up delay-200">
            <AIScheduler />
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentSchedule;
