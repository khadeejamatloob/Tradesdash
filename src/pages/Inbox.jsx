// // useState React ka "yaddasht" wala tool hai (neeche samjhaya hai)
// import { useState } from 'react'
// // Link = click karne par doosri screen kholne wala (bina page reload)
// import { Link } from 'react-router-dom'
// // Icon
// import { MessageCircle } from 'lucide-react'
// // Apna nakli data aur apna badge
// import { conversations } from '../data/conversations'
// import StatusBadge from '../components/StatusBadge'

// // Filter buttons ki list. "value" andar ka naam hai,
// // "label" wo hai jo screen par likha dikhta hai.
// const tabs = [
//   { value: 'all', label: 'All' },
//   { value: 'quote', label: 'Quotes' },
//   { value: 'invoice', label: 'Invoices' },
//   { value: 'review', label: 'Reviews' },
// ]

// // Ye function batata hai ke kisi chat par click karein to kahan jayen.
// // Handout ke routes ke mutabiq.
// function getLink(c) {
//   if (c.type === 'quote') return `/inbox/quotes/${c.id}`
//   if (c.type === 'invoice') return `/inbox/invoices/${c.id}`
//   return '/inbox/reviews/new'
// }

// export default function Inbox() {
//   // ---------- STATE ----------
//   // useState('all') ek "yaddasht" banata hai.
//   // filter      = abhi ki value (shuru mein 'all')
//   // setFilter   = value badalne ka function
//   // Jab setFilter chalta hai, React screen ko khud dobara banata hai.
//   const [filter, setFilter] = useState('all')

//   // ---------- FILTER ----------
//   // Agar filter 'all' hai to saari chats dikhao,
//   // warna sirf wo jin ka type filter se match kare.
//   // .filter() list se sirf mutabiq cheezein nikalta hai.
//   const shown =
//     filter === 'all'
//       ? conversations
//       : conversations.filter((c) => c.type === filter)

//   return (
//     // Bahar ka dabba: page ka background, andar ki jagah (padding)
//     <div className="min-h-screen bg-page p-4 sm:p-6">
//       {/* Beech mein rakhna, zyada chaura nahi (max-w-2xl) */}
//       <div className="mx-auto max-w-2xl">

//         {/* ---------- UPAR KI PATTI: title aur Templates button ---------- */}
//         <div className="mb-4 flex items-center justify-between">
//           <h1 className="text-2xl font-bold text-navy-700">Inbox</h1>

//           {/* Orange button: handout ka rule: accent = orange bg + navy text */}
//           <Link
//             to="/inbox/templates"
//             className="rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-navy-900"
//           >
//             Templates
//           </Link>
//         </div>

//         {/* ---------- FILTER BUTTONS ---------- */}
//         <div className="mb-4 flex gap-2 overflow-x-auto">
//           {/* .map() list ke har item ke liye ek button banata hai.
//               4 tabs → 4 buttons. */}
//           {tabs.map((t) => (
//             <button
//               key={t.value}  // key: React ko har button alag pehchanne ke liye
//               onClick={() => setFilter(t.value)}  // click par filter badal do
//               className={`min-h-11 rounded-lg px-4 text-sm font-semibold ${
//                 // Agar ye wala tab chuna hua hai to navy, warna safed
//                 filter === t.value
//                   ? 'bg-navy-700 text-white'
//                   : 'border border-line bg-white text-ink'
//               }`}
//             >
//               {t.label}
//             </button>
//           ))}
//         </div>

//         {/* ---------- CHATS KA CARD ---------- */}
//         {/* Handout: card = safed, 1px border, rounded-lg, halka shadow */}
//         <div className="overflow-hidden rounded-lg border border-line bg-white shadow-sm">
//           {shown.length === 0 ? (
//             // EMPTY STATE: agar list khali ho to dosti wala message
//             <div className="flex flex-col items-center gap-2 p-10 text-muted">
//               <MessageCircle size={32} />
//               <p>Koi conversation nahi mili.</p>
//             </div>
//           ) : (
//             // Warna har chat ke liye ek row
//             shown.map((c) => (
//               <Link
//                 key={c.id}
//                 to={getLink(c)}
//                 className="flex items-center gap-3 border-b border-line p-4 last:border-b-0 hover:bg-navy-50"
//               >
//                 {/* Gol dabba jis mein naam ka pehla harf */}
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-50 font-bold text-navy-700">
//                   {/* "Mrs. Khan" mein space ke baad wala harf = K */}
//                   {c.customer.charAt(c.customer.indexOf(' ') + 1)}
//                 </div>

