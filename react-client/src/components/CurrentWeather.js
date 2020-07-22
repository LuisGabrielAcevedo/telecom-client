import React, { useEffect, useState } from "react";
import Card from "./common/Card";
import Loading from "./common/Loading";
import { getCurrentWeather } from "src/helpers";

function CurrentWeather() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const searchData = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const weatherResp = await getCurrentWeather(
          position.coords.latitude,
          position.coords.longitude
        );
        setData(weatherResp);
      });
    };
    searchData();
  }, []);

  return (
    <div>
      <h1>Clima actual:</h1>
      {data ? <Card {...data} /> : <Loading repeat={1} />}
    </div>
  );
}

export default CurrentWeather;
