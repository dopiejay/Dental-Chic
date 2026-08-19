import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAdminAuth } from '../context/AdminAuthContext';
import ToothIcon from '../../components/ToothIcon';

const navItems = [
  { to: '/admin', label: 'Dashboard', icon: '🏠', end: true },
  { to: '/admin/appointments', label: 'Appointments', icon: '📅' },
];

export default function AdminLayout() {
  const { auth, logout } = useAdminAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-paper">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-stone bg-white transition-transform md:static md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center gap-2 border-b border-stone px-6 py-5 font-display text-lg font-medium">
          <ToothIcon className="text-chic-teal" size={24} />
          Dental<em className="not-italic text-chic-green">Chic</em>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-5">
          <p className="px-3 pb-2 text-[0.7rem] font-bold tracking-[0.1em] text-slate uppercase">Clinic</p>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                  isActive ? 'bg-ink text-white' : 'text-ink/80 hover:bg-stone'
                }`
              }
            >
              <span>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-stone px-6 py-4">
          <p className="mb-2 truncate text-[0.8rem] text-slate">{auth?.email}</p>
          <button
            onClick={logout}
            className="w-full rounded-lg border border-stone px-3 py-2 text-left text-sm font-semibold transition-colors hover:bg-stone"
          >
            Log Out
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <button
          aria-label="Close menu"
          className="fixed inset-0 z-30 bg-ink/30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 md:pl-0">
        <header className="sticky top-0 z-20 flex items-center gap-4 border-b border-stone bg-white/90 px-5 py-3.5 backdrop-blur md:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setSidebarOpen(true)}
            className="flex flex-col gap-1.5 p-1.5"
          >
            <span className="h-0.5 w-5.5 rounded bg-ink" />
            <span className="h-0.5 w-5.5 rounded bg-ink" />
            <span className="h-0.5 w-5.5 rounded bg-ink" />
          </button>
          <span className="font-display font-medium">Dental Chic Admin</span>
        </header>

        <main className="p-6 md:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
