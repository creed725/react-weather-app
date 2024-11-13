import react from "react";
import FormattedDate from "./FormattedDate";

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
              <span>H:</span>
              <span id="current-HighTemp">
                {Math.round(weatherData.temperature)}
              </span>
              <span id="celsiusLink"> °C </span> |{" "}
              <span id="fahrenheitLink"> °F </span>
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
              <img
                src={weatherData.iconURL}
                alt={`${weatherData.description} with a temperature of ${weatherData.temperature}°C`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//This component will handle the rendering of the weather data and will receive weatherData as a prop.
