import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={64} />
            </div>
          </div>
        </div>
      </div>
      <div className="float-left ml-3">
        <WeatherTemperature fahrenheit={props.data.temperature} />
      </div>

      <div className="col-6">
        <ul>
          <li>Humidity: {Math.round(props.data.humidity)}%</li>
          <li>Wind: {Math.round(props.data.wind)} mph</li>
        </ul>
      </div>
    </div>
  );
}
//This component will handle the rendering of the weather data.
