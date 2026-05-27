import React from 'react'
import {useMemo} from 'react'

function Weather({ temp, feels_like, temp_min, temp_max, pressure, humidity }) {
    const { temp: convertedTemp, feels_like: convertedFeelsLike, temp_min: convertedTempMin, temp_max: convertedTempMax } = useMemo(() => {
        return {
            temp: (temp - 273.15).toFixed(2),
            feels_like: (feels_like - 273.15).toFixed(2),
            temp_min: (temp_min - 273.15).toFixed(2),
            temp_max: (temp_max - 273.15).toFixed(2)
        };
    },[temp, feels_like, temp_min, temp_max])


    return (
    <p>
      Temperature: {convertedTemp}°C
      <br />
      Feels Like: {convertedFeelsLike}°C
      <br />
      Min Temperature: {convertedTempMin}°C
      <br />
      Max Temperature: {convertedTempMax}°C
      <br />
      Pressure: {pressure} hPa
      <br />
      Humidity: {humidity}%
    </p>
  )
}

export default Weather