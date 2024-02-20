import { ref } from 'vue'
import { extend } from '@/utils'

export function usePolyline(map?: AMap.Map) {
  const polylineList = ref<AMap.Polyline[]>([])
  const currentEditPolyline = ref<AMap.PolylineEditor>()

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
    return polyline
  }

  function setEditPolyline(polyline: AMap.Polyline) {
    currentEditPolyline.value = new AMap.PolylineEditor(map!, polyline)
    currentEditPolyline.value.setTarget(polyline)
    currentEditPolyline.value.open()
  }

  function generateEditor(opts?: any) {
    currentEditPolyline.value = new AMap.PolylineEditor(map!, undefined, extend({
      createOptions: {
        borderWeight: 2,
        strokeColor: 'red',
        lineJoin: 'round',
      },
    }, opts))
    currentEditPolyline.value.setTarget()
    currentEditPolyline.value.open()
    return currentEditPolyline.value
  }

  return {
    polylineList,
    currentEditPolyline,
    createPolyline,
    setEditPolyline,
    generateEditor,
  }
}
