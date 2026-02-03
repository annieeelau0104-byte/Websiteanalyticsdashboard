import { MousePointer2, Clock, ArrowRightLeft, Target } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const sessionDurationData = [
  { duration: '0-30s', users: 3421 },
  { duration: '31-60s', users: 5234 },
  { duration: '1-3m', users: 7845 },
  { duration: '3-5m', users: 4567 },
  { duration: '5-10m', users: 2341 },
  { duration: '10m+', users: 1175 },
];

const pageDepthData = [
  { pages: '1 page', users: 8234, percentage: 33.5 },
  { pages: '2 pages', users: 6892, percentage: 28.0 },
  { pages: '3-5 pages', users: 5678, percentage: 23.1 },
  { pages: '6-10 pages', users: 2456, percentage: 10.0 },
  { pages: '11+ pages', users: 1323, percentage: 5.4 },
];

const engagementData = [
  { time: 'Week 1', avgTime: 142, bounceRate: 45 },
  { time: 'Week 2', avgTime: 156, bounceRate: 43 },
  { time: 'Week 3', avgTime: 168, bounceRate: 41 },
  { time: 'Week 4', avgTime: 189, bounceRate: 39 },
];

const conversionFunnel = [
  { stage: 'Landing Page', users: 24583, percentage: 100, dropOff: 0 },
  { stage: 'Product View', users: 18437, percentage: 75, dropOff: 25 },
  { stage: 'Add to Cart', users: 9219, percentage: 37.5, dropOff: 50 },
  { stage: 'Checkout', users: 5530, percentage: 22.5, dropOff: 40 },
  { stage: 'Purchase', users: 2765, percentage: 11.3, dropOff: 50 },
];

const exitPages = [
  { page: '/checkout', exits: 4231, rate: 34.2 },
  { page: '/pricing', exits: 3456, rate: 28.0 },
  { page: '/product-details', exits: 2890, rate: 23.4 },
  { page: '/about', exits: 1234, rate: 10.0 },
  { page: '/blog', exits: 545, rate: 4.4 },
];

export function UserBehavior() {
  return (
    <div className="p-4 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">Website User Behavior</h1>
          <p className="mt-1 text-sm text-gray-500">Understanding how visitors interact with your website</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-blue-700" />
            <span className="text-sm font-medium text-blue-900">Avg. Session</span>
          </div>
          <p className="text-3xl font-bold text-blue-900">3m 24s</p>
          <p className="text-xs text-blue-700 mt-1">+12% from last week</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="flex items-center gap-3 mb-2">
            <ArrowRightLeft className="w-5 h-5 text-green-700" />
            <span className="text-sm font-medium text-green-900">Pages/Session</span>
          </div>
          <p className="text-3xl font-bold text-green-900">4.2</p>
          <p className="text-xs text-green-700 mt-1">+8% from last week</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center gap-3 mb-2">
            <MousePointer2 className="w-5 h-5 text-purple-700" />
            <span className="text-sm font-medium text-purple-900">Bounce Rate</span>
          </div>
          <p className="text-3xl font-bold text-purple-900">42.3%</p>
          <p className="text-xs text-purple-700 mt-1">-3% from last week</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
          <div className="flex items-center gap-3 mb-2">
            <Target className="w-5 h-5 text-orange-700" />
            <span className="text-sm font-medium text-orange-900">Conversion Rate</span>
          </div>
          <p className="text-3xl font-bold text-orange-900">11.3%</p>
          <p className="text-xs text-orange-700 mt-1">+2% from last week</p>
        </div>
      </div>

      {/* Session Duration and Page Depth */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Session Duration */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Session Duration</h2>
            <p className="text-sm text-gray-500 mt-1">How long users stay on your site</p>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={sessionDurationData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" stroke="#9CA3AF" fontSize={12} />
              <YAxis dataKey="duration" type="category" stroke="#9CA3AF" fontSize={12} width={80} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Bar dataKey="users" fill="#3B82F6" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Page Depth */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Page Depth</h2>
            <p className="text-sm text-gray-500 mt-1">Number of pages viewed per session</p>
          </div>
          <div className="space-y-4">
            {pageDepthData.map((item, index) => (
              <div key={item.pages} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{item.pages}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">{item.users.toLocaleString()} users</span>
                    <span className="text-sm font-semibold text-gray-900 w-12 text-right">{item.percentage}%</span>
                  </div>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all ${
                      index === 0 ? 'bg-blue-600' :
                      index === 1 ? 'bg-blue-500' :
                      index === 2 ? 'bg-blue-400' :
                      index === 3 ? 'bg-blue-300' : 'bg-blue-200'
                    }`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engagement Trend */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Engagement Trend</h2>
          <p className="text-sm text-gray-500 mt-1">Average time on site vs bounce rate</p>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={engagementData}>
            <defs>
              <linearGradient id="colorAvgTime" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorBounce" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
            <YAxis stroke="#9CA3AF" fontSize={12} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            />
            <Area type="monotone" dataKey="avgTime" stroke="#10B981" fillOpacity={1} fill="url(#colorAvgTime)" strokeWidth={2} name="Avg Time (seconds)" />
            <Area type="monotone" dataKey="bounceRate" stroke="#EF4444" fillOpacity={1} fill="url(#colorBounce)" strokeWidth={2} name="Bounce Rate (%)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Conversion Funnel and Exit Pages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conversion Funnel */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Conversion Funnel</h2>
            <p className="text-sm text-gray-500 mt-1">User journey through conversion stages</p>
          </div>
          <div className="space-y-4">
            {conversionFunnel.map((stage, index) => (
              <div key={stage.stage}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{stage.stage}</span>
                  <span className="text-sm text-gray-500">{stage.users.toLocaleString()} users</span>
                </div>
                <div className="relative">
                  <div className="h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-between px-4 transition-all" style={{ width: `${stage.percentage}%` }}>
                    <span className="text-white font-semibold">{stage.percentage}%</span>
                  </div>
                  {index < conversionFunnel.length - 1 && stage.dropOff > 0 && (
                    <div className="absolute right-0 top-0 bottom-0 flex items-center">
                      <span className="text-xs text-red-600 font-medium bg-red-50 px-2 py-1 rounded">-{stage.dropOff}%</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exit Pages */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Top Exit Pages</h2>
            <p className="text-sm text-gray-500 mt-1">Pages where users leave your site</p>
          </div>
          <div className="space-y-4">
            {exitPages.map((page, index) => (
              <div key={page.page} className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                  <span className="text-sm font-medium text-red-600">{index + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{page.page}</p>
                  <div className="mt-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-red-500 rounded-full"
                      style={{ width: `${page.rate}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-semibold text-gray-900">{page.exits}</p>
                  <p className="text-xs text-gray-500">{page.rate}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}