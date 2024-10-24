import React from "react";

export default function SearchForm() {
  return (
    <div className="buttons">
      <form id="search-form">
        <input
          type="text"
          placeholder="Enter a City.."
          autocomplete="off"
          autofocus="on"
          id="search-input"
        />
        <p className="current-location">
          <button type="submit" className="btn btn-primary" id="search-button">
            Search
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            id="current-locationbtn"
          >
            Current Location
          </button>
        </p>
      </form>
    </div>
  );
}
