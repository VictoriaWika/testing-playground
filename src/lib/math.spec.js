import { add } from './math'

describe('lib/math', () => {
  describe('add', () => {
    it('returns the sum of 4 + 3, which is 7', () => {
      const result = add(4, 3)
      // assertion library
      expect(result).toBe(7)
    })

    it('returns the sum of -3 + -1, which is -4', () => {
      const result = add(-3, -1)
      // assertion library
      expect(result).toBe(-4)
    })

    it('returns the sum of 0 + 2, which is 2', () => {
      const result = add(0, 2)
      // assertion library
      expect(result).toBe(2)
    })

    it('return the sum of 1, 2, 3, 4, 5 (=15)', () => {
      const result = add(1, 2, 3, 4, 5)
      // assertion library
      expect(result).toBe(15)
    })
  })
})
