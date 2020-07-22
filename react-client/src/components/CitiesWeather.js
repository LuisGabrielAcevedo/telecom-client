import React, { useState, useEffect } from "react";
import Select from "./common/Select";
import Card from "./common/Card";
import "./cities-weather.scss";
import Loading from "./common/Loading";
import { getWeatherByCity } from "../helpers";

function CitiesWeather() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchData = async () => {
      setLoading(true);
      const weatherResp = await getWeatherByCity(selected);
      setLoading(false);
      setData(weatherResp);
    };
    searchData();
  }, [selected]);

  const cards = data.map((item, i) => <Card key={i} {...item} />);

  return (
    <div>
      <Select setSelected={setSelected} selected={selected} />
      <div className="cities-weather__items">
        {!loading ? cards : <Loading repeat={8} />}
      </div>
    </div>
  );
}

export default CitiesWeather;
