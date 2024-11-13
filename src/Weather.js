import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import SearchForm from "./SearchForm";

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
    //console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      iconURL:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png",
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function handleCityChange(newCity) {
    setCity(newCity);
  }

  if (weatherData.ready) {
    return (
      <div>
        <SearchForm onSearch={handleCityChange} />
        <WeatherInfo weatherData={weatherData} />
      </div>
    );
  } else {
    return (
      <div>
        <SearchForm onSearch={handleCityChange} />
        <div>Loading...</div>
      </div>
    );
  }
}

//This compoent handles the API call and coniditional rendering. It imports WeatherInfo and pass weatherData to it when weatherData.ready is true.
