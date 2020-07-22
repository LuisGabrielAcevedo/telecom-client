import React from "react";
import "@testing-library/jest-dom";
import { shallow, mount } from "enzyme";
import CitiesWeather from "../../components/CitiesWeatherComponent";
import { act } from "react-dom/test-utils";

describe("CitiesWeather Component tests", () => {
  const wrapper = shallow(<CitiesWeather />);
  it("should init the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should distpatch the hooks and update the component", async () => {
    const wrapper = mount(<CitiesWeather />);
    await act(async () => wrapper);
    wrapper.update();
  });
});
