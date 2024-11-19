import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

/*import "./containerStyle.css";*/

export default function Weather(props) {
  //const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  useEffect(() => {
    const apiKey = `40bdb8c3a26579atfoa8a2d376def906`; //API Key from SheCodes API Documentation
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`; //apiURL from SheCodes API Documentation

    axios.get(apiUrl).then(handleResponse);
  }, [city]);

  function handleResponse(response) {
    console.log(response.data);
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

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  //Handle form submit
  function handleSubmit(event) {
    event.preventDefault(); //Prevents the form submission from reloading the page
  }

  // Get the current location

  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const apiKey = `40bdb8c3a26579atfoa8a2d376def906`; //API Key from SheCodes API Documentation
        const apiUrl = `https://api.shecodes.io/weather/v1/current?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=imperial`; //Use latitude and longitude for the API request

        axios.get(apiUrl).then(handleResponse); // Fetch weather data for current location
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  //Conditional rendering:show loading or weather info
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                className="form-conrol"
                placeholder="Enter a city..."
                value={city}
                onChange={handleCityChange} //Updates city on input change
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

        <button
          onClick={getCurrentLocation}
          className="btn btn-info w-100 mt-3"
        >
          Current Location
        </button>

        <div>
          <WeatherInfo weatherData={weatherData} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                className="form-conrol"
                placeholder="Enter a city..."
                value={city}
                onChange={handleCityChange} //Updates city on input change
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
        <div>Loading...</div>
      </div>
    );
  }
}

//This compoent handles the API call and coniditional rendering. It imports WeatherInfo and pass weatherData to it when weatherData.ready is true.
