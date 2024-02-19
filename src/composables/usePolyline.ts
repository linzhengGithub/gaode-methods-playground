import { ref } from 'vue'
import { extend } from '@/utils'

export function usePolyline(map?: AMap.Map) {
  const polylineList = ref<AMap.Polyline[]>([])

  function generatePolylinePath(path: number[][]) {
    const polylinePath = path.map(p => new AMap.LngLat(p[0], p[1]))
    return polylinePath
  }

  function createPolyline(path: number[][], opts?: AMap.PolylineOptions) {
    const polyline = new AMap.Polyline({
      path: generatePolylinePath(path),
      ...extend(
        {
          borderWeight: 2, // 线条宽度，默认为1
          strokeColor: 'red', // 线条颜色
          lineJoin: 'round', // 折线拐点连接处样式
        },
        opts,
      ),
    })

    polylineList.value.push(polyline)
    map?.add(polyline)
  }

  return {
    polylineList,
    createPolyline,
  }
}
