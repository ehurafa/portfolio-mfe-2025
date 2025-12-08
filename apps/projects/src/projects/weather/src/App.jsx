import { useState, useEffect } from "react";
import axios from "axios";

import Search from './components/Search'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast';


import { Title, WeatherContainer } from "./AppStyles";

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY || "";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ apiKey }&units=metric&lang=pt_br`
      );

      setCity(response.data.name);
      setWeather(response.data);

    });

  },[]);

  const searchWeather = async() => {
    try {

      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ apiKey }&units=metric&lang=pt_br`);

      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${ city }&appid=${ apiKey }&units=metric&lang=pt_br`);

      console.log('forecastResponse', forecastResponse)
      setWeather(weatherResponse.data);
      setForecast(forecastResponse.data.list.slice(0, 5));

    } catch(error) {
      console.log("Erro ao buscar o clima", error);
    }
  }

  console.log('clima ', weather);

  return (
    <>
     <WeatherContainer>
      <Title>Condições Climáticas</Title>
      <Search city={ city } setCity={ setCity } searchWeather={ searchWeather }/>
      { weather && (
        <CurrentWeather weather={ weather }/>
      )}
      { forecast.length > 0 && (
        <Forecast forecast={ forecast } />
      )}
     </WeatherContainer>
    </>
  )
}

export default App
