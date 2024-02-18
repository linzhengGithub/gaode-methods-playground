<template>
  <div id="map-container" class="w-full h-full" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useMap, useMarker } from '@/composables'
import Pic from '@/assets/images/pic.jpeg'

const { initMap, map } = useMap('map-container')
onMounted(async () => {
  await initMap()
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
