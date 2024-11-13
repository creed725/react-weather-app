import Weather from "./Weather";
//import Forecast from "./Forecast";

//import "./containerStyle.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card-group">
              <div className="card">
                <h1 className="Weather">
                  {" "}
                  <span>Weather</span>
                </h1>
                <div className="row">
                  <div className="col-md-6">
                    <Weather defaultCity="Seattle" />
                  </div>
                  <div className="col-md-6">{/*<Forecast /> */}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*GitHub Repository Link Section*/}
        <footer id="author">
          <a
            href="https://github.com/creed725/react-weather-app.git"
            target="_blank"
            rel="noopener noreferrer" //This is a security best practice
          >
            Open-source
          </a>{" "}
          coded by Ciara Reed 👩🏽‍💻
        </footer>
      </div>
    </div>
  );
}

export default App;
