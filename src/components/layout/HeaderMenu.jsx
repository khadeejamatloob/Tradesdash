// A reusable icon button that opens a small dropdown panel (used by the bell and the chat icon).
// It closes when you click outside it or press Escape.
import { useEffect, useRef, useState } from 'react'

// Props:
//   icon    = the icon component to show on the button
//   label   = accessibility name of the button
//   showDot = true shows the small orange dot on the icon
//   title   = heading inside the panel
//   action  = optional element on the right of the heading (e.g. "Mark all as read")
//   children = the content of the panel
export default function HeaderMenu({ icon: Icon, label, showDot, title, action, children }) {
  // STATE: is the panel open?
  const [open, setOpen] = useState(false)
  // REF: a handle to the wrapper, so we can tell if a click happened outside it
  const boxRef = useRef(null)

  // While the panel is open, listen for outside clicks and the Escape key.
  useEffect(() => {
    if (!open) return

    function handleClick(e) {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false)
    }
    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    // Cleanup: remove the listeners when the panel closes
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  return (
    <div ref={boxRef} className="relative">
      <button
        aria-label={label}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className={`relative flex h-11 w-11 items-center justify-center rounded-lg text-navy-700 hover:bg-navy-50 ${
          open ? 'bg-navy-50' : ''
        }`}
      >
        <Icon size={22} />
        {showDot && <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent" />}
      </button>

      {open && (
        // Phone: fixed panel across the screen. Bigger screens: panel under the button.
        <div className="fixed inset-x-4 top-16 z-30 overflow-hidden rounded-lg border border-line bg-white shadow-lg sm:absolute sm:inset-x-auto sm:right-0 sm:top-full sm:mt-2 sm:w-96">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <p className="font-semibold text-navy-700">{title}</p>
            {action}
          </div>
          {/* Clicking an item inside closes the panel */}
          <div onClick={() => setOpen(false)} className="max-h-96 overflow-y-auto">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}