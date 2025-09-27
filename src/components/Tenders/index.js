import React from "react";
import TenderCard from "../TenderCard/index.js";
import "./styles.css";

const Tenders = () => {
  const tenders = [
    {id : "0351100010925000014", name : "ИЯФ СО РАН", target : "Поставка серверных твердотельных накопителей", price : "1 229 243,36" },
    {id : "0847500000925000738", name : "МОГКУ \"ЦИТ\"", target : "Поставка оборудования для модернизации дискового массива ", price : "1 174 593,00" },
    {id : "32514569794", name : "ОАУ \"ТРК МИР БЕЛОГОРЬЯ\"", target: "Базовые системы хранения данных (обеспечивающие сохранность данных при отключении питания)", price : "1 348 000,00" },
    {id : "0134300097524000932", name : "АДМИНИСТРАЦИЯ ГОРОДА ИРКУТСКА", target: "Поставка накопителей данных внутренних", price : "1 015 434,77" }

];

  return (
    <div className="tenders-container">
      <h1>СРЕДИ ВЫПОЛНЕННЫХ ТЕНДЕРОВ</h1>
      <div className="tenders-grid">
        {tenders.map((tender, index) => (
          <TenderCard tender={tender} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Tenders;
