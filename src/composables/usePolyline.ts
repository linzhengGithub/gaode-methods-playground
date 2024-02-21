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

  function findPolylineByKey(polylines: AMap.Polyline[], key: string, value: any) {
    return polylines.find(polyline => polyline.getExtData()[key] === value)
  }

  function removePolylines(polylines: AMap.Polyline[], polylineStore?: AMap.Polyline[]) {
    if (polylineStore?.length) {
      polylines.forEach((polyline) => {
        // const index = polylineStore.findIndex(line => line.getExtData().id === polyline.getExtData().id)
        polylineStore.splice(polylineStore.indexOf(polyline), 1)
      })
    }
    map?.remove(polylines)
  }

  function setEditPolyline(polyline: AMap.Polyline) {
    currentEditPolyline.value = new AMap.PolylineEditor(map!, polyline)
    currentEditPolyline.value?.open()
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
    findPolylineByKey,
    removePolylines,
    setEditPolyline,
    generateEditor,
  }
}
