import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, QrCode, Calendar, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

const Index = () => {
  const features = [
    { icon: QrCode, title: 'QR Attendance', description: 'Instant check-in with QR codes' },
    { icon: Users, title: 'Roll Call', description: 'Faculty-managed attendance' },
    { icon: Calendar, title: 'Smart Schedule', description: 'AI-optimized timetables' },
    { icon: Sparkles, title: 'Self Marking', description: 'Student self check-in' },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(to right, hsl(222 47% 15% / 0.3) 1px, transparent 1px), linear-gradient(to bottom, hsl(222 47% 15% / 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center glow-primary animate-glow">
              <GraduationCap className="w-7 h-7 text-primary-foreground" />
            </div>
            <span className="font-bold text-2xl font-mono gradient-text">HackTrack</span>
          </div>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-slide-up">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Attendance System</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up delay-100">
              Track Attendance
              <span className="gradient-text block">Effortlessly</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-200">
              Modern attendance management for hackathons and educational institutions. 
              QR scanning, self-marking, and AI-powered scheduling in one platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
              <Link to="/student">
                <Button variant="gradient" size="xl" className="w-full sm:w-auto group">
                  <GraduationCap className="w-5 h-5" />
                  Student Dashboard
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/faculty">
                <Button variant="glass" size="xl" className="w-full sm:w-auto group">
                  <Users className="w-5 h-5" />
                  Faculty Dashboard
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="glass-card p-6 rounded-xl hover:border-primary/30 transition-all duration-300 hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '99.9%', label: 'Uptime' },
              { value: '<1s', label: 'Check-in Time' },
              { value: '500+', label: 'Institutions' },
              { value: '1M+', label: 'Records/Day' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <p className="text-3xl md:text-4xl font-bold font-mono gradient-text">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 HackTrack. Built for hackathons with ❤️
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-success" />
              All systems operational
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
