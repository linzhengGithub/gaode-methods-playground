import { describe, expect, it } from 'vitest'
import { useCircle } from '../useCircle'

describe('circle test group', () => {
  it('should be a circle', () => {
    const { createCircle, circleList } = useCircle()
    const center: [number, number] = [116.406315, 39.908775]

    createCircle(center)

    expect(circleList.length).toBe(1)
  })
})
