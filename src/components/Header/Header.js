import { useState, useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LogoIcon from '../../res/images/logo.png';
import TelegramIcon from '../../res/images/telegram-black.png';
import './styles.css';

const NAV_ITEMS = [
  { id: 'about', label: 'О НАС' },
  { id: 'delivery', label: 'ДОСТАВКА' },
  { id: 'garranty', label: 'ГАРАНТИИ' },
  { id: 'tenders', label: 'ТЕНДЕРЫ' },
];

const CONTACTS = {
  phone: { value: '+7 (924) 450-64-30', href: 'tel:+79244506430' },
  email: { value: 'info@ark-trade.ru', href: 'mailto:info@ark-trade.ru' },
};

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  // Отслеживание скролла для эффекта прозрачности и тени
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 100; // Порог начала прозрачности
      const maxScroll = 300; // Максимальный скролл для полной прозрачности
      
      setIsScrolled(scrollY > 10);
      
      // Вычисляем прозрачность: от 1 (непрозрачный) до 0.7 (прозрачный)
      if (scrollY < scrollThreshold) {
        setScrollOpacity(1);
      } else if (scrollY > maxScroll) {
        setScrollOpacity(0.7);
      } else {
        // Плавный переход между scrollThreshold и maxScroll
        const opacity = 1 - ((scrollY - scrollThreshold) / (maxScroll - scrollThreshold)) * 0.3;
        setScrollOpacity(Math.max(0.7, opacity));
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрытие меню при изменении роута
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Закрытие меню при клике вне его области
  useEffect(() => {
    if (!isMenuOpen) return;
    
    const handleClickOutside = (e) => {
      if (!e.target.closest('.header-list') && !e.target.closest('.burger')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Обработчик клика по логотипу
  const handleLogoClick = useCallback(() => {
    setActiveSection('');
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  }, [navigate]);

  // Обработчик клика по пункту навигации
  const handleNavClick = useCallback((id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  }, []);

  // Переключение меню
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return (
    <header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      style={{ 
        opacity: scrollOpacity,
        backdropFilter: scrollOpacity < 1 ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrollOpacity < 1 ? 'blur(10px)' : 'none',
      }}
    >
      <div className="header-container">
        {/* Логотип */}
        <div className="logo-wrapper" onClick={handleLogoClick}>
          <img
            src={LogoIcon}
            alt="ARKTRADE Logo"
            className="logo"
            loading="eager"
          />
        </div>

        {/* Контакты (десктоп) */}
        <div className="header-contacts">
          <a 
            href={CONTACTS.phone.href} 
            className="contact-link"
            aria-label="Позвонить"
          >
            <span className="contact-icon">📞</span>
            {CONTACTS.phone.value}
          </a>
          <a 
            href={CONTACTS.email.href} 
            className="contact-link"
            aria-label="Написать email"
          >
            <span className="contact-icon">✉️</span>
            {CONTACTS.email.value}
          </a>
        </div>

        {/* Навигация */}
        <nav className="header-nav">
          <button 
            className={`burger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Меню"
            aria-expanded={isMenuOpen}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>

          {isMenuOpen && (
            <div 
              className="overlay" 
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
          )}

          <ul className={`header-list ${isMenuOpen ? 'open' : ''}`}>
            {NAV_ITEMS.map(item => (
              <li key={item.id}>
                <button
                  className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                  aria-label={item.label}
                >
                  {item.label}
                </button>
              </li>
            ))}
            
            {/* Контакты (мобильная версия) */}
            <li className="mobile-contacts">
              <a 
                href={CONTACTS.phone.href} 
                className="contact-link-mobile"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="contact-icon">📞</span>
                {CONTACTS.phone.value}
              </a>
              <a 
                href={CONTACTS.email.href} 
                className="contact-link-mobile"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="contact-icon">✉️</span>
                {CONTACTS.email.value}
              </a>
            </li>

            {/* Telegram */}
            <li className="telegram-item">
              <a 
                href="https://t.me/trade_ark" 
                className="telegram-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                onClick={() => setIsMenuOpen(false)}
              >
                <img 
                  src={TelegramIcon} 
                  alt="Telegram" 
                  className="telegram-icon"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
