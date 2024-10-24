import SearchForm from "./SearchForm";
import Weather from "./Weather";
import Forecast from "./Forecast";

import "./containerStyle.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchForm />
        <div className="row">
          <div className="col-md-6">
            <Weather />
          </div>
          <div className="col-md-6">
            <Forecast />
          </div>
          {/*GitHub Repository Link Section*/}
          <footer id="author">
            <a
              href="https://github.com/creed725/react-weather-app.git"
              target="_blank"
              rel="noopener noreferrer" //This is a security best practice
            >
              Open-source
            </a>
            coded by Ciara Reed 👩🏽‍💻
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
