// One item in the chat, WhatsApp style:
//  - my message: green, on the right, with ticks
//  - customer message: white, on the left
//  - system note: small grey pill in the middle
import { Link } from 'react-router-dom'
import { Check, CheckCheck } from 'lucide-react'

// Ticks after my messages: one grey tick = sent, two grey = delivered, two blue = read.
function Ticks({ state }) {
  if (state === 'sent') return <Check size={14} className="text-wa-grey" />
  if (state === 'delivered') return <CheckCheck size={14} className="text-wa-grey" />
  return <CheckCheck size={14} className="text-wa-tick" />
}

// Props:
//   message = { from, text, time, ticks, card }
//   cardTo  = where the quote card inside the bubble opens
export default function MessageBubble({ message, cardTo }) {
  // System note (for example "Job auto-created from this quote")
  if (message.from === 'system') {
    return (
      <div className="flex justify-center">
        <span className="rounded-full bg-black/5 px-3 py-1 text-[11px] text-muted">
          {message.text}
        </span>
      </div>
    )
  }

  const isMine = message.from === 'tradesperson'

  return (
    <div className={`flex ${isMine ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-lg px-3 py-2 text-sm text-ink shadow-sm ${
          isMine ? 'rounded-tr-sm bg-wa-out' : 'rounded-tl-sm bg-white'
        }`}
      >
        {/* Quote card inside the bubble (clicking it opens the quote) */}
        {message.card && (
          <Link
            to={cardTo}
            className="mb-1.5 block rounded border border-line bg-white p-2 hover:bg-navy-50"
          >
            <p className="text-[11px] font-bold text-navy-700">{message.card.title}</p>
            <p className="text-base font-bold text-accent">{message.card.total}</p>
          </Link>
        )}

        <p className="whitespace-pre-wrap">{message.text}</p>

        {/* Time, and ticks for my messages only */}
        <p className="mt-1 flex items-center justify-end gap-1 text-[11px] text-wa-time">
          {message.time}
          {isMine && <Ticks state={message.ticks || 'read'} />}
        </p>
      </div>
    </div>
  )
}