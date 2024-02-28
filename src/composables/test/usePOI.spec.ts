import type { AutoCompleteSearchCallbackResult } from '@vuemap/amap-jsapi-types/plugins/AutoComplete'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { usePOI } from '../usePOI'

const spy = vi.fn((status, _result) => status)
const autoComplete = {
  search: (_keyword: string, callback: (status: string, result: AutoCompleteSearchCallbackResult) => void) => {
    callback('complete', {
      info: '',
      count: 0,
      tips: [],
    })
  },
} as unknown as AMap.AutoComplete

describe('poi test group', () => {
  beforeEach(() => {
    spy.mockClear()
  })
  it('call poi search function, should to be call callback', () => {
    const { searchKeywordAuto } = usePOI()
    searchKeywordAuto(autoComplete, '北京大学', spy)

    expect(spy).toBeCalled()
  })
})
