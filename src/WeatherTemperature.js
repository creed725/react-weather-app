import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  //Convert Celsius to Fahrenheit
  let fahrenheit = (props.celsius * 9) / 5 + 32;

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span id="current-temperature">{Math.round(props.celsius)}</span>
        <span id="celsiusLink">
          {" "}
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span id="current-temperature">{Math.round(fahrenheit)}</span>
        <span id="celsiusLink">
          {" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
