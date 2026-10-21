// Handout ka rule: status ka rang HAR screen par same hona chahiye.
// Is liye ek hi component banate hain jo har jagah use hoga.
//
// Ye ek OBJECT hai: status ka naam → uski styling classes.
// "bg-info/10" ka matlab: info (blue) rang, 10% halka (background).
// "text-info" ka matlab: gehra blue text.
const styles = {
  Draft: 'bg-muted/10 text-muted',       // grey
  Sent: 'bg-info/10 text-info',          // blue
  Approved: 'bg-success/10 text-success',// green
  Declined: 'bg-danger/10 text-danger',  // red
  Paid: 'bg-success/10 text-success',    // green
  Overdue: 'bg-danger/10 text-danger',   // red
}

// { status } ek PROP hai: is component ko bahar se milne wali cheez.
// Use karte waqt likhte hain: <StatusBadge status="Sent" />
export default function StatusBadge({ status }) {
  return (
    <span
      // styles[status] us status ki classes nikalta hai.
      // "|| styles.Draft" ka matlab: agar naam na mile to grey use karo.
      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles[status] || styles.Draft}`}
    >
      {status}
    </span>
  )
}