import { Navbar } from '@/components/layout/Navbar';
import { TimetableGrid } from '@/components/schedule/TimetableGrid';
import { mockFaculty, mockSchedule } from '@/data/mockData';

const FacultySchedule = () => {
  // Filter schedule for this faculty
  const facultySchedule = mockSchedule.filter((s) => s.facultyName === mockFaculty.name);

  return (
    <div className="min-h-screen bg-background">
      <Navbar userType="faculty" userName={mockFaculty.name} />

      <main className="pt-20 pb-8 px-4 max-w-7xl mx-auto">
        <div className="mb-8 animate-slide-up">
          <h1 className="text-3xl font-bold mb-2">
            Teaching <span className="gradient-text">Schedule</span>
          </h1>
          <p className="text-muted-foreground">Your weekly class timetable</p>
        </div>

        <div className="animate-slide-up delay-100">
          <TimetableGrid schedule={facultySchedule} />
        </div>

        {/* Legend */}
        <div className="mt-6 glass-card p-4 rounded-xl animate-slide-up delay-200">
          <h4 className="text-sm font-medium mb-3">Your Subjects</h4>
          <div className="flex flex-wrap gap-3">
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
      </main>
    </div>
  );
};

export default FacultySchedule;
