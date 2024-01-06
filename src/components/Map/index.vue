<template>
  <div id="map-container" class="w-full h-full" />
</template>

<script setup lang="ts">
import { useMap } from './hooks'

const { initMap } = useMap({ domId: 'map-container' })
initMap()
</script>

<style scoped>
#map-contanier {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 800px;
}
</style>
