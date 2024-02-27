import type { GeolocationOptions } from '@vuemap/amap-jsapi-types/plugins/Geolocation'
import { extend } from '@/utils'

export function useControl(map: AMap.Map) {
  // 添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
  function addToolBar(opts?: AMap.ControlConfig) {
    map?.addControl(new AMap.ToolBar(extend({ position: 'RB' }, opts)))
  }

  // 添加比例尺控件，展示地图在当前层级和纬度下的比例尺
  function addScale(opts?: AMap.ControlConfig) {
    map?.addControl(new AMap.Scale(extend({ position: 'LB' }, opts)))
  }

  // 添加鹰眼控件，在地图右下角显示地图的缩略图
  function addHawEye(opts?: AMap.HawkEyeOptions | undefined) {
    map?.addControl(new AMap.HawkEye(extend({ isOpen: true }, opts)))
  }

  // 添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
  function addMapType(opts?: AMap.MapTypeOptions | undefined) {
    map?.addControl(new AMap.MapType(opts))
  }

  // 添加定位控件，用来获取和展示用户主机所在的经纬度位置
  function addGeolocation(opts?: GeolocationOptions | undefined) {
    map?.addControl(new AMap.Geolocation(opts))
  }

  // 添加控制罗盘控件，用来控制地图的旋转和倾斜
  function addControlBar(opts?: AMap.ControlConfig) {
    map?.addControl(new AMap.ControlBar(extend({ position: 'LT' }, opts)))
  }

  return {
    addToolBar,
    addScale,
    addHawEye,
    addMapType,
    addGeolocation,
    addControlBar,
  }
}
