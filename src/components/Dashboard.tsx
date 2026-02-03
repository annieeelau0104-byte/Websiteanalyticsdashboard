import { Outlet, Link, useLocation } from 'react-router';
import { BarChart3, Users, Activity, Clock, Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';

export function Dashboard() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Overview', href: '/', icon: BarChart3 },
    { name: 'Traffic', href: '/traffic', icon: Activity },
    { name: 'User Behavior', href: '/behavior', icon: Users },
    { name: 'Real-time', href: '/realtime', icon: Clock },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col bg-white border-r border-gray-200">
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
          <div className="flex flex-col px-6 mb-8">
            <div className="flex items-center">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold text-gray-900">WebAnalytics</span>
              </div>
            </div>
            <div className="mt-3 pl-1">
              <p className="text-xs text-gray-500">Website Performance</p>
              <p className="text-sm font-medium text-blue-600">www.yoursite.com</p>
            </div>
          </div>
          <nav className="flex-1 px-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2.5 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-blue-600 rounded-lg">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold text-gray-900">WebAnalytics</span>
              <p className="text-xs text-gray-500">www.yoursite.com</p>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-white pt-16">
          <nav className="px-4 py-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center px-3 py-3 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      {/* Main content */}
      <div className="lg:pl-64">
        <main className="pt-16 lg:pt-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}