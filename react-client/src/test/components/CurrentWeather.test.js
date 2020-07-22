import React from "react";
import "@testing-library/jest-dom";
import { shallow, mount } from "enzyme";
import CurrentWeather from "../../components/CurrentWeatherComponent";
import { act } from "react-dom/test-utils";

describe("CurrentWeather Component tests", () => {
  const mockGeolocation = {
    getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
      Promise.resolve(
        success({
          coords: {
            latitude: 51.1,
            longitude: 45.3,
          },
        })
      )
    ),
  };
  global.navigator.geolocation = mockGeolocation;

  it("should init the component", () => {
    const wrapper = shallow(<CurrentWeather />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should distpatch the hooks and update the component", async () => {
    const wrapper = mount(<CurrentWeather />);
    await act(async () => wrapper);
    wrapper.update();
  });
});
