// Decides how to greet a customer in a template.
// "Sarah Mitchell" gives "Sarah". "Mrs. Khan" stays "Mrs. Khan" (a title needs the surname).
export function friendlyName(fullName) {
  const first = fullName.split(' ')[0]
  const hasTitle = /^(mr|mrs|ms|miss|dr)\.?$/i.test(first)
  return hasTitle ? fullName : first
}