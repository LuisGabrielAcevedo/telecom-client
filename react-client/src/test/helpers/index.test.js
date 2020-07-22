import "@testing-library/jest-dom";
import { getCurrentWeather } from "src/helpers";
import weatherResp from "../mocks/weatherResp.mock";
import forecastResp from "../mocks/forecastResp.mock";

describe("helpers index.js test", () => {
  it("getCurrentWeather should return weather and Forecast of my actual position", async () => {
    jest.spyOn(Promise, "all").mockReturnValue([weatherResp, forecastResp]);
    const resp = await getCurrentWeather(1, 2);
    expect(Promise.all).toHaveBeenCalled();
    expect(resp.title).toBe("Buenos Aires F.D.");
    expect(resp.nextDays).toHaveLength(5);
  });

  it("", async () => {});
});
