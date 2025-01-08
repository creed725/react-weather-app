import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />,
              <span className="text-capitalize"> {props.data.description}</span>
            </li>
            <li>
              Humidity: <strong>{Math.round(props.data.humidity)}%</strong>,
              Wind: <strong>{Math.round(props.data.wind)} mph</strong>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8">
          <div className="temperature-container d-flex justify-content-end">
            <WeatherIcon code={props.data.icon} size={52} />
            <div>
              <span className="temperature">
                <WeatherTemperature fahrenheit={props.data.temperature} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//This component will handle the rendering of the weather data.
