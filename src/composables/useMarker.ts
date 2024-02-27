import { ref } from 'vue'
import { defaultSetupMarker } from '@/store'
import { extend } from '@/utils'

export function useMarker(map?: AMap.Map) {
  const markerList = ref<AMap.Marker[]>([])

  function createMarker(opts?: AMap.MarkerOptions) {
    const marker = ref<AMap.Marker>()
    marker.value = new AMap.Marker(extend(defaultSetupMarker, opts))
    return marker.value
  }

  function addMarker(marker: AMap.Marker) {
    marker.setMap(map)
    markerList.value.push(marker)
  }

  function findMarker(key: string | number) {
    return markerList.value.find(marker => marker.getExtData().id === key)
  }

  // 此 remove 只接收 marker本身 是因为抛出了 markerList & findMarker 做了颗粒化
  // TODO: 接收 id / ids
  function removeMarker(marker: AMap.Marker) {
    marker.setMap(null)
    markerList.value.splice(markerList.value.indexOf(marker), 1)
  }

  return {
    markerList,
    createMarker,
    addMarker,
    findMarker,
    removeMarker,
  }
}
