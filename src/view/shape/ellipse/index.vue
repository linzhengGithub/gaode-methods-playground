<template>
  <div class="h-full">
    <div id="map-container" class="w-full h-full" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useEllipse, useMap } from '@/composables'

const { initMap, map } = useMap('map-container')
const ellipse = ref()
onMounted(async () => {
  await initMap()
  createEllipse()
})

function createEllipse() {
  const { createEllipse } = useEllipse(map.value)
  const center: [number, number] = [116.356449, 39.859008]

  ellipse.value = createEllipse(center)
  map.value.setFitView()
}
</script>

<style scoped></style>
