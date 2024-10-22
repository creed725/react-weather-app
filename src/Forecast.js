import React from "react";

export default function Forecast() {
  return (
    <div>
      <div className="hourly-forecast" id="hour-forecast"></div>

      <div className="five-day-weather-forecast" id="daily-forecast"></div>
    </div>
  );
}
