<template>
  <div class="h-full">
    <button @click="handlePolygon">
      handlePolygon
    </button>
    <button @click="createEditor">
      createEditor
    </button>
    <button @click="close">
      closeEdit
    </button>
    <div id="map-container" class="w-full h-full" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMap, usePolygon } from '@/composables'

const { initMap, map } = useMap('map-container')
const polygon = ref()
const currentEditPolygon = ref()
onMounted(async () => {
  await initMap()
  createPolygon()
})

function createPolygon() {
  const { createPolygon } = usePolygon(map.value)
  const path: [number, number][] = [
    [116.398258, 39.9046],
    [116.387271, 39.912501],
    [116.368904, 39.913423],
  ]
  polygon.value = createPolygon(path)
  map.value.setFitView()
}

function handlePolygon() {
  const { setEditPolygon } = usePolygon(map.value)
  close()
  currentEditPolygon.value = setEditPolygon(polygon.value)
}
function close() {
  currentEditPolygon.value?.close()
}
function createEditor() {
  const { generateEditor } = usePolygon(map.value)
  close()
  currentEditPolygon.value = generateEditor()
}
</script>

<style scoped></style>
