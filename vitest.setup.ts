import { afterAll, beforeAll, vi } from 'vitest'
import AMapLoader from '@amap/amap-jsapi-loader'
import { AMAP_MAP_KEY } from '@/store'

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