import type { AutoCompleteSearchCallbackResult } from '@vuemap/amap-jsapi-types/plugins/AutoComplete'
import { extend } from '@/utils'

export function usePOI() {
  function createAutoComplete(opts?: AMap.AutoCompleteOptions) {
    return new AMap.AutoComplete(extend({ city: '全国' }, opts))
  }

  function searchKeywordAuto(
    autoComplete: AMap.AutoComplete,
    keyword: string,
    callback: (status: string, result: AutoCompleteSearchCallbackResult) => void,
  ) {
    autoComplete.search(
      keyword,
      (status: string, result: AutoCompleteSearchCallbackResult) => callback(status, result),
    )
  }
  return { createAutoComplete, searchKeywordAuto }
}
