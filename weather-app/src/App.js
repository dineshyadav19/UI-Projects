import { useState } from "react";
import styled from "styled-components"
import axios from "axios"
import ShowCurrentData from "./components/CurrentData";
import SearchData from "./components/SearchData";

const API_KEY=process.env.REACT_APP_WEATHER_API_KEY

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
  "50d": "/icons/haze-fog.svg"
};

const Container = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 6% 5%;
  box-shadow: 0 3px 6px 0 #54e;
  border-radius: 10px;
`
const Heading = styled.h1`
  color: black;
  font-size: 2em;
  font-weight: bold;
`

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const fetchWeatherInfo = async (e) => {
    e.preventDefault()
    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`)
    setWeather(result.data)
  }
  return (
    <>
    <Container>
      <Heading>Weather App</Heading>
      {city && weather ? 
      ( <ShowCurrentData weather={weather} city={city}/> ) :
      ( <SearchData setCity={setCity} fetchWeatherInfo={fetchWeatherInfo}/> ) 
      }
    </Container>
    </>
  );
}

export default App;
