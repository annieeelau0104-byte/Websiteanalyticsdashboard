import { Globe, MapPin, Clock, Calendar } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const hourlyData = [
  { hour: '00:00', visitors: 234 },
  { hour: '03:00', visitors: 156 },
  { hour: '06:00', visitors: 312 },
  { hour: '09:00', visitors: 892 },
  { hour: '12:00', visitors: 1456 },
  { hour: '15:00', visitors: 1823 },
  { hour: '18:00', visitors: 2134 },
  { hour: '21:00', visitors: 1567 },
];

const weeklyData = [
  { day: 'Mon', visitors: 4200, newVisitors: 1680, returning: 2520 },
  { day: 'Tue', visitors: 5100, newVisitors: 2040, returning: 3060 },
  { day: 'Wed', visitors: 4800, newVisitors: 1920, returning: 2880 },
  { day: 'Thu', visitors: 6200, newVisitors: 2480, returning: 3720 },
  { day: 'Fri', visitors: 5800, newVisitors: 2320, returning: 3480 },
  { day: 'Sat', visitors: 3900, newVisitors: 1560, returning: 2340 },
  { day: 'Sun', visitors: 3400, newVisitors: 1360, returning: 2040 },
];

const countries = [
  { name: 'United States', visitors: 8456, percentage: 34.4, flag: '🇺🇸' },
  { name: 'United Kingdom', visitors: 4231, percentage: 17.2, flag: '🇬🇧' },
  { name: 'Canada', visitors: 3102, percentage: 12.6, flag: '🇨🇦' },
  { name: 'Germany', visitors: 2567, percentage: 10.4, flag: '🇩🇪' },
  { name: 'France', visitors: 2034, percentage: 8.3, flag: '🇫🇷' },
  { name: 'Australia', visitors: 1823, percentage: 7.4, flag: '🇦🇺' },
  { name: 'Japan', visitors: 1456, percentage: 5.9, flag: '🇯🇵' },
  { name: 'Other', visitors: 914, percentage: 3.7, flag: '🌍' },
];

const browsers = [
  { name: 'Chrome', share: 62.5, visitors: 15368 },
  { name: 'Safari', share: 18.3, visitors: 4499 },
  { name: 'Firefox', share: 9.2, visitors: 2262 },
  { name: 'Edge', share: 6.8, visitors: 1672 },
  { name: 'Other', share: 3.2, visitors: 786 },
];

export function TrafficAnalytics() {
  return (
    <div className="p-4 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">Website Traffic Analytics</h1>
          <p className="mt-1 text-sm text-gray-500">Detailed traffic patterns and visitor sources</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
            Export Data
          </button>
        </div>
      </div>

      {/* Hourly Traffic */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-5 h-5 text-blue-600" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Traffic by Hour</h2>
            <p className="text-sm text-gray-500">Average visitors throughout the day</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={hourlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="hour" stroke="#9CA3AF" fontSize={12} />
            <YAxis stroke="#9CA3AF" fontSize={12} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            />
            <Bar dataKey="visitors" fill="#3B82F6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Weekly Traffic */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Calendar className="w-5 h-5 text-green-600" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Weekly Traffic Breakdown</h2>
            <p className="text-sm text-gray-500">New vs returning visitors</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="day" stroke="#9CA3AF" fontSize={12} />
            <YAxis stroke="#9CA3AF" fontSize={12} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            />
            <Legend />
            <Line type="monotone" dataKey="visitors" stroke="#3B82F6" strokeWidth={3} dot={{ r: 4 }} name="Total Visitors" />
            <Line type="monotone" dataKey="newVisitors" stroke="#10B981" strokeWidth={3} dot={{ r: 4 }} name="New Visitors" />
            <Line type="monotone" dataKey="returning" stroke="#F59E0B" strokeWidth={3} dot={{ r: 4 }} name="Returning" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Geographic and Browser Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Countries */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-purple-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Top Countries</h2>
              <p className="text-sm text-gray-500">Geographic distribution</p>
            </div>
          </div>
          <div className="space-y-4">
            {countries.map((country) => (
              <div key={country.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{country.flag}</span>
                    <span className="text-sm font-medium text-gray-700">{country.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{country.visitors.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-purple-600 rounded-full transition-all"
                      style={{ width: `${country.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 w-12 text-right">{country.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Browsers */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-6">
            <Globe className="w-5 h-5 text-orange-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Browser Usage</h2>
              <p className="text-sm text-gray-500">Most popular browsers</p>
            </div>
          </div>
          <div className="space-y-5">
            {browsers.map((browser) => (
              <div key={browser.name} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{browser.name}</span>
                    <span className="text-sm text-gray-500">{browser.visitors.toLocaleString()} visitors</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all"
                      style={{ width: `${browser.share}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-semibold text-gray-900">{browser.share}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}