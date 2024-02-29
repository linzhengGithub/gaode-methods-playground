<template>
  <div>
    {{ respone }}
  </div>
  <div id="map-container" class="w-full h-full" />
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useMap, usePOI } from '@/composables'

const { initMap } = useMap('map-container')
const respone = reactive({
  status: '',
  result: {},
})
onMounted(async () => {
  await initMap()
  const { searchKeywordAuto, createAutoComplete } = usePOI()
  searchKeywordAuto(createAutoComplete(), '北京大学', (status, result) => {
    respone.status = status
    respone.result = result
  })
})
</script>

<style scoped></style>