//                 {/* Beech: naam, last message, badge */}
//                 <div className="min-w-0 flex-1">
//                   <div className="flex items-center justify-between gap-2">
//                     <p className="truncate font-semibold text-ink">{c.customer}</p>
//                     <span className="shrink-0 text-xs text-muted">{c.time}</span>
//                   </div>
//                   <p className="truncate text-sm text-muted">{c.lastMessage}</p>
//                   <div className="mt-1">
//                     {/* Apna banaya hua component, prop bheja: status */}
//                     <StatusBadge status={c.status} />
//                   </div>
//                 </div>

//                 {/* Unread badge: sirf tab dikhao jab unread 0 se zyada ho.
//                     "A && B" ka matlab: agar A sach hai to B dikhao. */}
//                 {c.unread > 0 && (
//                   <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-whatsapp px-1.5 text-xs font-bold text-white">
//                     {c.unread}
//                   </span>
//                 )}
//               </Link>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// The Inbox screen (route: /inbox), shown as "WhatsApp Hub" like the mock-up.
// It keeps the selected tab, reads the search text from the address (?q=...),
// and shows the matching chats.
import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { FileText } from 'lucide-react'
import { conversations } from '../data/conversations'
import FilterTabs from '../components/inbox/FilterTabs'
import ChatRow from '../components/inbox/ChatRow'
import EmptyState from '../components/inbox/EmptyState'

// Makes text easy to compare: lowercase, and removes spaces and dots.
// So "Mrs.bibi", "MRS BIBI" and "mrs. bibi" all become "mrsbibi".
function simplify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]/g, '')
}
export default function Inbox() {
  // STATE: which tab is selected
  const [filter, setFilter] = useState('all')

  // SEARCH: the top bar writes the text into the address as ?q=...
  // Here we read it back. Lowercase so "KHAN" and "khan" both match.
  const [params] = useSearchParams()
const query = simplify(params.get('q') || '')

  // Numbers for the heading and the tabs
  const unreadCount = conversations.filter((c) => c.unread > 0).length
  const starredCount = conversations.filter((c) => c.starred).length
  const counts = { all: conversations.length, unread: unreadCount, starred: starredCount }

  // Does this chat belong to the selected tab?
  function matchesFilter(c) {
    if (filter === 'all') return true
    if (filter === 'unread') return c.unread > 0
    if (filter === 'starred') return c.starred
    return c.type === filter // quote, invoice, review
  }

  // Does this chat match the search text (in the name or the message)?
  function matchesSearch(c) {
    if (!query) return true
    return (
      simplify(c.customer).includes(query) ||
      simplify(c.lastMessage).includes(query)
    )
  }

  // A chat is shown only if it passes BOTH checks
  const shown = conversations.filter((c) => matchesFilter(c) && matchesSearch(c))

  return (
    <div className="p-4 sm:p-6">
      <div className="mx-auto max-w-5xl">

        {/* Heading and Template library button */}
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-navy-700">WhatsApp Hub</h1>
            <p className="text-sm text-muted">
              {conversations.length} conversations · {unreadCount} unread
            </p>
          </div>

          <Link
            to="/inbox/templates"
            className="flex min-h-11 items-center gap-2 rounded-lg border border-line bg-white px-4 text-sm font-semibold text-navy-700 shadow-sm hover:bg-navy-50"
          >
            <FileText size={18} />
            Template library
          </Link>
        </div>

        <FilterTabs active={filter} onChange={setFilter} counts={counts} />

        <div className="overflow-hidden rounded-lg border border-line bg-white shadow-sm">
          {shown.length === 0 ? (
            <EmptyState
              message={query ? 'No conversations match your search.' : 'No conversations found.'}
            />
          ) : (
            shown.map((c) => <ChatRow key={c.id} chat={c} />)
          )}
        </div>
      </div>
    </div>
  )
}