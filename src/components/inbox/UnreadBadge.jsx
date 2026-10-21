// Green round badge showing the number of unread messages.
// To change its colour or size, edit only this file.

// { count } is a prop: how many unread messages.
export default function UnreadBadge({ count }) {
  // If there is nothing unread, show nothing.
  if (count <= 0) return null

  return (
    <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-whatsapp px-1.5 text-xs font-bold text-white">
      {count}
    </span>
  )
}