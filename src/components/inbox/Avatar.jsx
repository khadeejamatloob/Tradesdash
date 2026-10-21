// Round navy circle with the person's initials ("Sarah Mitchell" gives SM).

// Takes the first letter of the first two words.
function getInitials(name) {
  return name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function Avatar({ name }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">
      {getInitials(name)}
    </div>
  )
}