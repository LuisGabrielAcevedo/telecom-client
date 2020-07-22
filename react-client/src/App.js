import React from "react";
import "./App.scss";
import CurrentWeather from "./components/CurrentWeatherComponent";
import CitiesWeather from "./components/CitiesWeatherComponent";

function App() {
  return (
    <div>
      <CurrentWeather />
      <CitiesWeather />
    </div>
  );
}

export default App;
