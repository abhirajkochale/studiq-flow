import { Navbar } from '@/components/layout/Navbar';
import { QRScanner } from '@/components/attendance/QRScanner';
import { SelfMarking } from '@/components/attendance/SelfMarking';
import { mockStudent } from '@/data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { QrCode, UserCheck } from 'lucide-react';

const StudentAttendance = () => {
  const handleQRSuccess = (code: string) => {
    console.log('Attendance marked with code:', code);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar userType="student" userName={mockStudent.name} />

      <main className="pt-20 pb-8 px-4 max-w-2xl mx-auto">
        <div className="mb-8 animate-slide-up">
          <h1 className="text-3xl font-bold mb-2">
            Mark <span className="gradient-text">Attendance</span>
          </h1>
          <p className="text-muted-foreground">Scan QR code or self-mark for active sessions</p>
        </div>

        <Tabs defaultValue="qr" className="animate-slide-up delay-100">
          <TabsList className="grid w-full grid-cols-2 bg-secondary/50 p-1 rounded-xl mb-6">
            <TabsTrigger value="qr" className="rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-lg">
              <QrCode className="w-4 h-4 mr-2" />
              QR Scanner
            </TabsTrigger>
            <TabsTrigger value="self" className="rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-lg">
              <UserCheck className="w-4 h-4 mr-2" />
              Self Mark
            </TabsTrigger>
          </TabsList>

          <TabsContent value="qr" className="animate-slide-up">
            <QRScanner onSuccess={handleQRSuccess} />
          </TabsContent>

          <TabsContent value="self" className="animate-slide-up">
            <SelfMarking />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default StudentAttendance;
