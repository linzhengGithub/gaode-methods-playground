import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useWeather } from '../useWeather'

const spy = vi.fn()
const weatherSpy = {
  getLive: (_city: string, callback: () => void) => {
    callback()
  },
  getForecast: (_city: string, callback: () => void) => {
    callback()
  },
} as unknown as AMap.Weather

describe('weather test group', () => {
  beforeEach(() => {
    spy.mockClear()
  })
  it('should query live weather function to be called', () => {
    const { queryLiveWeather } = useWeather()

    queryLiveWeather('北京', spy, weatherSpy)

    expect(spy).toBeCalled()
  })

  it('should query forecast weather function to be called', () => {
    const { queryForecastWeather } = useWeather()

    queryForecastWeather('北京', spy, weatherSpy)

    expect(spy).toBeCalled()
  })
})
