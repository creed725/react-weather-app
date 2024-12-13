import React, { useState, useEffect } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

/*import "./containerStyle.css";*/

export default function Weather(props) {
  //const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  useEffect(() => {
    search();
  }, [city]); // Trigger when 'city' changes to prevent to many requests.

  function handleResponse(response) {
    //console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon, //Stores the icon code instead of the iconURL
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  //Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  //Handle the city input change
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = `40bdb8c3a26579atfoa8a2d376def906`; //API Key from SheCodes API Documentation
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`; //apiURL from SheCodes API Documentation

    axios.get(apiUrl).then(handleResponse);
  }

  //Initial search on component mount
  //useEffect(() => {
  //search(city);
  //}, [city]); //Run only once when the component mounts

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                value={city}
                onChange={handleCityChange}
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

//This compoent handles the API call and coniditional rendering. It imports WeatherInfo and pass weatherData to it when weatherData.ready is true.
