import { ref } from 'vue'

export function useMouseTool(map?: AMap.Map) {
  const mouseTool = ref<AMap.MouseTool | null>()

  function createMouseTool() {
    if (!map)
      return
    mouseTool.value = new AMap.MouseTool(map)
    return mouseTool.value
  }

  return {
    mouseTool,
    createMouseTool,
  }
}
