// The chat icon and its dropdown showing the latest conversations.
// It reuses the same data as the Inbox, so both always agree.
import { Link } from 'react-router-dom'
import { MessageSquare } from 'lucide-react'
import HeaderMenu from './HeaderMenu'
import Avatar from '../inbox/Avatar'
import { getLink } from '../inbox/ChatRow'
import { conversations } from '../../data/conversations'

export default function MessagesMenu() {
  const unread = conversations.filter((c) => c.unread > 0).length
  // The data is newest first, so the first 5 are the latest chats
  const latest = conversations.slice(0, 5)

  return (
    <HeaderMenu
      icon={MessageSquare}
      label="Messages"
      showDot={unread > 0}
      title={unread > 0 ? `Messages (${unread} unread)` : 'Messages'}
    >
      {latest.map((c) => (
        <Link
          key={c.id}
          to={getLink(c)}
          className={`flex items-center gap-3 border-b border-line px-4 py-3 ${
            c.unread > 0 ? 'bg-accent-50' : 'hover:bg-navy-50'
          }`}
        >
          <Avatar name={c.customer} />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-ink">{c.customer}</p>
            <p className="truncate text-sm text-muted">{c.lastMessage}</p>
          </div>
          <span className="shrink-0 text-xs text-muted">{c.time}</span>
        </Link>
      ))}

      {/* Link to the full Inbox */}
      <Link
        to="/inbox"
        className="flex min-h-11 items-center justify-center text-sm font-semibold text-navy-700 hover:bg-navy-50"
      >
        Open WhatsApp Hub
      </Link>
    </HeaderMenu>
  )
}