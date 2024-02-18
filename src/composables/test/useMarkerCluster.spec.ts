import { describe, expect, it } from 'vitest'
import type { MarkerClusterData } from '@vuemap/amap-jsapi-types/plugins/MarkerClusterer'
import { useMarkerCluster } from '../useMarkerCluster'

describe.skip('markerCluster test group', () => {
  it('should be a MarkerCluster', () => {
    const { createMarkerCluster, cluster } = useMarkerCluster()

    const points: MarkerClusterData = [
      { lnglat: [108.939621, 34.343147] },
      { lnglat: [112.985037, 23.15046] },
      { lnglat: [110.361899, 20.026695] },
      { lnglat: [121.434529, 31.215641] },
    ]

    createMarkerCluster({ data: points, markerClusterOptions: { gridSize: 80 } })

    expect(cluster.value?.getGridSize()).toEqual(80)
  })
})
