import React from "react";
import "./card.scss";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Weather from "./weather";

function Card(props) {
  const { title, temp, wind, humidity, nextDays, weather } = props;

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
      <div className="card__weather">
        <Weather icon={weather} size={60} />
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
          <Weather icon={item.weather[0].main} size={24} />
        </div>
      ))}
    </div>
  );
}

export default Card;
