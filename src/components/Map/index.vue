<template>
  <div id="map-container" class="w-full h-full" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useMap } from './hooks'
import { useMarker } from '@/composables/useMarker'
import { defaultMapCenter } from '@/store/map/index'

const { initMap, map, setupMap } = useMap('map-container')
onMounted(async () => {
  await initMap()
  setupMap('map-container', {
    zoom: 12,
    center: defaultMapCenter,
    mapStyle: 'amap://styles/dark',
  })
  const { addMarker } = useMarker(map.value)
  addMarker()
})
</script>

<style scoped></style>
