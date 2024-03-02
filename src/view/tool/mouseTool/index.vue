<template>
  <div>
    <button @click="handleRule">
      rule
    </button>
    <button @click="handleArea">
      area
    </button>
    <button @click="clearTool">
      clear Map & close tool
    </button>
  </div>
  <div id="map-container" class="w-full h-full" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMap, useMouseTool } from '@/composables'

const { initMap, map } = useMap('map-container')
const tool = ref()
onMounted(async () => {
  await initMap()
  const { createMouseTool } = useMouseTool(map.value)
  tool.value = createMouseTool()
})
function clearTool(): void {
  if (tool.value)
    tool.value.close(true)
}
function handleRule() {
  tool.value.rule({
    startMarkerOptions: { // 设置量测起始点标记属性对象 可缺省
      icon: new AMap.Icon({
        size: new AMap.Size(19, 31), // 图标大小
        imageSize: new AMap.Size(19, 31),
        image: '//webapi.amap.com/theme/v1.3/markers/b/start.png',
      }),
      offset: new AMap.Pixel(-9, -31),
    },
    endMarkerOptions: { // 设置量测结束点标记属性对象 可缺省
      icon: new AMap.Icon({
        size: new AMap.Size(19, 31), // 图标大小
        imageSize: new AMap.Size(19, 31),
        image: '//webapi.amap.com/theme/v1.3/markers/b/end.png',
      }),
      offset: new AMap.Pixel(-9, -31),
    },
    midMarkerOptions: { // 设置拖拽路线插件途经点点标记属性对象 可缺省
      icon: new AMap.Icon({
        size: new AMap.Size(19, 31), // 图标大小
        imageSize: new AMap.Size(19, 31),
        image: '//webapi.amap.com/theme/v1.3/markers/b/mid.png',
      }),
      offset: new AMap.Pixel(-9, -31),
    },
    lineOptions: { // 可缺省
      strokeStyle: 'solid',
      strokeColor: '#FF33FF',
      strokeOpacity: 1,
      strokeWeight: 2,
    },
  })
}
function handleArea() {
  tool.value.measureArea({
    strokeColor: '#80d8ff',
    fillColor: '#80d8ff',
    fillOpacity: 0.3,
    // 同 Polygon 的 Option 设置
  })
}
</script>

<style scoped></style>
