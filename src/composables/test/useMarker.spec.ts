import { describe, expect, it } from 'vitest'
import { useMarker } from '../useMarker'
import { defaultSetupMarker } from '@/store'
import { extend } from '@/utils'

describe('marker test group', () => {
  it('should be a marker', async () => {
    const { addMarker, markerList, createMarker } = useMarker()

    const marker = createMarker()
    addMarker(marker)

    expect(markerList.value.length).toBe(1)
  })

  it('should be find a marker', async () => {
    const { addMarker, createMarker, findMarker } = useMarker()

    addMarker(createMarker(extend(defaultSetupMarker, { extData: { id: '1' } })))
    addMarker(createMarker(extend(defaultSetupMarker, { extData: { id: '2' } })))

    const marker = findMarker('1')

    expect(marker?.getExtData().id).toBe('1')
  })

  it('should can setup marker', () => {
    const { createMarker } = useMarker()

    const marker = createMarker(extend(defaultSetupMarker, { extData: { id: 'abc' } }))

    expect(marker.getExtData().id).toBe('abc')
  })

  it('should can change marker position', () => {
    const { createMarker } = useMarker()

    const marker = createMarker()
    const lng = 116
    const lat = 39
    marker.setPosition([lng, lat])

    expect(marker.getPosition()?.lng).toBe(lng)
    expect(marker.getPosition()?.lat).toBe(lat)
  })

  it('should can remove marker', () => {
    const { createMarker, addMarker, removeMarker, markerList } = useMarker()

    const marker = createMarker()
    addMarker(marker)
    removeMarker(marker)

    expect(markerList.value.length).toBe(0)
  })
})
