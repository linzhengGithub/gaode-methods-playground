import { describe, expect, it } from 'vitest'
import { useCircle } from '../useCircle'

describe('circle test group', () => {
  it('should be a circle', () => {
    const { createCircle, circleList } = useCircle()
    const center: [number, number] = [116.406315, 39.908775]

    createCircle(center)

    expect(circleList.length).toBe(1)
  })

  it('should find this circle', () => {
    const { createCircle, findCircleByKey, circleList } = useCircle()

    const path: [number, number] = [116.368904, 39.913423]

    const circle = createCircle(path, { extData: { id: 1 } })

    const matchCircle = findCircleByKey(circleList, 'id', 1)

    expect(circle.getExtData().id).toBe(matchCircle?.getExtData().id)
  })

  it('should be remove circle', () => {
    const { createCircle, circleList, removeCircles } = useCircle()

    const path1: [number, number] = [116.382122, 39.901176]

    const path2: [number, number] = [116.368904, 39.913423]

    const center1 = createCircle(path1, { extData: { id: 1 } })
    const center2 = createCircle(path2, { extData: { id: 1 } })

    removeCircles([center1, center2], circleList)

    expect(circleList.length).toBe(0)
  })

  it.skip('set circle status is edit', () => {
    const { createCircle, currentEditCircle, setEditCircle } = useCircle()
    const center: [number, number] = [116.406315, 39.908775]

    const circle = createCircle(center)

    setEditCircle(circle)

    expect(currentEditCircle.value?.getTarget()?.getExtData().id).toBe(circle.getExtData().id)
  })
})
