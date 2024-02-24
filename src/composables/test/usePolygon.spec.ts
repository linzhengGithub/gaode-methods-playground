import { describe, expect, it } from 'vitest'
import { usePolygon } from '../usePolygon'

describe('polygon test group', () => {
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

  it('should find this polygon', () => {
    const { createPolygon, findPolygonByKey, polygonList } = usePolygon()

    const path: [number, number][] = [
      [116.368904, 39.913423],
      [116.382122, 39.901176],
      [116.387271, 39.912501],
      [116.398258, 39.9046],
    ]

    const polygon = createPolygon(path, { extData: { id: 1 } })

    const matchPolygon = findPolygonByKey(polygonList, 'id', 1)

    expect(polygon.getExtData().id).toBe(matchPolygon?.getExtData().id)
  })

  it('should be remove polygon', () => {
    const { createPolygon, polygonList, removePolygons } = usePolygon()

    const path1: [number, number][] = [
      [116.368904, 39.913423],
      [116.382122, 39.901176],
      [116.387271, 39.912501],
      [116.398258, 39.9046],
    ]

    const path2: [number, number][] = [
      [116.368904, 39.913423],
      [116.382122, 39.901176],
      [116.387271, 39.912501],
      [116.398258, 39.9046],
    ]

    const polygon1 = createPolygon(path1, { extData: { id: 1 } })
    const polygon2 = createPolygon(path2, { extData: { id: 1 } })

    removePolygons([polygon1, polygon2], polygonList)

    expect(polygonList.length).toBe(0)
  })

  it.skip('set polygon status is edit', () => {
    const { createPolygon, currentEditPolygon, setEditPolyPolygon } = usePolygon()
    const path: [number, number][] = [
      [116.398258, 39.9046],
      [116.387271, 39.912501],
      [116.368904, 39.913423],
    ]
    const polygon = createPolygon(path)

    setEditPolyPolygon(polygon)

    expect(currentEditPolygon.value?.getTarget()?.getExtData().id).toBe(polygon.getExtData().id)
  })
})
