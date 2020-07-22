import React from "react";
import "./App.scss";
import CurrentWeather from "./components/CurrentWeather";
import CitiesWeather from "./components/CitiesWeather";

function App() {
  return (
    <div>
      <CurrentWeather />
      <CitiesWeather />
    </div>
  );
}

export default App;
