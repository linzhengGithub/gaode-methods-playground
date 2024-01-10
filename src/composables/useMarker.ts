import { ref } from 'vue'
import { defaultSetupMarker } from '@/store'

export function useMarker(map?: AMap.Map) {
  const markerList = ref<AMap.Marker[]>([])

  function createMarker(opts: AMap.MarkerOptions = defaultSetupMarker) {
    const marker = ref<AMap.Marker>()
    marker.value = new AMap.Marker(opts)
    return marker.value
  }

  function addMarker(marker: AMap.Marker) {
    marker.setMap(map)
    markerList.value.push(marker)
  }

  return {
    markerList,
    createMarker,
    addMarker,
  }
}
