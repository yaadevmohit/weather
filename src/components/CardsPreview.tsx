import WeatherCard from "./WeatherCard"
import "./cards-preview.css"
const CardsPreview = () => {
    return (
        <div className="cards-wrapper">
            <WeatherCard name="Toronto" date="friday 23rd" temp="24°" weather="rainy"/>
            <WeatherCard name="los santons" date="friday 111th" temp="190°" weather="cloudy"/>
            <WeatherCard name="los santons" date="friday 111th" temp="190°" weather="cloudy"/>
            <WeatherCard name="los santons" date="friday 111th" temp="190°" weather="cloudy"/>
        </div>
    )    
}

export default CardsPreview