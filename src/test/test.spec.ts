import { expect, it } from 'vitest'

function sum(a: number, b: number) {
  return a + b
}

it('happy path', () => {
  expect(sum(1, 2)).toBe(3)
})
