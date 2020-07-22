import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import Loading from "src/components/common/Loading";

describe("Loading Component test", () => {
  const wrapper = shallow(<Loading repeat={4} />);
  it("the component should be initialized", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("the component should render 4 loading", () => {
    expect(wrapper.find(".loading")).toHaveLength(4);
  });
});
