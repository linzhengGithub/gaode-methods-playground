import { ref } from 'vue'
import { useMarker } from './useMarker'
import { usePolyline } from './usePolyline'
import { extend } from '@/utils'

interface ComponentOptions {
  markerOpts: {
    position: [number, number]
    opts?: AMap.MarkerOptions
  }
  polylineOpts?: {
    opts?: AMap.PolylineOptions
  }
  passedPolylineOpts?: {
    opts?: AMap.PolylineOptions
  }
}

export function useTrack(map: AMap.Map) {
  const marker = ref<AMap.Marker>()
  const polyline = ref<AMap.Polyline>()
  const passedPolyline = ref<AMap.Polyline>()

  function createTrack(path: [number, number][], compOptions: ComponentOptions) {
    const {
      markerOpts,
      polylineOpts,
      passedPolylineOpts,
    } = compOptions

    // 1.创建一个marker
    const { createMarker, addMarker } = useMarker(map)
    marker.value = createMarker(
      extend({ position: markerOpts.position }, {
        icon: 'https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png',
        offset: new AMap.Pixel(-13, -26),
        ...markerOpts.opts,
      }),
    )
    addMarker(marker.value)

    // 2.绘制轨迹
    const { createPolyline } = usePolyline(map)
    polyline.value = createPolyline(path, extend({
      showDir: true,
      strokeColor: '#28F', // 线颜色
      strokeWeight: 6, // 线宽
    }, polylineOpts?.opts))

    // 3.途径轨迹样式
    passedPolyline.value = createPolyline([], extend({
      strokeColor: '#AF5', // 线颜色
      strokeWeight: 6,
    }, passedPolylineOpts?.opts))

    // 4.marker moving method
    marker.value.on('moving', (e) => {
      passedPolyline.value?.setPath(e.passedPath)
      map.setCenter(e.target.getPosition(), true)
    })

    map.setFitView()
  }

  return {
    marker,
    polyline,
    passedPolyline,
    createTrack,
  }
}
