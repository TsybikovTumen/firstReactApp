import './styles.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-contacts">
        <p>Контакты:</p>
        <a href="mailto:info@ark-trade.ru">info@ark-trade.ru</a>
        <a href="tel:+79245581738">+7 (924) 558-17-38</a>
        <a href="tel:+79244506430">+7 (924) 450-64-30</a>
        <a href="tel:+8618810907172">+86 188 1090 7172</a>
      </div>
      <p className="footer-copyright">
        Copyright © 2025 ArcTrade. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
