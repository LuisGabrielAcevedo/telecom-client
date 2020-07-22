import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import Card from "../../../components/common/Card";
import formattedWeatherResp from "../../mocks/formattedWeatherResp.mock";
import { format } from "date-fns";
import { es } from "date-fns/locale";

describe("Card Component tests", () => {
  const wrapper = shallow(<Card {...formattedWeatherResp} />);
  const formatDate = (_date) => {
    return format(new Date(_date.split(" ")[0]), "dd EEEE", { locale: es });
  };

  it("the component should be initialized", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("the component should render the title entered by props", () => {
    const title = wrapper.find(".card__title").text();
    expect(title).toBe(formattedWeatherResp.title);
  });

  it("the component should render the temperature entered by props in C °", () => {
    const formattedTemp =
      (formattedWeatherResp.temp - 273).toFixed(2).toString() + " °";
    const temp = wrapper.find(".card__temp").text();
    expect(temp).toBe(formattedTemp);
  });

  it("the component should render 5 items", () => {
    expect(wrapper.find(".card__item")).toHaveLength(5);
  });

  it("the component should render 5 items", () => {
    const date = wrapper.find(".card__date").first().text();
    const formattedDate = formatDate(formattedWeatherResp.nextDays[0].dt_txt);
    expect(date).toBe(formattedDate);
  });
});
