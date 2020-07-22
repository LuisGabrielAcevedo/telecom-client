import React from "react";
import "@testing-library/jest-dom";
import { shallow, mount } from "enzyme";
import CitiesWeather from "src/components/CitiesWeather";
import { act } from "react-dom/test-utils";

describe("CitiesWeather Component tests", () => {
  const wrapper = shallow(<CitiesWeather />);
  it("should init the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("", async () => {
    const wrapper = mount(<CitiesWeather />);
    await act(async () => wrapper);
    wrapper.update();
  });
});
