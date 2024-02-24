import { extend } from '@/utils'

export function useCircle(map?: AMap.Map) {
  const circleList: AMap.Circle[] = []

  function createCircle(center: [number, number], opts?: AMap.CircleOptions) {
    const circle = new AMap.Circle({
      center,
      ...extend({
        radius: 1000, // 半径
        borderWeight: 3, // 描边的宽度
        strokeColor: '#FF33FF', // 轮廓线颜色
        strokeOpacity: 1, // 轮廓线透明度
        strokeWeight: 6, // 轮廓线宽度
        fillOpacity: 0.4, // 圆形填充透明度
        strokeStyle: 'dashed', // 轮廓线样式
        strokeDasharray: [10, 10],
        fillColor: '#1791fc', // 圆形填充颜色
        zIndex: 50, // 圆形的叠加顺序
      }, opts),
    })

    circleList.push(circle)
    map?.add(circle)

    return circle
  }

  return {
    circleList,
    createCircle,
  }
}