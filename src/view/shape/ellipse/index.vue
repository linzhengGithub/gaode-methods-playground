<template>
  <div class="h-full">
    <button @click="handleEllipse">
      handleEllipse
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
import { useEllipse, useMap } from '@/composables'

const { initMap, map } = useMap('map-container')
const ellipse = ref()
const currentEditEllipse = ref()
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

function handleEllipse() {
  const { setEditEllipse } = useEllipse(map.value)
  close()
  currentEditEllipse.value = setEditEllipse(ellipse.value)
}
function close() {
  currentEditEllipse.value?.close()
}
function createEditor() {
  const { generateEditor } = useEllipse(map.value)
  close()
  currentEditEllipse.value = generateEditor()
}
</script>

<style scoped></style>
