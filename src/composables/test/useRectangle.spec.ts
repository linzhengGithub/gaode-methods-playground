import { describe, expect, it } from 'vitest'
import { useRectangle } from '../useRectangle'

describe('rectangle test group', () => {
  it('should be a rectangle', () => {
    const { createRectangle, rectangleList } = useRectangle()
    const southWest: [number, number] = [116.356449, 39.859008] // 西南角的经纬度坐标
    const northEast: [number, number] = [116.417901, 39.893797] // 东北角的经纬度坐标

    createRectangle(southWest, northEast)

    expect(rectangleList.length).toBe(1)
  })

  it.skip('should be edit rectangle', () => {
    const { createRectangle, currentEditRectangle, setEditRectangle } = useRectangle()
    const southWest: [number, number] = [116.356449, 39.859008] // 西南角的经纬度坐标
    const northEast: [number, number] = [116.417901, 39.893797] // 东北角的经纬度坐标

    const rectangle = createRectangle(southWest, northEast, {
      extData: { id: 1 },
    })

    setEditRectangle(rectangle)

    expect(currentEditRectangle.value?.getTarget()?.getExtData().id).toBe(rectangle.getExtData().id)
  })
})
