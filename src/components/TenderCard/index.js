import React from "react";
import GerbLogo from "../../res/images/russian_gerb.jpg"
import "./styles.css";

const TenderCard = ( {tender} ) => {
  return (
    <div className="tender-card">
      <img
        src={GerbLogo}
        alt="Герб России"
        className="tender-card__logo"
      />
      <h3 className="tender-card__title">{tender.name}</h3>

      <p className="tender-card__text">
        <strong>№ контракта:</strong> № {tender.id}
      </p>

      <p className="tender-card__text">
        <strong>Сумма:</strong> {tender.price} ₽
      </p>

      <p className="tender-card__text">
        <strong>Объект закупки:</strong> {tender.target}
      </p>
    </div>
  );
}

export default TenderCard;
