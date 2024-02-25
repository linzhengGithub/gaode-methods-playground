<template>
  <div class="h-full">
    <div id="map-container" class="w-full h-full" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useMap, useRectangle } from '@/composables'

const { initMap, map } = useMap('map-container')
onMounted(async () => {
  await initMap()
  createRectangle()
})

function createRectangle() {
  const { createRectangle } = useRectangle(map.value)
  const southWest: [number, number] = [116.356449, 39.859008] // 西南角的经纬度坐标
  const northEast: [number, number] = [116.417901, 39.893797] // 东北角的经纬度坐标

  createRectangle(southWest, northEast)
  map.value.setFitView()
}
</script>

<style scoped></style>
