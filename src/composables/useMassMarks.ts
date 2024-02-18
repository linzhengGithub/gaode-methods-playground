import { ref } from 'vue'
import { extend } from '@/utils'
import Pic from '@/assets/images/pic.jpeg'

export function useMassMarks(map?: AMap.Map) {
  const massMarks = ref<AMap.MassMarks>()

  function createMassMarks(data: AMap.MassData[], opts?: AMap.MassMarkersOptions) {
    const style = {
      url: Pic, // 图标地址
      size: new AMap.Size(36, 36), // 图标大小
      anchor: new AMap.Pixel(5, 5), // 图标显示位置偏移量，基准点为图标左上角
    }

    const defaultOptions = {
      zIndex: 5,
      zooms: [3, 19],
      style,
    }
    massMarks.value = new AMap.MassMarks(data, extend(defaultOptions, opts ?? {}))
    map && massMarks.value.setMap(map)
  }

  return {
    massMarks,
    createMassMarks,
  }
};
