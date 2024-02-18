import { ref } from 'vue'
import type { MarkerClusterData, RenderClusterMarkerObject, _MarkerClustererOptions } from '@vuemap/amap-jsapi-types/plugins/MarkerClusterer'
import { extend } from '@/utils'

export function useMarkerCluster(map?: AMap.Map) {
  const cluster = ref<AMap.MarkerCluster>()

  function createMarkerCluster(options: {
    data: MarkerClusterData
    renderMarker?: (o: { marker: AMap.Marker }) => void
    renderClusterMarker?: (o: RenderClusterMarkerObject) => void
    markerClusterOptions?: _MarkerClustererOptions
  },
  ) {
    if (!map)
      return console.error('map is not find')
    const { data, renderMarker, renderClusterMarker, markerClusterOptions } = options
    cluster.value = new AMap.MarkerCluster(
      map,
      data,
      extend({
        // 分解出来参合业务逻辑
        // 非聚合时自定义marker
        renderMarker: (o: { marker: AMap.Marker }) => {
          return renderMarker && renderMarker(o)
        },
        // 聚合时自定义marker
        renderClusterMarker: (o: RenderClusterMarkerObject) => {
          return renderClusterMarker && renderClusterMarker(o)
        },
        gridSize: 80,
      }, markerClusterOptions),
    )
  }

  return {
    cluster,
    createMarkerCluster,
  }
};
