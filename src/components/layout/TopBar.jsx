// Top white bar: panel label, search box, bell, chat icon, avatar.
// The search box writes its text into the address (?q=...), and the Inbox reads it.
import { Search } from 'lucide-react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import NotificationsMenu from './NotificationsMenu'
import MessagesMenu from './MessagesMenu'

export default function TopBar() {
  const [params, setParams] = useSearchParams()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  // Show the search text only while we are on the Inbox page
  const text = pathname === '/inbox' ? params.get('q') || '' : ''

  function handleChange(e) {
    const value = e.target.value
    if (pathname === '/inbox') {
      // Already on the Inbox: update ?q= (empty text removes it)
      setParams(value ? { q: value } : {}, { replace: true })
    } else if (value) {
      // On another page: jump to the Inbox with the search text
      navigate(`/inbox?q=${encodeURIComponent(value)}`)
    }
  }

  return (
    <header className="sticky top-0 z-10 flex items-center gap-4 border-b border-line bg-white px-4 py-3 sm:px-6">
      {/* Label only, not a button (hidden on small phones) */}
      <span className="hidden rounded-full bg-navy-50 px-3 py-1.5 text-xs font-semibold text-navy-700 sm:block">
        Tradesperson Panel
      </span>

      <div className="relative max-w-md flex-1">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Search conversations..."
          className="min-h-11 w-full rounded-lg border border-line bg-white pl-10 pr-3 text-sm text-ink placeholder:text-muted focus:border-navy-700 focus:outline-none"
        />
      </div>

      <div className="ml-auto flex items-center gap-1">
        <NotificationsMenu />
        <MessagesMenu />
        <div className="ml-2 flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">
          DO
        </div>
      </div>
    </header>
  )
}