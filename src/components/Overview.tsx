import { Users, Eye, MousePointerClick, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const stats = [
  {
    name: 'Total Visitors',
    value: '24,583',
    change: '+12.5%',
    trend: 'up',
    icon: Users,
    color: 'blue',
  },
  {
    name: 'Page Views',
    value: '82,341',
    change: '+8.2%',
    trend: 'up',
    icon: Eye,
    color: 'green',
  },
  {
    name: 'Bounce Rate',
    value: '42.3%',
    change: '-3.1%',
    trend: 'down',
    icon: MousePointerClick,
    color: 'purple',
  },
  {
    name: 'Avg. Session',
    value: '3m 24s',
    change: '+5.7%',
    trend: 'up',
    icon: TrendingUp,
    color: 'orange',
  },
];

const trafficData = [
  { date: 'Jan 1', visitors: 4200, pageViews: 12400 },
  { date: 'Jan 5', visitors: 5100, pageViews: 14200 },
  { date: 'Jan 10', visitors: 4800, pageViews: 13600 },
  { date: 'Jan 15', visitors: 6200, pageViews: 17800 },
  { date: 'Jan 20', visitors: 5800, pageViews: 16200 },
  { date: 'Jan 25', visitors: 7100, pageViews: 19800 },
  { date: 'Jan 30', visitors: 6800, pageViews: 18900 },
];

const deviceData = [
  { name: 'Desktop', value: 58, color: '#3B82F6' },
  { name: 'Mobile', value: 32, color: '#10B981' },
  { name: 'Tablet', value: 10, color: '#F59E0B' },
];

const topPages = [
  { page: '/home', views: 15234, time: '4m 32s' },
  { page: '/products', views: 12841, time: '3m 18s' },
  { page: '/about', views: 9876, time: '2m 45s' },
  { page: '/blog', views: 7654, time: '5m 12s' },
  { page: '/contact', views: 5432, time: '1m 56s' },
];

const trafficSources = [
  { source: 'Organic Search', visitors: 12450, percentage: 50.7 },
  { source: 'Direct', visitors: 6890, percentage: 28.0 },
  { source: 'Social Media', visitors: 3210, percentage: 13.1 },
  { source: 'Referral', visitors: 2033, percentage: 8.2 },
];

export function Overview() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">Website Overview</h1>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">Your website's performance in the last 30 days</p>
        </div>
        <div className="flex items-center gap-2">
          <select className="w-full sm:w-auto px-3 sm:px-4 py-2.5 sm:py-2 bg-white border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
            <option>This year</option>
          </select>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === 'up' ? ArrowUpRight : ArrowDownRight;
          return (
            <div key={stat.name} className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div className={`p-2 sm:p-3 rounded-lg bg-${stat.color}-50`}>
                  <Icon className={`w-4 h-4 sm:w-6 sm:h-6 text-${stat.color}-600`} />
                </div>
                <div className={`flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <TrendIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">{stat.change}</span>
                </div>
              </div>
              <div className="mt-3 sm:mt-4">
                <p className="text-xs sm:text-sm text-gray-600 truncate">{stat.name}</p>
                <p className="mt-0.5 sm:mt-1 text-lg sm:text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Traffic Trend */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">Website Traffic Trend</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Visitors and page views over time</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={trafficData}>
              <defs>
                <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPageViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" stroke="#9CA3AF" fontSize={10} />
              <YAxis stroke="#9CA3AF" fontSize={10} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '12px' }}
              />
              <Area type="monotone" dataKey="visitors" stroke="#3B82F6" fillOpacity={1} fill="url(#colorVisitors)" strokeWidth={2} />
              <Area type="monotone" dataKey="pageViews" stroke="#10B981" fillOpacity={1} fill="url(#colorPageViews)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-3 sm:mt-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-500"></div>
              <span className="text-xs sm:text-sm text-gray-600">Visitors</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
              <span className="text-xs sm:text-sm text-gray-600">Page Views</span>
            </div>
          </div>
        </div>

        {/* Device Distribution */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">Device Distribution</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Traffic by device type</p>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={75}
                paddingAngle={5}
                dataKey="value"
              >
                {deviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2.5 sm:space-y-3 mt-3 sm:mt-4">
            {deviceData.map((device) => (
              <div key={device.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full" style={{ backgroundColor: device.color }}></div>
                  <span className="text-xs sm:text-sm text-gray-700">{device.name}</span>
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-900">{device.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Top Pages */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">Top Pages</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Most visited pages</p>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {topPages.map((page, index) => (
              <div key={page.page} className="flex items-center justify-between py-2.5 sm:py-3 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                    <span className="text-xs sm:text-sm font-medium text-gray-600">{index + 1}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">{page.page}</p>
                    <p className="text-[10px] sm:text-xs text-gray-500">{page.time} avg. time</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-3 sm:ml-4">
                  <p className="text-xs sm:text-sm font-semibold text-gray-900">{page.views.toLocaleString()}</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">views</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">Traffic Sources</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Where your visitors come from</p>
          </div>
          <div className="space-y-3.5 sm:space-y-4">
            {trafficSources.map((source) => (
              <div key={source.source} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{source.source}</span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-900">{source.visitors.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full transition-all"
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-500 w-10 sm:w-12 text-right">{source.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}