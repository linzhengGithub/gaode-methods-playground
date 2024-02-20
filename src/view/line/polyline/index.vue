<template>
  <div class="h-full">
    <button @click="handlePolyline">
      handlePolyline
    </button>
    <button @click="handlePolyline1">
      handlePolyline1
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
import { useMap, usePolyline } from '@/composables'

const { initMap, map } = useMap('map-container')
onMounted(async () => {
  await initMap()
  createPolyline()
  otherPolyline()
})

const polyline = ref()
const polyline1 = ref()
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
  close()
  setEditPolyline(polyline.value)
  currentEditor.value = currentEditPolyline.value
}

function handlePolyline1() {
  const { currentEditPolyline, setEditPolyline } = usePolyline(map.value)
  close()
  setEditPolyline(polyline1.value)
  currentEditor.value = currentEditPolyline.value
}

function otherPolyline() {
  const { createPolyline } = usePolyline(map.value)
  const path = [
    [116.362209, 39.887487],
    [116.422897, 39.878002],
    [116.372105, 39.90651],
    [116.428945, 39.89663],
  ]
  polyline1.value = createPolyline(path)
}

function createEditor() {
  const { generateEditor } = usePolyline(map.value)
  close()
  currentEditor.value = generateEditor()
}

function close() {
  currentEditor.value?.close()
}
</script>

<style scoped></style>
