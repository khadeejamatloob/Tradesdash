// Friendly message shown when a list has nothing to display.
import { MessageCircle } from 'lucide-react'

// { message } is a prop, so other screens can reuse this with their own text.
export default function EmptyState({ message }) {
  return (
    <div className="flex flex-col items-center gap-2 p-10 text-muted">
      <MessageCircle size={32} />
      <p>{message}</p>
    </div>
  )
}