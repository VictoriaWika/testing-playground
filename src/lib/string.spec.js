import { commaSeparatedToArray } from './string'

describe('lib/string', () => {
  describe('commaSeparatedToArray', () => {
    it('returns ["a", "b"] for text "a , b"', () => {
      const result = commaSeparatedToArray('a,b')
      expect(result).toStrictEqual(['A', 'B'])
    })

    it('returns ["a", "b"] for text "   a  , b  "', () => {
      const result = commaSeparatedToArray('   a  , b  ')
      expect(result).toStrictEqual(['A', 'B'])
    })

    it('returns ["a b", "c"] for text "   a b , c "', () => {
      const result = commaSeparatedToArray('a b , c')
      expect(result).toStrictEqual(['A b', 'C'])
    })

    it('returns ["Jane", "John", "Joe"] for text "Jane,John, Joe"', () => {
      const result = commaSeparatedToArray('Jane,John, Joe')
      expect(result).toStrictEqual(['Jane', 'Joe', 'John'])
    })

    it('returns the array in ascending alphabetical order', () => {
      const result = commaSeparatedToArray('John,Anna,Victoria,Lu')
      expect(result).toStrictEqual(['Anna', 'John', 'Lu', 'Victoria'])
    })

    // it('contains each string only ones in the resulting array', () => {
    //     const result = commaSeparatedToArray('car, bus, car, bike, bike')
    //     expect(result).toBe(['bike', 'bus', 'car'])
    //   })

    it('returns all items in titel case ("john" -> "John")', () => {
      const result = commaSeparatedToArray('john, jane, joe')
      expect(result).toStrictEqual(['Jane', 'Joe', 'John'])
    })
  })
})
