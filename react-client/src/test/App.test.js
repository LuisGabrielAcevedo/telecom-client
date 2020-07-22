import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import App from "../App";

describe("App Component tests", () => {
  it("should init the component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
