import { ref } from 'vue'
import { defaultMapCenter } from '@/store'

export function useMarker(map?: AMap.Map) {
  const markerList = ref<AMap.Marker[]>([])

  function addMarker() {
    const marker = ref<AMap.Marker>()
    if (!marker.value) {
      marker.value = new AMap.Marker({
        icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
        position: defaultMapCenter,
        offset: new AMap.Pixel(-13, -30),
      })
      marker.value.setMap(map)
      markerList.value.push(marker.value)
    }
  }

  return {
    markerList,
    addMarker,
  }
}
