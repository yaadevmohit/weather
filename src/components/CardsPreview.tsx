import { useState, useEffect } from "react"
import WeatherCard from "./WeatherCard"
import "./cards-preview.css"

interface PlaceDataInterface {
    name: string;
    temp: string;
    weather: string;
    isDay: number;
    icon: string;
    country: string;
}


const getWeatherInfo = async (place: string) => {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=4ed03868d14e46b486b154315241302&q=${place}&aqi=no`)
    const weatherData = await response.json();
    const resultData: PlaceDataInterface = {
        name: weatherData.location.name,
        temp: weatherData.current.temp_c,
        weather: weatherData.current.condition.text,
        isDay: weatherData.current.is_day,
        icon: weatherData.current.condition.icon,
        country: weatherData.location.country
    }
    return resultData
} 
const CardsPreview = () => {

    const places: string[] = ["Toronto", "London", "New Delhi", "Sydney"]
    const [placesData, setPlacesData] = useState<PlaceDataInterface[]>([])
    

    async function getPlacesData() {
        // for (const place of places) {
        //     try{
        //         const result = await getWeatherInfo(place);
        //         setPlacesData(prevData => [...prevData, {...result}])
        //     } catch (error) {
        //         console.error('error fetching ', error)
        //     }
        // }
        Promise.all(places.map(place => getWeatherInfo(place)))
        
        .then(result => {
                const updatedPlacesData: PlaceDataInterface[] = result.map(result => ({
                       ...result
                    }));
                    setPlacesData(updatedPlacesData);
                })
                .catch(error => {
                        console.error('Error fetching weather data:', error);
            })
    }
                console.log(placesData)
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