import React, { useState, useEffect } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [error, setError] = useState(null); //Initialize the error state as null
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data); //Log for debugging

    //Check if the response indicates a "city not found" error
    if (!response.data || response.data.status === "not_found") {
      setError("City not found. Please check the spelling and try again."); //Set the error state
      setWeatherData({ ready: false }); // Reset weather data to avoid stale data
    } else if (response.data.temperature?.current) {
      //Valid response; update the weather data state
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
      setError(null); //Clear any previous error
    } else {
      //Catch any unexpected response structure
      setError("Unexpected response from the server. Please try again.");
      console.error("Unexpected API response structure", response.data);
    }
  }

  useEffect(() => {
    const apiKey = `40bdb8c3a26579atfoa8a2d376def906`; //API Key from SheCodes API Documentation
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`; //apiURL from SheCodes API Documentation

    axios
      .get(apiUrl)
      .then((response) => handleResponse(response))
      .catch((error) => {
        setError("Failed to fetch weather data. Please try again.");
        console.error("API call error:", error);
      });
  }, [props.defaultCity]);

  //Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = `40bdb8c3a26579atfoa8a2d376def906`;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

    axios
      .get(apiUrl)
      .then((response) => handleResponse(response))
      .catch((error) => {
        setError("Failed to fetch weather data. Please try again.");
        console.error("API call error:", error);
      });
  }

  //Handle the city input change
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (error) {
    // Display error message when `error` state is set
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
        <div className="alert alert-danger">{error} </div>
      </div>
    );
  } else if (weatherData.ready) {
    //Display weather data when `weatherData.ready` is true
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
    //Show loading message while fetching data
      return "Loading...";
  }
}

//This compoent handles the API call and coniditional rendering. It imports WeatherInfo and pass weatherData to it when weatherData.ready is true.
