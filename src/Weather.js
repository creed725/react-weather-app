import React, { useState } from "react";
import axios from "axios";

/*import "./containerStyle.css";*/

export default function Weather(props) {
  //const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: "Wednesday, 09:00",
      description: response.data.condition.description,
      iconURL:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png",
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="containers location-time">
        <div className="row">
          <div className="col-7">
            <h2>
              <span id="city"> {weatherData.city} </span>
            </h2>
          </div>
          <div className="row">
            <div className="col-7">
              <span id="time"> {weatherData.date} </span>
            </div>
          </div>
          <div className="row">
            <div className="col-7">
              <img src={weatherData.iconURL} alt={weatherData.description} />
            </div>
          </div>
          <div className="row">
            <div className="col-7">
              <span id="description" className="text-capitalize">
                {weatherData.description}
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            H:
            <span id="current-HighTemp">
              {Math.round(weatherData.temperature)}
            </span>{" "}
            {/* May need to delete Low Temperature because no low temp is in the SheCodes API data */}
            {/*L:
          <span id="current-LowTemp">70</span>
           <br /> */}
            <span id="celsiusLink"> °C </span>|
            <span id="fahrenheitLink"> °F </span>
          </div>
        </div>

        <div className="row">
          <div className="col-7">
            Wind:{" "}
            <span id="wind" className="windy">
              {" "}
              {Math.round(weatherData.wind)}{" "}
            </span>{" "}
            mph
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `40bdb8c3a26579atfoa8a2d376def906`; //API Key from SheCodes API Documentation
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`; //apiURL from SheCodes API Documentation
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
