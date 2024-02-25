import { describe, expect, it } from 'vitest'
import { useEllipse } from '../useEllipse'

describe('ellipse test group', () => {
  it('should be a ellipse', () => {
    const { createEllipse, ellipseList } = useEllipse()

    const center: [number, number] = [116.433322, 39.900255]

    createEllipse(center)

    expect(ellipseList.length).toBe(1)
  })
})
