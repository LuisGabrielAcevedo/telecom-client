import React, { useEffect, useState } from "react";
import Weather from "src/models/weather";
import Forecast from "src/models/forecast";
import Card from "./common/card";
import Loading from "./common/loading";

function CurrentWeather() {
  const [data, setData] = useState(null);

  const getMyCurrentWeather = async (lat, lon) => {
    return await Weather.option("lat", lat).option("lon", lon).find();
  };

  const getMyNextDaysWeather = async (lat, lon) => {
    const resp = await Forecast.option("lat", lat).option("lon", lon).find();
    resp.list = await resp.list.filter((i) => i.dt_txt.includes("00:00:00"));
    return resp;
  };

  useEffect(() => {
    const searchData = async () => {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const resp = await Promise.all([
          getMyCurrentWeather(
            position.coords.latitude,
            position.coords.longitude
          ),
          getMyNextDaysWeather(
            position.coords.latitude,
            position.coords.longitude
          ),
        ]);
        const dataToShow = {
          title: resp[0].name,
          temp: resp[0].main.temp,
          wind: resp[0].wind.speed,
          humidity: resp[0].main.humidity,
          weather: resp[0].weather[0].main,
          nextDays: resp[1].list,
        };
        setData(dataToShow);
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
