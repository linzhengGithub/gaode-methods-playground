<template>
  <div id="map-container" class="w-full h-full" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useMap } from './hooks'
import { useMarker } from '@/composables/useMarker'
import { defaultMapCenter } from '@/store/map/index'
import Pic from '@/assets/images/pic.jpeg'

const { initMap, map, setupMap } = useMap('map-container')
onMounted(async () => {
  await initMap()
  setupMap('map-container', {
    zoom: 12,
    center: defaultMapCenter,
    mapStyle: 'amap://styles/dark',
  })
  const { addMarker, createMarker } = useMarker(map.value)
  const icon = new AMap.Icon({
    size: new AMap.Size(36, 36), // 图标尺寸
    image: Pic,
    imageSize: [36, 36],
  })
  const marker = createMarker()
  addMarker(marker)
  marker.setIcon(icon)
})
</script>

<style scoped></style>
