import WeatherCard from "./WeatherCard"
import "./cards-preview.css"
const CardsPreview = () => {
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