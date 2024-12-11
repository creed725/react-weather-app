import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo({ weatherData }) {
  return (
    <div className="containers location-time">
      <div className="row">
        <div className="col-7">
          <h2>{weatherData.city}</h2>

          <div className="row">
            <div className="col-7">
              <FormattedDate date={weatherData.date} />
            </div>
          </div>

          <div className="row">
            <div className="col-7 text-capitalize">
              {weatherData.description}
            </div>
          </div>

          <div className="row">
            <div className="col-7">
              <WeatherTemperature celsius={weatherData.temperature} />
            </div>
          </div>

          <div className="row">
            <div className="col-7">
              <span>Wind:</span>
              <span id="wind" className="windy">
                {Math.round(weatherData.wind)}
              </span>{" "}
              mph
            </div>
          </div>

          <div className="row">
            <div className="col-7">
              <div className="float-left">
                <WeatherIcon icon={weatherData.icon} size={64}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//This component will handle the rendering of the weather data and will receive weatherData as a prop.
