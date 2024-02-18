<template>
  <div id="map-container" class="w-full h-full" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useMap } from '@/composables'

const { initMap } = useMap('map-container')
onMounted(async () => {
  await initMap()
})
</script>

<style scoped></style>
