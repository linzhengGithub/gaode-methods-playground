<template>
  <div class="h-full overflow-hidden">
    <div id="map-container" class="w-full h-full" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useControl, useMap } from '@/composables'

const { initMap, map } = useMap('map-container')
onMounted(async () => {
  await initMap()
  const { addControlBar, addGeolocation, addHawEye, addMapType, addScale, addToolBar } = useControl(map.value)
  addControlBar()
  addGeolocation()
  addHawEye()
  addMapType()
  addScale()
  addToolBar()
})
</script>

<style scoped></style>
