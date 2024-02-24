<template>
  <div class="h-full">
    <div id="map-container" class="w-full h-full" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useMap } from '@/composables'
import { useCircle } from '@/composables/useCircle'

const { initMap, map } = useMap('map-container')
onMounted(async () => {
  await initMap()
  createCircle()
})

function createCircle() {
  const { createCircle } = useCircle(map.value)
  const center: [number, number] = [116.406315, 39.908775]

  createCircle(center)
  map.value.setFitView()
}
</script>

<style scoped></style>
