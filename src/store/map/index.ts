import { generateId } from '@/utils'

export const AMAP_MAP_KEY = '76cdfe9a57389e172b77a48017436be3'

export const AMAP_MAP_SECURITY_KEY = '9f029577d699bb4924166115e20712fe'

export const defaultMapCenter: [number, number] = [116.406315, 39.908775]

export const defaultSetupMap = {
  viewMode: '3D', // 是否为3D地图模式
  zoom: 11, // 初始化地图级别
  center: defaultMapCenter, // 初始化地图中心点位置
}

export const defaultSetupMarker: AMap.MarkerOptions = {
  icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
  position: defaultMapCenter,
  extData: {
    id: generateId(),
  },
}
