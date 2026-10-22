// Friendly message shown when a chat id does not exist (shared by Quote and Invoice Thread).
import BackButton from '../BackButton'
import EmptyState from '../inbox/EmptyState'

// Prop: message = the text to show
export default function ThreadNotFound({ message }) {
  return (
    <div className="p-4 sm:p-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-2">
          <BackButton />
        </div>
        <div className="rounded-lg border border-line bg-white shadow-sm">
          <EmptyState message={message} />
        </div>
      </div>
    </div>
  )
}