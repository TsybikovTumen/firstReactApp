import './styles.css';

const Garants = () => {
  return (
    <div className="garants-container" id="garranty">
      <div className="garants-header">
        <h1 className="garants-title">ГАРАНТИЯ КАЧЕСТВА И ПОЛНОЙ ОТВЕТСТВЕННОСТИ</h1>
        <div className="garants-divider"></div>
      </div>

      <p className="garants-intro">
        Для нас гарантия — это не просто формальность, а фундамент доверия. Мы несем полную ответственность 
        за каждую единицу оборудования, которое поставляем.
      </p>

      <section className="garants-approach">
        <h3 className="section-title">
          Наш подход к гарантийным обязательствам
        </h3>

        <div className="guarantees-grid">
          <div className="guarantee-card">
            <div className="guarantee-content">
              <h4 className="guarantee-title">Стандартный гарантийный срок — 12 месяцев</h4>
              <p className="guarantee-text">
                Большинство оборудования покрывается этим сроком. Конкретные условия по каждому устройству 
                уточняются в договоре.
              </p>
            </div>
          </div>

          <div className="guarantee-card">
            <div className="guarantee-content">
              <h4 className="guarantee-title">Мы — ваш единый гарантийный центр</h4>
              <p className="guarantee-text">
                Вам не нужно самостоятельно выяснять отношения с заводом-изготовителем или логистом. 
                Всё взаимодействие — через нас.
              </p>
            </div>
          </div>

          <div className="guarantee-card">
            <div className="guarantee-content">
              <h4 className="guarantee-title">Решаем, а не ищем виноватых</h4>
              <p className="guarantee-text">
                Если ошибка на стороне производства или транспортировки — мы оперативно заменим товар 
                или вернем средства.
              </p>
            </div>
          </div>

          <div className="guarantee-card">
            <div className="guarantee-content">
              <h4 className="guarantee-title">Контроль качества на всех этапах</h4>
              <p className="guarantee-text">
                Проверяем поставщиков, проводим предотгрузочный контроль — гарантия — это ваше спокойствие.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Garants;
