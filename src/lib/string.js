export function commaSeparatedToArray(text) {
  return text
    .split(',')
    .map(item => item.trim())
    .sort()
    .map(item => item.toLowerCase().charAt(0).toUpperCase() + item.slice(1))
}
