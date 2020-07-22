import React from "react";
import "./card.scss";
import { format } from "date-fns";
import { es } from "date-fns/locale";

function Card(props) {
  const { title, temp, wind, humidity, nextDays } = props;

  const formattedTemp = (_temp) => (_temp - 273).toFixed(2);

  const formattedDate = (_date) => {
    return format(new Date(_date.split(" ")[0]), "dd EEEE", { locale: es });
  };

  return (
    <div className="card">
      <div className="card__row">
        <span className="card__title">{title}</span>
        <span className="card__temp">{formattedTemp(temp)} °</span>
      </div>
      <div className="card__extra">
        <div className="card__column">
          <span>Viento</span>
          <span>{wind} Km/h</span>
        </div>
        <div className="card__column">
          <span>Humedad</span>
          <span>{humidity} %</span>
        </div>
      </div>
      {nextDays.map((item, i) => (
        <div key={i} className="card__item">
          <span className="card__date">{formattedDate(item.dt_txt)}</span>
          <span>{formattedTemp(item.main.temp)}</span>
        </div>
      ))}
    </div>
  );
}

export default Card;

Card.defaultProps = {
  title: "",
  temp: 0,
  wind: 0,
  humidity: 0,
  nextDays: [],
};
