// Back button used on every opened page (threads and "not built yet" pages).
// It goes back to the exact page we came from (same tab, same search).
// If the page was opened directly (no earlier page), it goes to "fallback".
import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

// Props:
//   fallback = where to go when there is no history
//   label    = the text on the button
export default function BackButton({ fallback = '/inbox', label = 'Back' }) {
  const navigate = useNavigate()
  const location = useLocation()

  function goBack() {
    if (location.key !== 'default') navigate(-1)
    else navigate(fallback)
  }

  return (
    <button
      onClick={goBack}
      className="flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-semibold text-navy-700 hover:bg-navy-50"
    >
      <ArrowLeft size={18} />
      {label}
    </button>
  )
}