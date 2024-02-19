import { describe, expect, it } from 'vitest'
import { usePolyline } from '@/composables'

describe.only('polyline test group', () => {
  it('should be polyline', () => {
    const { createPolyline, polylineList } = usePolyline()

    const path = [
      [116.368904, 39.913423],
      [116.382122, 39.901176],
      [116.387271, 39.912501],
      [116.398258, 39.9046],
    ]
    createPolyline(path)

    expect(polylineList.value.length).toEqual(1)
  })

  it('should be edit polyline', () => {
    const { createPolyline, currentEditPolyline, setEditPolyline } = usePolyline()

    const path = [
      [116.368904, 39.913423],
      [116.382122, 39.901176],
      [116.387271, 39.912501],
      [116.398258, 39.9046],
    ]
    const polyline = createPolyline(path, {
      extData: { id: 1 },
    })

    setEditPolyline(polyline)

    expect(currentEditPolyline.value?.getTarget()?.getExtData().id).toBe(polyline.getExtData().id)
  })
})
