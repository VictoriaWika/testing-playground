export function commaSeparatedToArray(text) {
  const singleWords = text
    .split(',')
    .map(item => item.trim())
    .sort()
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
  const noDuplicates = [...new Set(singleWords)]
  return noDuplicates
}

/* Daniels Lösung, um Duplikate aus einem Array zu filtern:
const singleInstances = sortedWords.filter(
    (word, index) => index === sortedWords.indexOf(word)
  )
*/
