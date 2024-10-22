import SearchForm from "./SearchForm";
import Weather from "./Weather";
import Forecast from "./Forecast";
import "bootstrap/dist/css/bootstrap.min.css";
import "./containerStyle.css";

function App() {
  return (
    <div className="App container">
      <SearchForm />
      <div className="row">
        <div className="col-md-6">
          <Weather />
        </div>
        <div className="col-md-6">
          <Forecast />
        </div>
        {/*GitHub Repository Link Section*/}
        <h3 id="author">
          <a
            href="https://github.com/creed725/react-weather-app.git"
            target="_blank"
            rel="noopener noreferrer" //This is a security best practice
          >
            Open-source
          </a>
          coded by Ciara Reed 👩🏽‍💻
        </h3>
      </div>
    </div>
  );
}

export default App;
