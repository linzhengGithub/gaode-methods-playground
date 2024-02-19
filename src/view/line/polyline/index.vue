<template>
  <div id="map-container" class="w-full h-full" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useMap, usePolyline } from '@/composables'

const { initMap, map } = useMap('map-container')
onMounted(async () => {
  await initMap()
  const { createPolyline } = usePolyline(map.value)
  const path = [
    [116.368904, 39.913423],
    [116.382122, 39.901176],
    [116.387271, 39.912501],
    [116.398258, 39.9046],
  ]

  createPolyline(path)
})
</script>

<style scoped></style>
