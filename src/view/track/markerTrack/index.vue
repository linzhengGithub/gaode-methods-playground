<template>
  <div>
    <button @click="handleTrack('start')">
      start
    </button>
    <button @click="handleTrack('pause')">
      pause
    </button>
    <button @click="handleTrack('resume')">
      resume
    </button>
    <button @click="handleTrack('stop')">
      stop
    </button>
  </div>
  <div id="map-container" class="w-full h-full" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMap, useTrack } from '@/composables'

const lineArr: [number, number][] = [
  [116.478935, 39.997761],
  [116.478939, 39.997825],
  [116.478912, 39.998549],
  [116.478912, 39.998549],
  [116.478998, 39.998555],
  [116.478998, 39.998555],
  [116.479282, 39.99856],
  [116.479658, 39.998528],
  [116.480151, 39.998453],
  [116.480784, 39.998302],
  [116.480784, 39.998302],
  [116.481149, 39.998184],
  [116.481573, 39.997997],
  [116.481863, 39.997846],
  [116.482072, 39.997718],
  [116.482362, 39.997718],
  [116.483633, 39.998935],
  [116.48367, 39.998968],
  [116.484648, 39.999861],
]

const { initMap, map } = useMap('map-container')
const currentMarker = ref()
onMounted(async () => {
  await initMap()
  generateTrack()
})

function generateTrack() {
  const { createTrack, marker } = useTrack(map.value)
  createTrack(lineArr, {
    markerOpts: { position: [116.478935, 39.997761] },
  })
  currentMarker.value = marker.value
}

function handleTrack(type: string) {
  switch (type) {
    case 'start':
      currentMarker.value.moveAlong(lineArr, {
        duration: 500, // 可根据实际采集时间间隔设置
        autoRotation: true,
      })
      break
    case 'pause':
      currentMarker.value.pauseMove()
      break
    case 'resume':
      currentMarker.value.resumeMove()
      break
    case 'stop':
      currentMarker.value.stopMove()
      break

    default:
      break
  }
}
</script>

<style scoped></style>
