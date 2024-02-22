import "./card.css"
import sunnySvg from "../assets/sunny.png"
import cloudySvg from "../assets/cloudy.png"
import rainySvg from "../assets/rainy.png"
import snowSvg from "../assets/snowflake.png"
import dustSvg from "../assets/dust-xxl.png"

interface WeatherCardProps {
    name: string;
    temp: string;
    weather: string;
}

interface weatherIcons {
    [key: string]: string;    
}

const WeatherCard: React.FC<WeatherCardProps> = ({name, temp, weather}) => {
    
    const weatherIcons: weatherIcons = {
        sunny: sunnySvg,
        cloudy: cloudySvg,
        rainy: rainySvg,
        snow: snowSvg
    }

    const icon = weatherIcons[weather] || dustSvg
    
    return(
        <div className={`card`}>
            <img src={icon} alt={`${weather} png by freepik`} />
            <span>{weather}</span>
            <h1>{temp}</h1>
            <p>{name}</p>
        </div>
    )
}

export default WeatherCard