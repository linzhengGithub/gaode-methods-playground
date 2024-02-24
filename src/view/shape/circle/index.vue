<template>
  <div class="h-full">
    <button @click="handleCircle">
      handleCircle
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
import { useMap } from '@/composables'
import { useCircle } from '@/composables/useCircle'

const { initMap, map } = useMap('map-container')
const circle = ref()
const currentEditCircle = ref()
onMounted(async () => {
  await initMap()
  createCircle()
})

function createCircle() {
  const { createCircle } = useCircle(map.value)
  const center: [number, number] = [116.406315, 39.908775]

  circle.value = createCircle(center)
  map.value.setFitView()
}

function handleCircle() {
  const { setEditCircle } = useCircle(map.value)
  close()
  currentEditCircle.value = setEditCircle(circle.value)
}
function close() {
  currentEditCircle.value?.close()
}
function createEditor() {
  const { generateEditor } = useCircle(map.value)
  close()
  currentEditCircle.value = generateEditor()
}
</script>

<style scoped></style>
