// import { Routes, Route, Navigate } from 'react-router-dom'
// import Inbox from './pages/Inbox'

// // Placeholder = "abhi khali" screen.
// // Jo screens abhi nahi bani, un ki jagah ye dikhegi.
// // Props: { title } wo cheez hai jo hum bahar se bhejte hain.
// function Placeholder({ title }) {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold text-navy-700">{title}</h1>
//       {/* <p className="text-muted">.</p> */}
//     </div>
//   )
// }

// export default function App() {
//   return (
//     // Routes = rasto ki list. Har Route ka matlab:
//     // "Agar address ye ho, to ye screen dikhao."
//     <Routes>
//       {/* Agar koi sirf "/" khole to usay /inbox par bhej do */}
//       <Route path="/" element={<Navigate to="/inbox" />} />

//       {/* Ye hamari asli screen hai */}
//       <Route path="/inbox" element={<Inbox />} />

//       {/* ":id" ka matlab hai badalne wala hissa (1, 2, 3...) */}
//       <Route path="/inbox/quotes/:id" element={<Placeholder title="Quote Thread" />} />
//       <Route path="/inbox/invoices/:id" element={<Placeholder title="Invoice Thread" />} />

//       {/* Ye G2-S2 ki screens hain, abhi placeholder */}
//       <Route path="/inbox/reviews/new" element={<Placeholder title="Review Request" />} />
//       <Route path="/inbox/templates" element={<Placeholder title="Template Library " />} />
//     </Routes>
//   )
// }


import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Inbox from './pages/Inbox'

// Empty screen for pages that are not built yet.
function Placeholder({ title }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-navy-700">{title}</h1>
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
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/inbox/quotes/:id" element={<Placeholder title="Quote Thread" />} />
        <Route path="/inbox/invoices/:id" element={<Placeholder title="Invoice Thread" />} />
        <Route path="/inbox/reviews/new" element={<Placeholder title="Review Request (G2-S2)" />} />
        <Route path="/inbox/templates" element={<Placeholder title="Template Library (G2-S2)" />} />

        {/* Any other address (Dashboard, Jobs, ...) shows a placeholder */}
        <Route path="*" element={<Placeholder title="Coming soon" />} />
      </Route>
    </Routes>
  )
}