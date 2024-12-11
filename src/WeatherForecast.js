import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = `40bdb8c3a26579atfoa8a2d376def906`;
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="col">
        <div className="WeatherForecast-day">Thu </div>
        <WeatherIcon code="rain-day" size={36} />
        <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max">19° </span>
          <span className="WeatherForecast-temperature-min"> 10° </span>
        </div>
      </div>
    </div>
  );
}
