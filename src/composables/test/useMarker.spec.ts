import AMapLoader from '@amap/amap-jsapi-loader'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { useMarker } from '../useMarker'
import { AMAP_MAP_KEY, defaultSetupMarker } from '@/store'
import { extend } from '@/utils'

describe('marker test group', () => {
  beforeAll(async () => {
    vi.stubGlobal('AMap', await AMapLoader.load({
      key: AMAP_MAP_KEY,
      version: '2.0',
      plugins: [],
    }))
  })
  afterAll(() => {
    vi.unstubAllGlobals()
  })
  it('should be a marker', async () => {
    const { addMarker, markerList, createMarker } = useMarker()

    const marker = createMarker()
    addMarker(marker)

    expect(markerList.value.length).toBe(1)
  })

  it('should can setup marker', () => {
    const { createMarker } = useMarker()

    const marker = createMarker(extend(defaultSetupMarker, { extData: { id: 'abc' } }))

    expect(marker.getExtData().id).toBe('abc')
  })
})
