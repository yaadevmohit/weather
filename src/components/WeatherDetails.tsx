import "./weather-details.css"
import cloudySvg from "../assets/cloudy.png";
const WeatherDetails = () => {
    return (
        <div className="details-wrapper">
            <div className="main-details">
                <div className="city-info">
                    <h1>Toronto, Canada</h1>
                    <span>Friday, March 1 2024</span>
                    <h1>20:24</h1>
                </div>
                <div className="main-info">
                    <h1>-3°<img src={cloudySvg} alt="" /> </h1>
                    <span>Cloudy</span>
                    <span>H:11°C L:5°C</span>
                </div>
                <div className="other-info">
                    <span>Feels Like: 15°C</span>
                    <span>Wind: 23m/s</span>
                    <span>Humidity: 46%</span>
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