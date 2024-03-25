import './App.css'
import CardsPreview from './components/CardsPreview'
import searchSvg from "./assets/icons8-search.svg"
import WeatherDetails from './components/WeatherDetails'
import { useState } from 'react'
function App() {
  const [place, setPlace] = useState('')
  const [placeWeatherData, setPlaceWeatherData] = useState()
  function handleInputChange(e: Event) {
    setPlace(e.target.value)
  }

  async function handleSubmit() {
    if (place) {
      try 
      {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=4ed03868d14e46b486b154315241302&q=${place}&days=1&aqi=no&alerts=no`);
        const weatherData = await response.json()
        setPlaceWeatherData(weatherData)
      }
      catch(error) {
        console.log(error)
      }
    }
  }
  return (
    <>
      <main>
        <div className="input-container">
          <input type="text" placeholder='Search a place' onChange={handleInputChange}/>
          <button onClick={handleSubmit}><img src={searchSvg} /></button>
        </div>
       {placeWeatherData && <WeatherDetails 
          name={placeWeatherData.location.name} 
          country={placeWeatherData.location.country}
          time={placeWeatherData.location.localtime}
          temp={placeWeatherData.current.temp_c}
          isDay={placeWeatherData.current.is_day}
          condition={placeWeatherData.current.condition.text}
          windSpeed={placeWeatherData.current.wind_kph}
          feelsLike={placeWeatherData.current.feelslike_c}
          humidity={placeWeatherData.current.humidity}
          icon={placeWeatherData.current.condition.icon}
        />
        || <CardsPreview />
        }
      </main>
    </>
  )
}

export default App
