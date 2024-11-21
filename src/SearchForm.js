import React from "react";
import { useState } from "react";

export default function SearchForm(props) {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    //search for a city
    if (city) {
      props.onSearch(city); // Pass the city to Weather.js
    }
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <div className="">
      <div className=" row buttons mb-3">
        <div className="col-7">
          <form id="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter a City.."
              autoComplete="off"
              autoFocus="on"
              id="search-input"
              onChange={handleCityChange}
            />
            <p className="current-location">
              <button
                type="submit"
                className="btn btn-primary"
                id="search-button"
              >
                Search
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
