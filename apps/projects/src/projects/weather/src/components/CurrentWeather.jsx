import React from 'react'
import { WeatherInfo } from './CurrentWeatherStyles';

const CurrentWeather = ({ weather}) => {
  return (
    <WeatherInfo>
      <h3>{ weather.name }</h3>
      <img
        src={`http://openweathermap.org/img/wn/${ weather.weather[0].icon}.png}` }
        alt={ weather.weather[0].description }
      />
      <p>{ weather.main.temp } ºC</p>
      <p>{ weather.weather[0].description }</p>
    </WeatherInfo>
  )
};

export default CurrentWeather;