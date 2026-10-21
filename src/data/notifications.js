// DUMMY notifications for the bell icon. Later they will come from the backend.
// unread = true shows an orange tint; "to" is the page to open on click.
export const notifications = [
  { id: 1, text: 'Sarah Mitchell approved your quote', time: '2 min ago', unread: true, to: '/inbox/quotes/1' },
  { id: 2, text: 'Invoice for Alfie Novak is overdue', time: '1 day ago', unread: true, to: '/inbox/invoices/2' },
  { id: 3, text: "Priya Sharma's CP12 expires soon", time: '2 days ago', unread: true, to: '/vault' },
  { id: 4, text: 'Helen Docherty left a 5-star review', time: '3 days ago', unread: false, to: '/inbox' },
]