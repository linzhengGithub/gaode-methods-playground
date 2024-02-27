import { onUnmounted, ref } from 'vue'
import AMapLoader from '@vuemap/amap-jsapi-loader'
import type { MapOptions } from '@/types'
import { AMAP_MAP_KEY, AMAP_MAP_SECURITY_KEY, defaultSetupMap } from '@/store'

export function useMap(div: string | HTMLDivElement) {
  const AMap = ref()
  const map = ref()

  /**
   * @description 初始化地图
   */
  async function initMap() {
    (window as any)._AMapSecurityConfig = {
      // 高德地图密匙
      securityJsCode: AMAP_MAP_SECURITY_KEY,
      // 后台远程服务地址
      // serviceHost: AMAP_MAP_SERVICE_HOST
    }
    try {
      AMap.value = await AMapLoader.load({
        key: AMAP_MAP_KEY,
        version: '2.0',
        plugins: [
          'AMap.MarkerCluster',
          'AMap.PolylineEditor',
          'AMap.PolygonEditor',
          'AMap.CircleEditor',
          'AMap.RectangleEditor',
          'AMap.EllipseEditor',
          'AMap.ToolBar',
          'AMap.Scale',
          'AMap.HawkEye',
          'AMap.MapType',
          'AMap.Geolocation',
          'AMap.ControlBar',
        ],
      })
      // 如果传入地图容器id，直接创建地图实例
      map.value = div && new AMap.value.Map(div, defaultSetupMap)
    }
    catch (error) {
      console.error(error)
    }
  }

  function setupMap(div: string | HTMLDivElement, opts: MapOptions) {
    map.value = new AMap.value.Map(div, opts)
  }

  /**
   * @description 销毁地图
   */
  function destroyMap() {
    map.value && map.value.destroy()
  }
  onUnmounted(() => {
    destroyMap()
  })
  return {
    map,
    AMap,
    initMap,
    setupMap,
  }
}
