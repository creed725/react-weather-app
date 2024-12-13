import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-7">
          <h2>{props.data.city}</h2>

          <div className="row">
            <div className="col-7">
              <FormattedDate date={props.data.date} />
            </div>
          </div>

          <div className="row">
            <div className="col-7 text-capitalize">
              {props.data.description}
            </div>
          </div>

          <div className="row">
            <div className="col-7">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>

          <div className="row">
            <div className="col-7">
              <span>Wind:</span>
              <span id="wind" className="windy">
                {Math.round(props.data.wind)}
              </span>{" "}
              mph
            </div>
          </div>

          <div className="row">
            <div className="col-7">
              <div className="float-left">
                <WeatherIcon code={props.data.icon} size={64} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//This component will handle the rendering of the weather data.
