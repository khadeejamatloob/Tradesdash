// The strip under the header of an invoice chat:
// invoice number, amount, due/overdue/paid text, and the payment link.
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Copy, ExternalLink } from 'lucide-react'

// Decides the text and its colour from the invoice status.
function describe(status, invoice) {
  if (status === 'Paid') return { text: `Paid on ${invoice.paidOn}`, color: 'text-success' }
  if (status === 'Overdue') {
    return { text: `Overdue ${invoice.daysOverdue} days · due ${invoice.dueDate}`, color: 'text-danger' }
  }
  return { text: `Due ${invoice.dueDate}`, color: 'text-muted' }
}

// Props:
//   invoice = { ref, total, dueDate, daysOverdue, paidOn }
//   status  = Draft | Sent | Paid | Overdue
//   payPath = the customer's payment page, e.g. /pay/2 (Customer Payment Portal)
export default function PaymentSummary({ invoice, status, payPath }) {
  // STATE: true for 2 seconds after the link is copied
  const [copied, setCopied] = useState(false)

  const fullLink = `${window.location.origin}${payPath}`
  const info = describe(status, invoice)

  // Copies the link to the clipboard. It is async, so we wait for it with await.
  async function copyLink() {
    try {
      await navigator.clipboard.writeText(fullLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // go back to "Copy link" after 2 seconds
    } catch {
      // Copying can be blocked by the browser; we simply do nothing.
    }
  }

  return (
    <div className="border-b border-line bg-navy-50 px-4 py-3 sm:px-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs font-semibold text-navy-700">{invoice.ref}</p>
          <p className="text-lg font-bold text-navy-700">{invoice.total}</p>
        </div>
        <p className={`text-sm font-semibold ${info.color}`}>{info.text}</p>
      </div>

      {/* The payment link is only needed while the invoice is unpaid */}
      {status !== 'Paid' && (
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <p className="min-w-0 flex-1 basis-40 truncate rounded-lg border border-line bg-white px-3 py-2.5 text-xs text-muted">
            {fullLink}
          </p>
          <button
            onClick={copyLink}
            className="flex min-h-11 items-center gap-2 rounded-lg border border-line bg-white px-3 text-sm font-semibold text-navy-700 hover:bg-navy-50"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied' : 'Copy link'}
          </button>
          <Link
            to={payPath}
            className="flex min-h-11 items-center gap-2 rounded-lg border border-line bg-white px-3 text-sm font-semibold text-navy-700 hover:bg-navy-50"
          >
            <ExternalLink size={16} />
            Open
          </Link>
        </div>
      )}
    </div>
  )
}