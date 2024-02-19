<template>
  <div class="h-full">
    <button @click="handlePolyline">
      handle
    </button>
    <button @click="close">
      closeEdit
    </button>
    <div id="map-container" class="w-full h-full" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMap, usePolyline } from '@/composables'

const { initMap, map } = useMap('map-container')
onMounted(async () => {
  await initMap()
  createPolyline()
})

const polyline = ref()
const currentEditor = ref()

function createPolyline() {
  const { createPolyline } = usePolyline(map.value)
  const path = [
    [116.368904, 39.913423],
    [116.382122, 39.901176],
    [116.387271, 39.912501],
    [116.398258, 39.9046],
  ]
  polyline.value = createPolyline(path)
}
function handlePolyline() {
  const { currentEditPolyline, setEditPolyline } = usePolyline(map.value)
  setEditPolyline(polyline.value)
  currentEditor.value = currentEditPolyline.value
}

function close() {
  currentEditor.value?.close()
}
</script>

<style scoped></style>
