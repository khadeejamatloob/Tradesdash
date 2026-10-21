// Row of filled stars (used for review chats).
import { Star } from 'lucide-react'

// Prop: count = how many stars to show
export default function Stars({ count }) {
  // Array.from makes a list of "count" items, one star for each.
  return (
    <span className="mr-1 inline-flex gap-0.5 align-middle">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-warning text-warning" />
      ))}
    </span>
  )
}