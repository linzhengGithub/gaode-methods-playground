function checkInWeather(weather: AMap.Weather | undefined) {
  if (!weather)
    return new AMap.Weather()
  else
    return weather
}

// const weather: AMap.Weather | null = null
export function useWeather() {
  /**
   * @description 查询实时天气信息
   * @param city 城市名称或区域编码返回城市天气预报信息
   * @callback 回调
   */
  function queryLiveWeather(city: string, callback: (err: any, data: AMap.WeatherLiveResult) => void, weather?: AMap.Weather) {
    checkInWeather(weather)?.getLive(city, (err, data: AMap.WeatherLiveResult) => {
      callback(err, data)
    })
  }

  /**
   * @description 查询四天预报天气
   * @param city 城市名称或区域编码返回城市天气预报信息
   * @callback 回调
   */
  function queryForecastWeather(city: string, callback: (err: any, data: AMap.WeatherForecastResult) => void, weather?: AMap.Weather) {
    checkInWeather(weather)?.getForecast(city, (err, data: AMap.WeatherForecastResult) => {
      callback(err, data)
    })
  }

  return {
    queryLiveWeather,
    queryForecastWeather,
  }
}
