import { ref } from 'vue'
import { extend } from '@/utils'

export function useRectangle(map?: AMap.Map) {
  const rectangleList: AMap.Rectangle[] = []
  const currentEditRectangle = ref<AMap.RectangleEditor>()

  function createRectangle(southWest: [number, number], northEast: [number, number], opts?: AMap.RectangleOptions) {
    const rectangle = new AMap.Rectangle({
      bounds: new AMap.Bounds(southWest, northEast),
      ...extend({
        strokeColor: 'red', // 轮廓线颜色
        strokeWeight: 6, // 轮廓线宽度
        strokeOpacity: 0.5, // 轮廓线透明度
        strokeStyle: 'dashed', // 轮廓线样式，dashed 虚线，还支持 solid 实线
        strokeDasharray: [30, 10], // 勾勒形状轮廓的虚线和间隙的样式，30代表线段长度 10代表间隙长度
        fillColor: 'blue', // 矩形填充颜色
        fillOpacity: 0.5, // 矩形填充透明度
        cursor: 'pointer', // 指定鼠标悬停时的鼠标样式
        zIndex: 50, // 矩形在地图上的层级
      }, opts),
    })

    rectangleList.push(rectangle)
    map?.add(rectangle)

    return rectangle
  }

  function setEditRectangle(polygon: AMap.Rectangle, opts?: any) {
    currentEditRectangle.value = new AMap.RectangleEditor(map!, polygon, opts)
    currentEditRectangle.value?.open()
    return currentEditRectangle.value
  }

  function generateEditor(opts?: any) {
    currentEditRectangle.value = new AMap.RectangleEditor(map!, undefined, extend({
      createOptions: {
        strokeColor: 'red', // 轮廓线颜色
        strokeWeight: 6, // 轮廓线宽度
        strokeOpacity: 0.5, // 轮廓线透明度
        strokeStyle: 'dashed', // 轮廓线样式，dashed 虚线，还支持 solid 实线
        strokeDasharray: [30, 10], // 勾勒形状轮廓的虚线和间隙的样式，30代表线段长度 10代表间隙长度
        fillColor: 'blue', // 矩形填充颜色
        fillOpacity: 0.5, // 矩形填充透明度
        cursor: 'pointer', // 指定鼠标悬停时的鼠标样式
        zIndex: 50, // 矩形在地图上的层级
      },
    }, opts))
    currentEditRectangle.value.setTarget()
    currentEditRectangle.value.open()
    return currentEditRectangle.value
  }

  return {
    rectangleList,
    currentEditRectangle,
    createRectangle,
    setEditRectangle,
    generateEditor,
  }
}
