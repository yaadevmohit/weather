import "./card.css"
import sunnySvg from "../assets/sunny.png"
import cloudySvg from "../assets/cloudy.png"
import rainySvg from "../assets/rainy.png"
import snowSvg from "../assets/snowflake.png"
import nightPartlyCloudySvg from "../assets/night-partly-cloudy.png"
import mistSvg from "../assets/mist.png"
import OvercastSvg from "../assets/day-overcast.png"
import nightClearSvg from "../assets/night-clear.png"
import lightRainSvg from "../assets/light-rain.png"
import thunderRainSvg from "../assets/thunder-rain.png"
interface WeatherCardProps {
    name: string;
    temp: string;
    weather: string;
    isDay: number;
    icon: string;
    country: string;
}

interface weatherIcons {
    day: {[key: string]: string};
    night: {[key: string]: string};
}

const weatherIcons: weatherIcons = {
    day: {
        "Sunny": sunnySvg,
        "Clear": sunnySvg,
        "Partly cloudy": cloudySvg,
        rainy: rainySvg,
        Mist: mistSvg,
        snow: snowSvg,
        Overcast: OvercastSvg,
        "Light rain": lightRainSvg,
        "Moderate or heavy rain with thunder": thunderRainSvg,

    },
    night: {
        "Clear": nightClearSvg,
        "Partly cloudy": nightPartlyCloudySvg,
        "Mist": mistSvg,
        Overcast: OvercastSvg,
        "Light rain": lightRainSvg,
        "Moderate or heavy rain with thunder": thunderRainSvg,
    }

}
const WeatherCard: React.FC<WeatherCardProps> = ({name, temp, weather, isDay, icon, country}) => {
    
    const weatherIcon = (isDay ? weatherIcons.day[weather] : weatherIcons.night[weather]) || icon
    
    return(
        <div className={`card${!isDay ? " dark" : ""}`}>
            <img src={weatherIcon} alt={`${weather} png by freepik`} />
            <span>{weather}</span>
            <h1>{`${temp}°`}</h1>
            <p>{`${name}, ${country}`}</p>
        </div>
    )
}

export default WeatherCard