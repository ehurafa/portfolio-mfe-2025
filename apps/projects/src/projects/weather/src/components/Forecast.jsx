import React from 'react'
import { ForecastContainer } from './ForecastStyles'

const Forecast = ({ forecast: forecastList } ) => { 
  
  return (
    <ForecastContainer>
      <h4>Previsão para as próximas horas</h4>
      <ul>
        { forecastList.map((forecast) => (
          <li key={ forecast.dt }>
          
            <img
              src={`http://openweathermap.org/img/wn/${ forecast.weather[0].icon}.png}` }
              alt={ forecast.weather[0].description }
            />
            { forecast.weather.temp } ºC - { forecast.weather[0].description }
          </li>
        ))}        
      </ul>
    </ForecastContainer>
  )
}

export default Forecast