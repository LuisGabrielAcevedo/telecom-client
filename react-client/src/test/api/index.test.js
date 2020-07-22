import "@testing-library/jest-dom";
import weatherResp from "../mocks/weatherResp.mock";
import forecastResp from "../mocks/forecastResp.mock";
import {
  getWeatherByPositionApi,
  getForecastByPositionApi,
  getWeatherByCityApi,
  getForecastByCityApi,
} from "src/api";

describe("helpers index.js test", () => {
  const successPromise = (resp) =>
    jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(resp),
      })
    );

  const errorPromise = (message) => jest.fn(() => Promise.reject(message));

  it("getWeatherByPositionApi success", async () => {
    global.fetch = successPromise(weatherResp);
    const resp = await getWeatherByPositionApi(1, 2);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(resp.name).toBe(weatherResp.name);
  });

  it("getWeatherByPositionApi error", async () => {
    global.fetch = errorPromise("getWeatherByPositionApi error");
    const resp = await getWeatherByPositionApi(1, 2);
    expect(resp).toBe("getWeatherByPositionApi error");
  });

  it("getForecastByPositionApi success", async () => {
    global.fetch = successPromise(forecastResp);
    const resp = await getForecastByPositionApi(1, 2);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(resp.city.name).toBe(forecastResp.city.name);
  });

  it("getForecastByPositionApi error", async () => {
    global.fetch = errorPromise("getForecastByPositionApi error");
    const resp = await getForecastByPositionApi(1, 2);
    expect(resp).toBe("getForecastByPositionApi error");
  });

  it("getWeatherByCityApi success", async () => {
    global.fetch = successPromise(weatherResp);
    const resp = await getWeatherByCityApi("Buenos Aires");
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(resp.name).toBe(weatherResp.name);
  });

  it("getWeatherByCityApi error", async () => {
    global.fetch = errorPromise("getWeatherByCityApi error");
    const resp = await getWeatherByCityApi("Buenos Aires");
    expect(resp).toBe("getWeatherByCityApi error");
  });

  it("getForecastByCityApi success", async () => {
    global.fetch = successPromise(forecastResp);
    const resp = await getForecastByCityApi("Buenos Aires");
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(resp.city.name).toBe(forecastResp.city.name);
  });

  it("getForecastByCityApi error", async () => {
    global.fetch = errorPromise("getForecastByCityApi error");
    const resp = await getForecastByCityApi("Buenos Aires");
    expect(resp).toBe("getForecastByCityApi error");
  });
});
