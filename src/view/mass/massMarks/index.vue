<template>
  <div id="map-container" class="w-full h-full" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useMap, useMassMarks } from '@/composables'

const data = [
  {
    lnglat: [116.397455, 39.909187],
    name: '天安门',
  },
  {
    lnglat: [116.402394, 39.937182],
    name: '南锣鼓巷',
  },
]

const { initMap, map } = useMap('map-container')
onMounted(async () => {
  await initMap()
  const { createMassMarks } = useMassMarks(map.value)
  createMassMarks(data as unknown as AMap.MassData[])
})
</script>

<style scoped></style>
