import './styles.css';

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-header">
        <h1 className="about-title">О НАС</h1>
        <div className="about-divider"></div>
      </div>

      <section className="about-intro">
        <p className="intro-text">
          Ваш надежный <strong>IT-мост в Китай</strong>.
        </p>
        <p className="intro-description">
          Мы не просто закупаем оборудование. Мы решаем ваши логистические и технические проблемы, беря все риски на себя.
        </p>
      </section>

      <section className="superpower">
        <h3>Наша суперсила — ответственность</h3>
        <p>
          Мы начинали со швабр и кроссовок, чтобы на своём опыте познать все боли закупок: брак, срыв сроков, ненадёжных поставщиков. 
          Этот опыт закалил нас. Когда мы пришли в IT, мы уже знали главное: как гарантировать результат.
        </p>
      </section>

      <section className="why-choose-us">
        <h3>Почему вам не нужно беспокоиться</h3>
        <ul className="features-list">
          <li className="feature-item">
            <div className="feature-content">
              <strong>Гарантия 12 месяцев.</strong> Мы — ваш единый гарантный центр. 
              Любой брак — наша головная боль, а не ваша. Мы решаем, а не ищем виноватых.
            </div>
          </li>
          <li className="feature-item">
            <div className="feature-content">
              <strong>Проверка «на земле».</strong> Наши люди в Китае лично проверяют поставщиков 
              и контролируют товар перед отгрузкой.
            </div>
          </li>
          <li className="feature-item">
            <div className="feature-content">
              <strong>Техническая экспертиза.</strong> Говорим с вами на одном языке. 
              Поможем подобрать оборудование, аналоги и дадим совет.
            </div>
          </li>
          <li className="feature-item">
            <div className="feature-content">
              <strong>Четкая логистика.</strong> Доставляем любым способом: от авиа (5-8 дней) 
              до морских контейнеров. Все грузы застрахованы.
            </div>
          </li>
        </ul>
      </section>

      <section className="mission">
        <h3>Наша миссия</h3>
        <p className="mission-text">
          Обеспечивать технологический суверенитет российских компаний надёжными поставками.
        </p>
      </section>

      <section className="facts">
        <h3>Коротко о нас</h3>
        <div className="facts-grid">
          <div className="fact-card">
            <div className="fact-content">
              <strong>Опыт:</strong> 5 лет на рынке закупок.
            </div>
          </div>
          <div className="fact-card">
            <div className="fact-content">
              <strong>Специализация:</strong> Комплексные поставки IT- и электрооборудования.
            </div>
          </div>
          <div className="fact-card">
            <div className="fact-content">
              <strong>Клиенты:</strong> Частный бизнес и госзаказчики (44-ФЗ, 223-ФЗ).
            </div>
          </div>
          <div className="fact-card">
            <div className="fact-content">
              <strong>География:</strong> Работаем по всей России.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
