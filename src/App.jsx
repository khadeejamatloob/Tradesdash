import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import BackButton from './components/BackButton'
import Inbox from './pages/Inbox'
import QuoteThread from './pages/QuoteThread'
import InvoiceThread from './pages/InvoiceThread'

// Empty screen for pages that are not built yet. It has a Back button.
function Placeholder({ title }) {
  return (
    <div className="p-4 sm:p-6">
      <BackButton />
      <h1 className="mt-2 text-2xl font-bold text-navy-700">{title}</h1>
      <p className="text-muted">This screen is not built yet.</p>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/inbox" />} />

      {/* Every route inside this Route is shown inside the Layout */}
      <Route element={<Layout />}>
        {/* My screens */}
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/inbox/quotes/:id" element={<QuoteThread />} />
    <Route path="/inbox/invoices/:id" element={<InvoiceThread />} />

        {/* Other students' screens (placeholders until they are built) */}
        <Route path="/inbox/reviews/new" element={<Placeholder title="Review Request (G2-S2)" />} />
        <Route path="/inbox/templates" element={<Placeholder title="Template Library (G2-S2)" />} />
        <Route path="/inbox/chase/:invoiceId" element={<Placeholder title="Payment Chase Sequence (G2-S2)" />} />
        <Route path="/vault" element={<Placeholder title="Vault Dashboard (G2-S3)" />} />
        <Route path="/pay/:invoiceId" element={<Placeholder title="Customer Payment Portal (G2-S6)" />} />

        {/* Group 1 screens */}
        <Route path="/quotes/:id/preview" element={<Placeholder title="Quote Preview (Group 1)" />} />
        <Route path="/invoices/:id" element={<Placeholder title="Invoice Detail (Group 1)" />} />
        <Route path="/jobs/:id" element={<Placeholder title="Job Detail (Group 1)" />} />

        {/* Any other address (Dashboard, Jobs, ...) */}
        <Route path="*" element={<Placeholder title="Coming soon" />} />
      </Route>
    </Routes>
  )
}