import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon({ icon }) {
  return (
    <ReactAnimatedWeather
      icon={icon} //Use the icon passed as a prop
      color="black"
      size={64}
      animate={true}
    />
  );
}
