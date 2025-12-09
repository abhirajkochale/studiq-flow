import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { week: 'Week 1', attendance: 92 },
  { week: 'Week 2', attendance: 88 },
  { week: 'Week 3', attendance: 95 },
  { week: 'Week 4', attendance: 85 },
  { week: 'Week 5', attendance: 90 },
  { week: 'Week 6', attendance: 93 },
  { week: 'Week 7', attendance: 97 },
];

export const AttendanceChart = () => {
  return (
    <div className="glass-card p-6 rounded-xl">
      <h3 className="text-lg font-semibold mb-4">Attendance Trend</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="attendanceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(187, 100%, 50%)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="hsl(187, 100%, 50%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 47%, 18%)" />
            <XAxis
              dataKey="week"
              stroke="hsl(215, 20%, 55%)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="hsl(215, 20%, 55%)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              domain={[70, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(222, 47%, 10%)',
                border: '1px solid hsl(222, 47%, 18%)',
                borderRadius: '8px',
                color: 'hsl(210, 40%, 98%)',
              }}
              formatter={(value: number) => [`${value}%`, 'Attendance']}
            />
            <Area
              type="monotone"
              dataKey="attendance"
              stroke="hsl(187, 100%, 50%)"
              strokeWidth={2}
              fill="url(#attendanceGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
