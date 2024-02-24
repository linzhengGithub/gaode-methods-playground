import { ref } from 'vue'
import { extend } from '@/utils'

type Path = Array<[number, number]> | Array<Array<[number, number]>> | Array<Array<Array<[number, number]>>>

export function usePolygon(map?: AMap.Map) {
  const polygonList: AMap.Polygon[] = []
  const currentEditPolygon = ref<AMap.PolygonEditor>()

  function createPolygon(path: Path, opts?: AMap.PolygonOptions) {
    const polygon = new AMap.Polygon({
      path,
      ...extend({
        fillColor: '#fff', // 多边形填充颜色
        strokeWeight: 2, // 线条宽度，默认为 2
        strokeColor: 'red', // 线条颜色
      }, opts),
    })

    polygonList.push(polygon)
    map?.add(polygon)

    return polygon
  }

  function findPolygonByKey(polygons: AMap.Polygon[], key: string, value: any) {
    return polygons.find(polygon => polygon.getExtData()[key] === value)
  }

  function removePolygons(polygons: AMap.Polygon[], polygonStore?: AMap.Polygon[]) {
    if (polygonStore?.length) {
      polygons.forEach((polygon) => {
        polygonStore.splice(polygonStore.indexOf(polygon), 1)
      })
    }
    map?.remove(polygons)
  }

  function setEditPolyPolygon(polygon: AMap.Polygon, opts?: any) {
    currentEditPolygon.value = new AMap.PolygonEditor(map!, polygon, opts)
    currentEditPolygon.value?.open()
    return currentEditPolygon.value
  }

  function generateEditor(opts?: any) {
    currentEditPolygon.value = new AMap.PolygonEditor(map!, undefined, extend({
      createOptions: {
        borderWeight: 2,
      },
    }, opts))
    currentEditPolygon.value.setTarget()
    currentEditPolygon.value.open()
    return currentEditPolygon.value
  }

  return {
    polygonList,
    currentEditPolygon,
    createPolygon,
    findPolygonByKey,
    removePolygons,
    setEditPolyPolygon,
    generateEditor,
  }
};
