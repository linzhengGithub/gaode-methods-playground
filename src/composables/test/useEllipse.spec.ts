import { describe, expect, it } from 'vitest'
import { useEllipse } from '../useEllipse'

describe('ellipse test group', () => {
  it('should be a ellipse', () => {
    const { createEllipse, ellipseList } = useEllipse()

    const center: [number, number] = [116.433322, 39.900255]

    createEllipse(center)

    expect(ellipseList.length).toBe(1)
  })

  it('should find this ellipse', () => {
    const { createEllipse, findEllipseByKey, ellipseList } = useEllipse()

    const center: [number, number] = [116.398258, 39.9046]
    const ellipse = createEllipse(center, { extData: { id: 1 } })
    const matchEllipse = findEllipseByKey(ellipseList, 'id', 1)

    expect(ellipse.getExtData().id).toBe(matchEllipse?.getExtData().id)
  })

  it('should be remove ellipse', () => {
    const { createEllipse, ellipseList, removeEllipses } = useEllipse()

    const center1: [number, number] = [116.398258, 39.9046]
    const center2: [number, number] = [116.368904, 39.913423]

    const ellipse1 = createEllipse(center1, { extData: { id: 1 } })
    const ellipse2 = createEllipse(center2, { extData: { id: 2 } })

    removeEllipses([ellipse1, ellipse2], ellipseList)

    expect(ellipseList.length).toBe(0)
  })

  it.skip('should be edit ellipse', () => {
    const { createEllipse, currentEditEllipse, setEditEllipse } = useEllipse()

    const center: [number, number] = [116.368904, 39.913423]

    const ellipse = createEllipse(center, {
      extData: { id: 1 },
    })

    setEditEllipse(ellipse)

    expect(currentEditEllipse.value?.getTarget()?.getExtData().id).toBe(ellipse.getExtData().id)
  })
})
