import { onUnmounted, ref } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader'
import type { MapOptions } from '../types'

const AMAP_MAP_KEY = '76cdfe9a57389e172b77a48017436be3'
const AMAP_MAP_SECURITY_KEY = '9f029577d699bb4924166115e20712fe'

export function useMap(options: MapOptions) {
  const AMap = ref()
  const map = ref()
  const { domId } = options

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
        plugins: [],
      })
      // 如果传入地图容器id，直接创建地图实例
      map.value = domId && new AMap.value.Map(domId, {
        // 设置地图容器id
        viewMode: '3D', // 是否为3D地图模式
        zoom: 11, // 初始化地图级别
        center: [116.397428, 39.90923], // 初始化地图中心点位置
      })
    }
    catch (error) {
      console.error(error)
    }
  }
  // 销毁地图
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
  }
}
