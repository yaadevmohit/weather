import "./card.css"

interface WeatherCardProps {
    name: string;
    date: string;
    temp: string;
    weather: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({name, date, temp, weather}) => {
    return(
        <div className={`card ${weather}`}>
            <h1>{name}</h1>
            <p>{date}</p>
            <span>{temp}</span>
        </div>
    )
}

export default WeatherCard