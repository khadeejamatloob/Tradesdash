// // Row of filter buttons: All / Quotes / Invoices / Reviews.
// // To change button colours or size, edit only this file.

// // The list of buttons. "value" is used inside the code,
// // "label" is the text shown on screen.
// const tabs = [
//   { value: 'all', label: 'All' },
//   { value: 'quote', label: 'Quotes' },
//   { value: 'invoice', label: 'Invoices' },
//   { value: 'review', label: 'Reviews' },
// ]

// // Props:
// //   active   = the currently selected filter value
// //   onChange = a function to call when a button is clicked
// export default function FilterTabs({ active, onChange }) {
//   return (
//     <div className="mb-4 flex gap-2 overflow-x-auto">
//       {/* .map() makes one button for each item in the tabs list */}
//       {tabs.map((t) => (
//         <button
//           key={t.value} // key helps React tell the buttons apart
//           onClick={() => onChange(t.value)} // tell the parent which filter was clicked
//           className={`min-h-11 rounded-lg px-4 text-sm font-semibold ${
//             // Selected tab = navy, other tabs = white with a border
//             active === t.value
//               ? 'bg-navy-700 text-white'
//               : 'border border-line bg-white text-ink'
//           }`}
//         >
//           {t.label}
//         </button>
//       ))}
//     </div>
//   )
// }
// Underline-style tabs: All (8) / Unread (3) / Quotes / Invoices / Reviews / Starred (0).
// The selected tab gets an orange underline. Edit only this file to change tabs.

// showCount: true = show the number in brackets after the label
const tabs = [
  { value: 'all', label: 'All', showCount: true },
  { value: 'unread', label: 'Unread', showCount: true },
  { value: 'quote', label: 'Quotes' },
  { value: 'invoice', label: 'Invoices' },
  { value: 'review', label: 'Reviews' },
  { value: 'starred', label: 'Starred', showCount: true },
]

// Props:
//   active   = currently selected tab value
//   onChange = function to call with the new value when a tab is clicked
//   counts   = object with the numbers, e.g. { all: 8, unread: 3, starred: 0 }
export default function FilterTabs({ active, onChange, counts }) {
  return (
    <div className="mb-4 flex gap-1 overflow-x-auto border-b border-line">
      {tabs.map((t) => {
        const isActive = active === t.value
        return (
          <button
            key={t.value}
            onClick={() => onChange(t.value)}
            // -mb-px makes the orange underline sit on top of the grey line
            className={`-mb-px min-h-11 shrink-0 border-b-2 px-4 text-sm font-semibold ${
              isActive
                ? 'border-accent text-accent'
                : 'border-transparent text-muted hover:text-navy-700'
            }`}
          >
            {t.label}
            {t.showCount ? ` (${counts[t.value]})` : ''}
          </button>
        )
      })}
    </div>
  )
}