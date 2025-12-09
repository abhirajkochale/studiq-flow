import { Navbar } from '@/components/layout/Navbar';
import { RollCall } from '@/components/attendance/RollCall';
import { QRGenerator } from '@/components/attendance/QRGenerator';
import { mockFaculty, mockActiveSession } from '@/data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, QrCode, Clock, MapPin } from 'lucide-react';

const FacultyAttendance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar userType="faculty" userName={mockFaculty.name} />

      <main className="pt-20 pb-8 px-4 max-w-6xl mx-auto">
        <div className="mb-8 animate-slide-up">
          <h1 className="text-3xl font-bold mb-2">
            Take <span className="gradient-text">Attendance</span>
          </h1>
          <p className="text-muted-foreground">Mark attendance via roll call or generate QR codes</p>
        </div>

        {/* Active Session Info */}
        <div className="glass-card p-4 rounded-xl mb-6 animate-slide-up delay-100">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
              <span className="text-sm font-medium">Active Session</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{mockActiveSession.startTime} - {mockActiveSession.endTime}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Lab 101</span>
            </div>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {mockActiveSession.subjectName}
            </span>
          </div>
        </div>

        <Tabs defaultValue="rollcall" className="animate-slide-up delay-200">
          <TabsList className="grid w-full grid-cols-2 max-w-md bg-secondary/50 p-1 rounded-xl mb-6">
            <TabsTrigger value="rollcall" className="rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-lg">
              <Users className="w-4 h-4 mr-2" />
              Roll Call
            </TabsTrigger>
            <TabsTrigger value="qr" className="rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-lg">
              <QrCode className="w-4 h-4 mr-2" />
              QR Code
            </TabsTrigger>
          </TabsList>

          <TabsContent value="rollcall">
            <RollCall />
          </TabsContent>

          <TabsContent value="qr">
            <div className="max-w-md mx-auto">
              <QRGenerator />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default FacultyAttendance;
