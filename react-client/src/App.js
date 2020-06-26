import React from "react";
import "./App.scss";
import CurrentWeather from "./components/current-weather";
import CitiesWeather from "./components/cities-weather";

function App() {
  return (
    <div className="App">
      <CurrentWeather />
      <CitiesWeather />
    </div>
  );
}

export default App;
