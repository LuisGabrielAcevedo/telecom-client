import {
  getWeatherByPositionApi,
  getForecastByPositionApi,
  getWeatherByCityApi,
  getForecastByCityApi,
} from "src/api";

export const getNextDaysWeatherByPosition = async (lat, lon) => {
  const resp = await getForecastByPositionApi(lat, lon);
  resp.list = resp.list.filter((i) => i.dt_txt.includes("00:00:00"));
  return resp;
};

export const getCurrentWeather = async (lat, lon) => {
  const resp = await Promise.all([
    getWeatherByPositionApi(lat, lon),
    getNextDaysWeatherByPosition(lat, lon),
  ]);

  const data = {
    title: resp[0].name,
    temp: resp[0].main.temp,
    wind: resp[0].wind.speed,
    humidity: resp[0].main.humidity,
    weather: resp[0].weather[0].main,
    nextDays: resp[1].list,
  };

  return data;
};

export const getNextDaysWeather = async (city) => {
  const resp = await getForecastByCityApi(city);
  resp.list = resp.list.filter((i) => i.dt_txt.includes("00:00:00"));
  return resp;
};

export const getWeatherByCity = async (selected) => {
  const values = selected.map((t) => t.value);
  const preWeatherPromise = [];
  const preNextDaysWeatherPromise = [];
  values.forEach((v) => {
    preWeatherPromise.push(getWeatherByCityApi(v));
    preNextDaysWeatherPromise.push(getNextDaysWeather(v));
  });
  const weatherResp = await Promise.all(preWeatherPromise);
  const nextDaysWeatherResp = await Promise.all(preNextDaysWeatherPromise);

  const data = weatherResp.map((resp, i) => {
    return {
      title: resp.name,
      temp: resp.main.temp,
      wind: resp.wind.speed,
      humidity: resp.main.humidity,
      weather: resp.weather[0].main,
      nextDays: nextDaysWeatherResp[i].list,
    };
  });
  return data;
};
