<template>
  <div class="h-full overflow-hidden">
    <button @click="show">
      show window
    </button>
    <button @click="close">
      close window
    </button>
    <div id="map-container" class="w-full h-full" />
    <CustomInfo ref="customInfoRef" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CustomInfo from './components/CustomInfo.vue'
import { useInfoWindow, useMap, useMarker } from '@/composables'
import Pic from '@/assets/images/pic.jpeg'

const { initMap, map } = useMap('map-container')
const { closeInfoWindow } = useInfoWindow()
const customInfoRef = ref()
const infoWindow = ref()
const marker = ref()
onMounted(async () => {
  await initMap()
  createMarker()
})

function show() {
  const { openInfoWindow, createInfoWindow } = useInfoWindow(map.value)
  infoWindow.value = createInfoWindow(customInfoRef.value.$el, {
    offset: [18, -5],
    isCustom: true,
  })
  openInfoWindow(infoWindow.value, marker.value.getPosition())
}
function close() {
  closeInfoWindow(infoWindow.value)
}
function createMarker() {
  const { addMarker, createMarker } = useMarker(map.value)
  const icon = new AMap.Icon({
    size: new AMap.Size(36, 36), // 图标尺寸
    image: Pic,
    imageSize: [36, 36],
  })
  marker.value = createMarker()
  addMarker(marker.value)
  marker.value.setIcon(icon)
}
</script>

<style scoped></style>
