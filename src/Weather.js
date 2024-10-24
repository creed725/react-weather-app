import React from "react";
//import axios from "axios";

export default function Weather() {
  return (
    <div>
      <div className="location-time">
        <span id="city"> Kansas City, Missouri </span> <br />
        <span id="time"> 08:59 AM </span> <br />
        <span id="description"></span> <br />
        H:<span id="current-HighTemp">85</span> L:
        <span id="current-LowTemp">70</span>
        <br />
        <span id="celsiusLink"> °C </span>|<span id="fahrenheitLink"> °F </span>
      </div>
      <div className="row">
        <div className="col-5">
          <span className="precip"> </span>
        </div>
        <div className="col-7">
          Wind:{" "}
          <span id="wind" className="windy">
            {" "}
            0{" "}
          </span>{" "}
          mph
        </div>
      </div>
    </div>
  );
}
