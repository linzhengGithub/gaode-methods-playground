<template>
  <div class="h-full">
    <button @click="handleRectangle">
      handleRectangle
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
import { useMap, useRectangle } from '@/composables'

const { initMap, map } = useMap('map-container')
const rectangle = ref()
const currentEditRectangle = ref()
onMounted(async () => {
  await initMap()
  createRectangle()
})

function createRectangle() {
  const { createRectangle } = useRectangle(map.value)
  const southWest: [number, number] = [116.356449, 39.859008] // 西南角的经纬度坐标
  const northEast: [number, number] = [116.417901, 39.893797] // 东北角的经纬度坐标

  rectangle.value = createRectangle(southWest, northEast)
  map.value.setFitView()
}

function handleRectangle() {
  const { setEditRectangle } = useRectangle(map.value)
  close()
  currentEditRectangle.value = setEditRectangle(rectangle.value)
}
function close() {
  currentEditRectangle.value?.close()
}
function createEditor() {
  const { generateEditor } = useRectangle(map.value)
  close()
  currentEditRectangle.value = generateEditor()
}
</script>

<style scoped></style>
