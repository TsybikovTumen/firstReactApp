import './styles.css';

const Delivery = () => {
  return (
    <div className="delivery-container" id="delivery">
      <div className="delivery-header">
        <h1 className="delivery-title">ЧЕТКАЯ И ПРЕДСКАЗУЕМАЯ ЛОГИСТИКА ИЗ КИТАЯ В ЛЮБУЮ ТОЧКУ РОССИИ</h1>
        <div className="delivery-divider"></div>
      </div>

      <p className="delivery-intro">
        Мы предлагаем полный спектр логистических услуг, чтобы вы получили свой груз точно в срок и в идеальном состоянии. 
        Отлаженная цепочка — один из наших ключевых коньков.
      </p>

      <section className="delivery-options">
        <h3 className="section-title">
          Наши стандартные варианты доставки
        </h3>

        <div className="options-grid">
          <div className="option-card">
            <div className="option-header">
              <h4 className="option-title">Авиадоставка</h4>
            </div>
            <div className="option-details">
              <div className="option-time">
                <span className="time-label">Срок:</span>
                <span className="time-value">5-8 дней</span>
              </div>
              <p className="option-description">
                Идеально подходит для: срочных заказов, небольших партий и ценного оборудования.
              </p>
            </div>
          </div>

          <div className="option-card">
            <div className="option-header">
              <h4 className="option-title">Автомобильная доставка (быстрая)</h4>
            </div>
            <div className="option-details">
              <div className="option-time">
                <span className="time-label">Срок:</span>
                <span className="time-value">12-15 дней</span>
              </div>
              <p className="option-description">
                Идеально подходит для: средних и крупных партий, когда важен баланс между скоростью и стоимостью.
              </p>
            </div>
          </div>

          <div className="option-card">
            <div className="option-header">
              <h4 className="option-title">Автомобильная доставка (эконом-класса)</h4>
            </div>
            <div className="option-details">
              <div className="option-time">
                <span className="time-label">Срок:</span>
                <span className="time-value">18-23 дня</span>
              </div>
              <p className="option-description">
                Идеально подходит для: крупногабаритных партий и не самых срочных проектов.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="delivery-custom">
        <h3>Индивидуальный подход</h3>
        <p>
          Мы понимаем, что каждый проект уникален. Поэтому всегда готовы рассмотреть и предложить индивидуальный маршрут 
          и способ доставки, исходя из ваших задач, бюджета и предпочтений.
        </p>
        <p className="delivery-note">
          Все грузы обязательно страхуются. Мы контролируем каждый этап пути и держим вас в курсе статуса заказа.
        </p>
      </section>
    </div>
  );
};

export default Delivery;
