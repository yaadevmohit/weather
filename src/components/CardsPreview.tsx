import { useState, useEffect } from "react"
import WeatherCard from "./WeatherCard"
import "./cards-preview.css"


const CardsPreview = () => {

    const places: string[] = ["Toronto", "London", "New Delhi", "Sydney"]
    const [placesData, setPlacesData] = useState([])
    
    async function getWeatherInfo(place: string) {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=4ed03868d14e46b486b154315241302&q=${place}&aqi=no`)
        const weatherData = await response.json();
        return weatherData
    }   

    function getPlacesData() {
        Promise.all(places.map(place => getWeatherInfo(place)))
        .then(result => {
            const updatedPlacesData = result.map(result => ({
                name: result.location.name,
                temp: result.current.temp_c,
                weather: result.current.condition.text,
                isDay: result.current.is_day,
                icon: result.current.condition.icon,
                country: result.location.country
            }));
            setPlacesData(updatedPlacesData);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        })
    }
    useEffect(() => {getPlacesData()}, [])
    return (
        <>
            
            <div className="cards-wrapper">
                <h1>Popular Cities</h1>
                {placesData.map(place => {
                    return(<WeatherCard name={place.name} temp={place.temp} weather={place.weather} isDay={place.isDay} icon={place.icon} country={place.country}/>)
                })}
            </div>
        </>
    )    
}

export default CardsPreview