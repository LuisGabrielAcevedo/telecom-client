import React from "react";
import { WiCloud, WiRain, WiSunrise } from "weather-icons-react";

function Weather({ icon, size }) {
  const icons = {
    Clouds: <WiCloud size={size} />,
    Rain: <WiRain size={size} />,
    Clear: <WiSunrise size={size} />,
  };

  const component = () =>
    icons[icon] ? icons[icon] : <WiSunrise size={size} />;

  return component();
}

export default Weather;
