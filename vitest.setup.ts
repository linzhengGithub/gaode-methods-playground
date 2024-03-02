import { afterAll, beforeAll, vi } from 'vitest'
import AMapLoader from '@vuemap/amap-jsapi-loader'
import { AMAP_MAP_KEY } from '@/store'

beforeAll(async () => {
  vi.stubGlobal('AMap', await AMapLoader.load({
    key: AMAP_MAP_KEY,
    version: '2.0',
    plugins: [
      'AMap.MarkerCluster',
      'AMap.PolylineEditor',
      'AMap.PolygonEditor',
      'AMap.CircleEditor',
      'AMap.RectangleEditor',
      'AMap.EllipseEditor',
      'AMap.Weather',
      'AMap.Autocomplete',
      'AMap.MouseTool',
      'AMap.MoveAnimation',
    ],
  }))
})

afterAll(() => {
  vi.unstubAllGlobals()
})
