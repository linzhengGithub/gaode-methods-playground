import { ref } from 'vue'
import { extend } from '@/utils'

export default function useMassMarks(map?: AMap.Map) {
  const massMarks = ref<AMap.MassMarks>()

  function createMassMarks(data: AMap.MassData[], opts?: AMap.MassMarkersOptions) {
    const defaultOptions = {
      zIndex: 5,
      zooms: [3, 19],
    }
    massMarks.value = new AMap.MassMarks(data, extend(defaultOptions, opts ?? {}))
    map?.add(massMarks.value)
  }

  return {
    massMarks,
    createMassMarks,
  }
};
