<template>
  <div id="map-container" class="w-full h-full" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useMap } from './hooks'

const { initMap, map, AMap, setupMap } = useMap('map-container')
onMounted(async () => {
  await initMap()
  setupMap('map-container', {
    zoom: 12,
    center: [120.699279, 27.993849],
    mapStyle: 'amap://styles/dark',
  })
  map.value = new AMap.value.Map()
})
</script>

<style scoped></style>
