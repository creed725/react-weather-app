import React from "react";

export default function SearchForm() {
  return (
    <div className="buttons mb-3">
      <form id="search-form">
        <input
          type="text"
          placeholder="Enter a City.."
          autoComplete="off"
          autoFocus="on"
          id="search-input"
        />
        <p className="current-location">
          <button type="submit" className="btn btn-primary" id="search-button">
            Search
          </button>
          <button
            type="button"
            className="btn btn-secondary ms-2"
            id="current-locationbtn"
          >
            Current Location
          </button>
        </p>
      </form>
    </div>
  );
}
