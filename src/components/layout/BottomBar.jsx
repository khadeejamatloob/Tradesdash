// Bottom navigation bar for phones (handout: bottom bar on mobile).
import { NavLink } from 'react-router-dom'
import { Home, Briefcase, FileText, MessageCircle, Settings } from 'lucide-react'

const items = [
  { label: 'Home', to: '/dashboard', icon: Home },
  { label: 'Jobs', to: '/jobs', icon: Briefcase },
  { label: 'Invoices', to: '/invoices', icon: FileText },
  { label: 'Inbox', to: '/inbox', icon: MessageCircle },
  { label: 'Settings', to: '/settings', icon: Settings },
]

export default function BottomBar() {
  return (
    // "md:hidden" = visible on phones only
    <nav className="fixed inset-x-0 bottom-0 z-20 flex border-t border-white/10 bg-navy-900 md:hidden">
      {items.map(({ label, to, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex min-h-14 flex-1 flex-col items-center justify-center gap-0.5 text-xs font-semibold ${
              isActive ? 'text-accent' : 'text-white/70'
            }`
          }
        >
          <Icon size={22} />
          {label}
        </NavLink>
      ))}
    </nav>
  )
}