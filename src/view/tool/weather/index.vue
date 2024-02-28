<template>
  <span class="c-red"> {{ cityWeather }}</span>
  <div id="map-container" class="w-full h-full" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMap, useWeather } from '@/composables'

const { initMap } = useMap('map-container')
const { queryLiveWeather } = useWeather()
const cityWeather = ref()
onMounted(async () => {
  await initMap()
  queryLiveWeather('温州', (err, data) => {
    if (!err)
      cityWeather.value = data
  })
})
</script>

<style scoped></style>
