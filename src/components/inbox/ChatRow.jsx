// // One row in the inbox list: avatar, name, last message, status and unread count.
// // All 5 rows use this same code, so editing this file changes every row.
// import { Link } from 'react-router-dom'
// import StatusBadge from '../StatusBadge'
// import UnreadBadge from './UnreadBadge'

// // Decides where to go when a chat is clicked (routes from the handout).
// function getLink(chat) {
//   if (chat.type === 'quote') return `/inbox/quotes/${chat.id}`
//   if (chat.type === 'invoice') return `/inbox/invoices/${chat.id}`
//   return '/inbox/reviews/new'
// }

// // Prop: chat = one conversation object from conversations.js
// export default function ChatRow({ chat }) {
//   return (
//     <Link
//       to={getLink(chat)}
//       className="flex items-center gap-3 border-b border-line p-4 last:border-b-0 hover:bg-navy-50"
//     >
//       {/* Round avatar with the first letter of the surname ("Mrs. Khan" gives K) */}
//       <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-50 font-bold text-navy-700">
//         {chat.customer.charAt(chat.customer.indexOf(' ') + 1)}
//       </div>

//       {/* Middle part: name, time, last message, status */}
//       <div className="min-w-0 flex-1">
//         <div className="flex items-center justify-between gap-2">
//           <p className="truncate font-semibold text-ink">{chat.customer}</p>
//           <span className="shrink-0 text-xs text-muted">{chat.time}</span>
//         </div>
//         <p className="truncate text-sm text-muted">{chat.lastMessage}</p>
//         <div className="mt-1">
//           <StatusBadge status={chat.status} />
//         </div>
//       </div>

//       {/* Green unread number (shows nothing when the count is 0) */}
//       <UnreadBadge count={chat.unread} />
//     </Link>
//   )
// }
// One chat row, styled like the mock-up:
// avatar, name, message, small uppercase label, time, and an orange dot + tint if unread.
import { Link } from 'react-router-dom'
import Avatar from './Avatar'
import UnreadDot from './UnreadDot'
import Stars from './Stars'

// Where to go when a chat is clicked.
// Quote/invoice/review routes are from the handout.
// Job goes to Group 1's Job Detail, certificate goes to the Vault.
export function getLink(chat) {
  if (chat.type === 'quote') return `/inbox/quotes/${chat.id}`
  if (chat.type === 'invoice') return `/inbox/invoices/${chat.id}`
  if (chat.type === 'review') return '/inbox/reviews/new'
  if (chat.type === 'job') return `/jobs/${chat.id}`
  return '/vault'
}

export default function ChatRow({ chat }) {
  const isUnread = chat.unread > 0

  return (
    <Link
      to={getLink(chat)}
      // Unread rows get a light orange background, read rows only change on hover
      className={`flex items-center gap-4 border-b border-line px-5 py-4 last:border-b-0 ${
        isUnread ? 'bg-accent-50' : 'hover:bg-navy-50'
      }`}
    >
      <Avatar name={chat.customer} />

      {/* Middle: name, message, label */}
      <div className="min-w-0 flex-1">
        <p className="truncate font-semibold text-ink">{chat.customer}</p>
        <p className="truncate text-sm text-ink">
          {/* Stars only appear when the chat has a rating (reviews) */}
          {chat.rating && <Stars count={chat.rating} />}
          {chat.lastMessage}
        </p>
        <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted">
          {chat.label}
        </p>
      </div>

      {/* Right: time, and the dot if unread */}
      <div className="flex shrink-0 flex-col items-end gap-2">
        <span className="text-xs text-muted">{chat.time}</span>
        {isUnread ? <UnreadDot /> : <span className="h-2.5" />}
      </div>
    </Link>
  )
}