import { extend } from '@/utils'

export function useEllipse(map?: AMap.Map) {
  const ellipseList: AMap.Ellipse[] = []

  function createEllipse(center: [number, number], opts?: AMap.EllipseOptions) {
    const ellipse = new AMap.Ellipse({
      center,
      ...extend({
        radius: [2000, 1000], // 半径
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

    ellipseList.push(ellipse)
    map?.add(ellipse)

    return ellipse
  }

  return {
    ellipseList,
    createEllipse,
  }
}
