// Ye NAKLI data hai. Asli app mein ye backend/database se aayega.
// Abhi hum dummy data se frontend banate hain (handout Week 1-2).
//
// Ye ek ARRAY hai (list), [ ... ]
// Us ke andar har chat ek OBJECT hai, { ... }
// Object = naam aur value ke jode (key: value)
export const conversations = [
  {
    id: 1,                          // har chat ka alag number
    customer: 'Mrs. Khan',          // customer ka naam
    type: 'quote',                  // chat kis cheez ki hai: quote, invoice ya review
    status: 'Sent',                 // us ka status
    lastMessage: 'Thanks,I will think about it.',
    time: '10:42',
    unread: 1,                      // kitne messages parhe nahi
  },
  {
    id: 2,
    customer: 'Mr. Ahmed',
    type: 'invoice',
    status: 'Overdue',
    lastMessage: 'I will pay this week.',
    time: 'Yesterday',
    unread: 2,
  },
  {
    id: 3,
    customer: 'Mrs. Shah',
    type: 'quote',
    status: 'Approved',
    lastMessage: 'ok, Approved.',
    time: 'Mon',
    unread: 0,
  },
  {
    id: 4,
    customer: 'Mr. Raza',
    type: 'invoice',
    status: 'Paid',
    lastMessage: 'Payment is done, thank you.',
    time: 'Sun',
    unread: 0,
  },
  {
    id: 5,
    customer: 'Mrs. Bibi',
    type: 'review',
    status: 'Sent',
    lastMessage: 'Review link has been sent.',
    time: 'Sat',
    unread: 0,
  },
   { id: 6, 
    customer: 'Mark Bennett', 
    type: 'job', 
    label: 'Job today',
    lastMessage: 'On my way, ETA 15 mins',
     time: '3 hours ago', 
     unread: 0, 
     starred: false },

  { id: 7, 
    customer: 'Grace Thompson', 
    type: 'job', 
    label: 'Job',
    lastMessage: "Sounds good, I'll be in 👍",
     time: 'Yesterday', 
     unread: 0, 
     starred: false },

  { id: 8, 
    customer: 'Priya Sharma',
     type: 'certificate', 
     label: 'Certificate',
    lastMessage: 'Can you renew the CP12 before Sept?',
     time: '2 days ago',
      unread: 1, 
      starred: false },

  { id: 9,
     customer: 'Helen Docherty',
      type: 'review', 
      label: 'Review',
    lastMessage: 'Thanks so much!',
     time: '3 days ago', 
     unread: 0, 
     starred: false,
      rating: 5 },

  { id: 10, 
     customer: 'Tom Richards', 
     type: 'quote',
      label: 'Quote sent',
    lastMessage: 'Can you send the quote again?', 
    time: '4 days ago',
     unread: 1, 
     starred: false },
     
  { id: 11,
     customer: 'Emma Walsh', 
     type: 'invoice',
      label: 'Invoice paid',
    lastMessage: 'Paid, thank you!',
     time: '5 days ago',
      unread: 0,
       starred: false },
]