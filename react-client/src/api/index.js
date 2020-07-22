import { BASE_URL, APP_KEY } from "../constants";

export const getWeatherByPositionApi = async (lat, lon) => {
  try {
    const resp = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${APP_KEY}`
    );
    return resp.json();
  } catch (err) {
    return err;
  }
};

export const getForecastByPositionApi = async (lat, lon) => {
  try {
    const resp = await fetch(
      `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${APP_KEY}`
    );
    return resp.json();
  } catch (err) {
    return err;
  }
};

export const getWeatherByCityApi = async (city) => {
  try {
    const resp = await fetch(`${BASE_URL}/weather?q=${city}&appid=${APP_KEY}`, {
      method: "GET",
    });
    return resp.json();
  } catch (err) {
    return err;
  }
};

export const getForecastByCityApi = async (city) => {
  try {
    const resp = await fetch(`${BASE_URL}/forecast?q=${city}&appid=${APP_KEY}`);
    return resp.json();
  } catch (err) {
    return err;
  }
};
