import { describe, expect, it } from 'vitest'
import { usePolygon } from '../usePolygon'

describe.only('polygon test group', () => {
  it('should be a polygon', () => {
    const { createPolygon, polygonList } = usePolygon()
    const path: [number, number][] = [
      [116.398258, 39.9046],
      [116.387271, 39.912501],
      [116.368904, 39.913423],
    ]

    createPolygon(path)

    expect(polygonList.length).toBe(1)
  })
})