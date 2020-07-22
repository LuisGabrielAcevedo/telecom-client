import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import Select from "src/components/common/Select";
import { countries } from "src/constants";

describe("Select Component test", () => {
  const selected = { label: "Madrid", value: "Madrid" };
  const setSelected = jest.fn();
  const wrapper = shallow(
    <Select selected={selected} setSelected={setSelected} />
  );

  it("the component should be initialized", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("when the MultiSelect child component changes should call the setSelected prop", () => {
    const select = wrapper.find("MultiSelect");
    select.prop("onChange")();
    expect(setSelected).toHaveBeenCalled();
  });

  it("when the component is mounted the MultiSelect child component should has the countries", () => {
    const select = wrapper.find("MultiSelect");
    const options = select.prop("options");
    expect(options).toEqual(countries);
  });
});
