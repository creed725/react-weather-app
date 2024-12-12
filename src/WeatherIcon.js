import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon({ icon, size }) {
  return (
    <ReactAnimatedWeather
      icon={icon} //Use the icon passed as a prop
      color="black"
      size={size}
      animate={true}
    />
  );
}
