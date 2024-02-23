<template>
  <div class="h-full">
    <div id="map-container" class="w-full h-full" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useMap, usePolygon } from '@/composables'

const { initMap, map } = useMap('map-container')
onMounted(async () => {
  await initMap()
  createPolygon()
})

function createPolygon() {
  const { createPolygon } = usePolygon(map.value)
  const path: [number, number][] = [
    [116.398258, 39.9046],
    [116.387271, 39.912501],
    [116.368904, 39.913423],
  ]
  createPolygon(path)
  map.value.setFitView()
}
</script>

<style scoped></style>
