import React, { useState } from "react";
import Select from "./common/select";
import Weather from "src/models/weather";
import Forecast from "src/models/forecast";
import Card from "./common/card";
import "./cities-weather.scss";
import Loading from "./common/loading";

function CitiesWeather() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getWeather = async (city) => {
    return await Weather.option("q", city).find();
  };

  const getNextDaysWeather = async (city) => {
    const resp = await Forecast.option("q", city).find();
    resp.list = await resp.list.filter((i) => i.dt_txt.includes("00:00:00"));
    return resp;
  };

  const searchDataAction = async (values) => {
    setLoading(true);
    const preWeatherPromise = [];
    const preNextDaysWeatherPromise = [];
    values.forEach((v) => {
      preWeatherPromise.push(getWeather(v));
      preNextDaysWeatherPromise.push(getNextDaysWeather(v));
    });
    let weatherResp = await Promise.all(preWeatherPromise);
    const nextDaysWeatherResp = await Promise.all(preNextDaysWeatherPromise);

    weatherResp = weatherResp.map((resp, i) => {
      return {
        title: resp.name,
        temp: resp.main.temp,
        wind: resp.wind.speed,
        humidity: resp.main.humidity,
        weather: resp.weather[0].main,
        nextDays: nextDaysWeatherResp[i].list,
      };
    });

    setLoading(false);
    setData(weatherResp);
  };

  const searchData = (values) => {
    const valuesToSearch = values.map((t) => t.value);
    searchDataAction(valuesToSearch);
  };

  return (
    <div>
      <Select searchData={searchData} />
      <div className="cities-weather__items">
        {!loading ? (
          data.map((item, i) => <Card key={i} {...item} />)
        ) : (
          <Loading repeat={8} />
        )}
      </div>
    </div>
  );
}

export default CitiesWeather;
