import WeatherCard from "./WeatherCard"
import "./cards-preview.css"


const CardsPreview = () => {

    const places: string[] = ["Toronto", "London", "New Delhi", "Melbourne"]
    
    async function getWeather(place: string) {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=4ed03868d14e46b486b154315241302&q=${place}&aqi=no`)
        const weatherData = await response.json();
        return (
            <WeatherCard name={weatherData.location.name} temp={weatherData.current.temp_c} weather={weatherData.current.condition.text}/>
        )
    }   
    return (
        <div className="cards-wrapper">
            <WeatherCard name="Toronto, Canada" temp="24°" weather="sunny"/>
            <WeatherCard name="los santons" temp="190°" weather="cloudy"/>
            <WeatherCard name="los santons" temp="190°" weather="rainy"/>
            <WeatherCard name="los santons" temp="190°" weather="snow"/>
        </div>
    )    
}

export default CardsPreview