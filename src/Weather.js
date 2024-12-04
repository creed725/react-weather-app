import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

/*import "./containerStyle.css";*/

export default function Weather(props) {
  //const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function search() {
    const apiKey = `40bdb8c3a26579atfoa8a2d376def906`; //API Key from SheCodes API Documentation
    const apiUrl = `https://api.shecodes.io/weather/v1/current?q=${city}&key=${apiKey}&units=imperial`; //apiURL from SheCodes API Documentation

    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    //console.log(response.data);
    const weatherIconMapping = {
      "clear-sky-night": "CLEAR_NIGHT",
      "clear-sky-day": "CLEAR_DAY",
      "few-clouds": "PARTLY_CLOUDY_DAY",
      "scattered-clouds": "CLOUDY",
      "broken-clouds-night": "CLOUDY",
      "rain-night": "RAIN",
      "mist-night": "FOG",
    };

    const iconCode =
      weatherIconMapping[response.data.condition.icon] || "CLEAR_DAY"; //Default icon if not found

    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: iconCode, //Stores the icon code instead of the iconURL
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
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <form onSubmit={handleSearch}>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a city..."
                value={city}
                onChange={handleCityChange}
                autoFocus
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
        <div>Loading...</div>
      </div>
    );
  }
}

//This compoent handles the API call and coniditional rendering. It imports WeatherInfo and pass weatherData to it when weatherData.ready is true.
