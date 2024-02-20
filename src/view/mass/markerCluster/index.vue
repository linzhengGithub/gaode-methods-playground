<template>
  <div id="map-container" class="w-full h-full" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import type {
  MarkerClusterData,
  RenderClusterMarkerObject,
} from '@vuemap/amap-jsapi-types/plugins/MarkerClusterer'
import type _MarkerClustererOptions from '@vuemap/amap-jsapi-types/plugins/MarkerClusterer'
import { useMap, useMarkerCluster } from '@/composables'
import Pic from '@/assets/images/pic.jpeg'
import Pic2 from '@/assets/images/pic2.jpeg'

const points: MarkerClusterData = [
  { lnglat: [108.939621, 34.343147] },
  { lnglat: [112.985037, 23.15046] },
  { lnglat: [110.361899, 20.026695] },
  { lnglat: [121.434529, 31.215641] },
]
const { initMap, map } = useMap('map-container')
onMounted(async () => {
  await initMap()
  const { createMarkerCluster } = useMarkerCluster(map.value)
  const renderClusterMarker = function (context: RenderClusterMarkerObject) {
    const { marker } = context
    const icon = new AMap.Icon({
      size: new AMap.Size(36, 36), // 图标尺寸
      image: Pic2,
      imageSize: [36, 36],
    })
    marker.setIcon(icon)
  }
  const renderMarker = function (context: { marker: AMap.Marker }) {
    const { marker } = context
    const icon = new AMap.Icon({
      size: new AMap.Size(36, 36), // 图标尺寸
      image: Pic,
      imageSize: [36, 36],
    })
    marker.setIcon(icon)
  }
  createMarkerCluster({ data: points, renderMarker, renderClusterMarker })
  map.value.setFitView()
})
</script>

<style scoped></style>
