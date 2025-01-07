import Weather from "./Weather";
//import Forecast from "./Forecast";

//import "./containerStyle.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Seattle" />
        {/*GitHub Repository Link Section*/}
        <div>
          {" "}
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
    </div>
  );
}

export default App;
