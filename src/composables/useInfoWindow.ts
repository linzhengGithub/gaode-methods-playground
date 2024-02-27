import { ref } from 'vue'
import { extend } from '@/utils'

export function useInfoWindow(map?: AMap.Map) {
  const infoWindow = ref<AMap.InfoWindow>()

  function createInfoWindow(content: string | HTMLElement, opts?: AMap.InfoOptions) {
    infoWindow.value = new AMap.InfoWindow({
      content,
      ...extend(
        {
          anchor: 'bottom-center',
          closeWhenClickMap: false,
        },
        opts,
      ),
    })
    return infoWindow.value
  }

  function openInfoWindow(infoWindow: AMap.InfoWindow | undefined, position: [number, number]) {
    infoWindow?.open(map!, position)
  }

  function closeInfoWindow(infoWindow: AMap.InfoWindow | undefined) {
    if (infoWindow)
      infoWindow?.close()
    else
      map?.clearInfoWindow()
  }

  return {
    infoWindow,
    createInfoWindow,
    openInfoWindow,
    closeInfoWindow,
  }
}
