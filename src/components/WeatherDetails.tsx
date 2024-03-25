import "./weather-details.css"
import cloudySvg from "../assets/cloudy.png";
const WeatherDetails = ({name, country, time, temp, isDay, condition, windSpeed, feelsLike, humidity, icon}) => {
    return (
        <div className={`details-wrapper${!isDay ? " dark" : ""}`}>
            <div className="main-details">
                <div className="city-info">
                    <h1>{`${name}, ${country}`}</h1>
                    <span>Friday, March 1 2024</span>
                    <h1>20:24</h1>
                </div>
                <div className="main-info">
                    <h1>{temp}°<img src={icon} alt="" /> </h1>
                    <span>{condition}</span>
                    <span>H:11°C L:5°C</span>
                </div>
                <div className="other-info">
                    <span>Feels Like: {feelsLike}°C</span>
                    <span>Wind: {windSpeed} km/h</span>
                    <span>Humidity: {humidity}%</span>
                </div>
            </div>
            <div className="forecast-container">
                <div className="forecast-item">
                    <span>Fri</span>
                    <img src={cloudySvg} alt="" />
                    <span>11° 5°</span>
                </div>
                <div className="forecast-item">
                    <span>Fri</span>
                    <img src={cloudySvg} alt="" />
                    <span>11° 5°</span>
                </div>
                <div className="forecast-item">
                    <span>Fri</span>
                    <img src={cloudySvg} alt="" />
                    <span>11° 5°</span>
                </div>
                <div className="forecast-item">
                    <span>Fri</span>
                    <img src={cloudySvg} alt="" />
                    <span>11° 5°</span>
                </div>
                <div className="forecast-item">
                    <span>Fri</span>
                    <img src={cloudySvg} alt="" />
                    <span>11° 5°</span>
                </div>
                <div className="forecast-item">
                    <span>Friday</span>
                    <img src={cloudySvg} alt="" />
                    <span>11° 5°</span>
                </div>

                </div>
        </div>
    )
}
export default WeatherDetails