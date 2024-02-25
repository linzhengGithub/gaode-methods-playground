import { describe, expect, it } from 'vitest'
import { useEllipse } from '../useEllipse'

describe('ellipse test group', () => {
  it('should be a ellipse', () => {
    const { createEllipse, ellipseList } = useEllipse()

    const center: [number, number] = [116.433322, 39.900255]

    createEllipse(center)

    expect(ellipseList.length).toBe(1)
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
