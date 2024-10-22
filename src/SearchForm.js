import React from "react";

export default function SearchForm() {
  return (
    <div class="buttons">
      <form id="search-form">
        <input
          type="text"
          placeholder="Enter a City"
          autocomplete="off"
          autofocus="on"
          id="search-input"
        />
        <p class="current-location">
          <button type="submit" class="btn btn-primary" id="search-button">
            Search
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            id="current-locationbtn"
          >
            Current Location
          </button>
        </p>
      </form>
    </div>
  );
}
