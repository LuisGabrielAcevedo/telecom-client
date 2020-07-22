import "@testing-library/jest-dom";
import {
  getCurrentWeather,
  getNextDaysWeatherByPosition,
  getNextDaysWeather,
} from "../../helpers";
import weatherResp from "../mocks/weatherResp.mock";
import forecastResp from "../mocks/forecastResp.mock";

describe("helpers index.js test", () => {
  const successPromise = (resp) =>
    jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(resp),
      })
    );

  it("getCurrentWeather should return weather and Forecast of my actual position", async () => {
    jest.spyOn(Promise, "all").mockReturnValue([weatherResp, forecastResp]);
    const resp = await getCurrentWeather(1, 2);
    expect(Promise.all).toHaveBeenCalled();
    expect(resp.title).toBe("Buenos Aires F.D.");
    expect(resp.nextDays).toHaveLength(5);
  });

  it("getNextDaysWeatherByPosition should return the weather to 5 days", async () => {
    global.fetch = successPromise(forecastResp);
    const resp = await getNextDaysWeatherByPosition(1, 2);
    expect(resp.list).toHaveLength(5);
  });

  it("getNextDaysWeather should return the weather to 5 days", async () => {
    global.fetch = successPromise(forecastResp);
    const resp = await getNextDaysWeather("Buenos aires");
    expect(resp.list).toHaveLength(5);
  });
});
