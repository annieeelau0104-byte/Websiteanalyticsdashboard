import { Activity, Users, MapPin, Monitor, Eye } from 'lucide-react';
import { useEffect, useState } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface ActiveUser {
  id: number;
  page: string;
  location: string;
  timeOnPage: number;
  device: string;
}

const initialUsers: ActiveUser[] = [
  { id: 1, page: '/home', location: 'New York, US', timeOnPage: 45, device: 'Desktop' },
  { id: 2, page: '/products', location: 'London, UK', timeOnPage: 120, device: 'Mobile' },
  { id: 3, page: '/about', location: 'Tokyo, JP', timeOnPage: 78, device: 'Desktop' },
  { id: 4, page: '/blog/article-1', location: 'Paris, FR', timeOnPage: 203, device: 'Tablet' },
  { id: 5, page: '/products', location: 'Berlin, DE', timeOnPage: 34, device: 'Desktop' },
  { id: 6, page: '/checkout', location: 'Sydney, AU', timeOnPage: 156, device: 'Mobile' },
  { id: 7, page: '/home', location: 'Toronto, CA', timeOnPage: 67, device: 'Desktop' },
  { id: 8, page: '/contact', location: 'Mumbai, IN', timeOnPage: 91, device: 'Mobile' },
];

const currentPages = [
  { page: '/home', users: 89 },
  { page: '/products', users: 67 },
  { page: '/blog', users: 45 },
  { page: '/checkout', users: 34 },
  { page: '/about', users: 23 },
];

export function RealTimeStats() {
  const [activeUsers, setActiveUsers] = useState(243);
  const [pageViews, setPageViews] = useState(1847);
  const [users, setUsers] = useState<ActiveUser[]>(initialUsers);
  const [chartData, setChartData] = useState(
    Array.from({ length: 20 }, (_, i) => ({ time: i, value: 200 + Math.random() * 100 }))
  );

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update active users count
      setActiveUsers(prev => {
        const change = Math.floor(Math.random() * 10) - 5;
        return Math.max(200, Math.min(300, prev + change));
      });

      // Update page views
      setPageViews(prev => prev + Math.floor(Math.random() * 5));

      // Update chart data
      setChartData(prev => {
        const newData = [...prev.slice(1), { 
          time: prev[prev.length - 1].time + 1, 
          value: 200 + Math.random() * 100 
        }];
        return newData;
      });

      // Occasionally update user activity
      if (Math.random() > 0.7) {
        setUsers(prev => {
          const updated = [...prev];
          const randomIndex = Math.floor(Math.random() * updated.length);
          updated[randomIndex] = {
            ...updated[randomIndex],
            timeOnPage: updated[randomIndex].timeOnPage + 1
          };
          return updated;
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">Real-time Website Activity</h1>
            <div className="flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-700">Live</span>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-500">Monitor your website activity as it happens</p>
        </div>
      </div>

      {/* Real-time Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-green-50">
              <Activity className="w-6 h-6 text-green-600" />
            </div>
            <div className="w-16 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData.slice(-10)}>
                  <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <p className="text-sm text-gray-600">Active Users</p>
          <p className="mt-1 text-3xl font-bold text-gray-900">{activeUsers}</p>
          <p className="mt-1 text-xs text-gray-500">Right now</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-blue-50">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <p className="text-sm text-gray-600">Page Views Today</p>
          <p className="mt-1 text-3xl font-bold text-gray-900">{pageViews.toLocaleString()}</p>
          <p className="mt-1 text-xs text-green-600 font-medium">+12.5% vs yesterday</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-purple-50">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <p className="text-sm text-gray-600">Avg. Session Duration</p>
          <p className="mt-1 text-3xl font-bold text-gray-900">3m 47s</p>
          <p className="mt-1 text-xs text-green-600 font-medium">+8.2% vs yesterday</p>
        </div>
      </div>

      {/* Activity Chart */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Activity in Last Minute</h2>
            <p className="text-sm text-gray-500 mt-1">Live visitor count</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-green-600">{activeUsers}</p>
            <p className="text-xs text-gray-500">Active now</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={chartData}>
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#10B981" 
              strokeWidth={3} 
              dot={false}
              animationDuration={300}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Active Users and Current Pages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Users List */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-blue-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Active Users</h2>
              <p className="text-sm text-gray-500">Current visitor activity</p>
            </div>
          </div>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {users.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate">{user.page}</p>
                    <p className="text-xs text-gray-500">{user.location} · {user.device}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <p className="text-xs text-gray-500">{user.timeOnPage}s</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Pages */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-6">
            <Monitor className="w-5 h-5 text-purple-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Top Active Pages</h2>
              <p className="text-sm text-gray-500">Most viewed pages right now</p>
            </div>
          </div>
          <div className="space-y-4">
            {currentPages.map((page, index) => (
              <div key={page.page} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium text-purple-600">{index + 1}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{page.page}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-900">{page.users}</span>
                  </div>
                </div>
                <div className="ml-11">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-purple-600 rounded-full transition-all"
                      style={{ width: `${(page.users / currentPages[0].users) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}