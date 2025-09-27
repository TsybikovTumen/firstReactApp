import './styles.css'

const About = () => {
    return (
        <div className="about-container">
            <h1 style={{ fontFamily: "Montserrat" }}>О НАС</h1>

<section class="about-intro" style={{ fontFamily: "Montserrat", marginBottom: "2rem" }}>
  <p>Ваш надежный <strong>IT-мост в Китай</strong>.</p>
  <p>Мы не просто закупаем оборудование. Мы решаем ваши логистические и технические проблемы, беря все риски на себя.</p>
</section>

<section class="superpower" style={{ fontFamily: "Montserrat", marginBottom: "2rem" }}>
  <h3>Наша суперсила — ответственность</h3>
  <p>Мы начинали со швабр и кроссовок, чтобы на своём опыте познать все боли закупок: брак, срыв сроков, ненадёжных поставщиков. Этот опыт закалил нас. Когда мы пришли в IT, мы уже знали главное: как гарантировать результат.</p>
</section>

<section class="why-choose-us" style={{ fontFamily: "Montserrat", marginBottom: "2rem" }}>
  <h3>Почему вам не нужно беспокоиться</h3>
  <ul style={{marginLeft: "1.5rem"}}>
    <li><strong>Гарантия 12 месяцев.</strong> Мы — ваш единый гарантный центр. Любой брак — наша головная боль, а не ваша. Мы решаем, а не ищем виноватых.</li>
    <li><strong>Проверка «на земле».</strong> Наши люди в Китае лично проверяют поставщиков и контролируют товар перед отгрузкой.</li>
    <li><strong>Техническая экспертиза.</strong> Говорим с вами на одном языке. Поможем подобрать оборудование, аналоги и дадим совет.</li>
    <li><strong>Четкая логистика.</strong> Доставляем любым способом: от авиа (5-8 дней) до морских контейнеров. Все грузы застрахованы.</li>
  </ul>
</section>

<section class="mission" style={{ fontFamily: "Montserrat", marginBottom: "2rem" }}>
  <h3>Наша миссия</h3>
  <p>Обеспечивать технологический суверенитет российских компаний надёжными поставками.</p>
</section>

<section class="facts" style={{ fontFamily: "Montserrat", marginBottom: "2rem" }}>
  <h3>Коротко о нас</h3>
  <dl style={{marginLeft: "1.5rem", lineHeight: "1.6" }}>
    <dt style={{ marginBottom: "1.25rem" }}><strong>Опыт:</strong> 5 лет на рынке закупок.</dt>
    <dt style={{ marginBottom: "1.25rem" }}><strong>Специализация:</strong> Комплексные поставки IT- и электрооборудования.</dt>
    <dt style={{ marginBottom: "1.25rem" }}><strong>Клиенты:</strong> Частный бизнес и госзаказчики (44-ФЗ, 223-ФЗ).</dt>
    <dt style={{ marginBottom: "1.25rem" }}><strong>География:</strong> Работаем по всей России.</dt>
  </dl>
</section>

        </div>
    )
};

export default About;