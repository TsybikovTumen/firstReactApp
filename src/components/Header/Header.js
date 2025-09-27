import LogoIcon from '../../res/images/logo.png';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const Header = () => {
  
  const navItems = [
    { id: 'about', label: 'О НАС' },
    { id: 'delivery', label: 'ДОСТАВКА' },
    { id: 'garranty', label: 'ГАРАНТИИ' },
    { id: 'tenders', label: 'ТЕНДЕРЫ' },
  ];

  const navigate = useNavigate();
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClickLogo = () => {
    setActive('');
    navigate(`/`);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
    setMenuOpen(false);
  };

  const handleClickItem = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); 
  };

  return (
    <header className='header'>
      <img
        src={LogoIcon}
        alt="Company Logo"
        className="logo"
        onClick={handleClickLogo}
        style={{ cursor: 'pointer' }} 
      />

      <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}

      <ul className={`header-list ${menuOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <li key={item.id}>
            <span
              className={`item ${active === item.id ? 'active' : ''}`}
              onClick={() => handleClickItem(item.id)}
            >
              {item.label}
            </span>
          </li>
        ))}
         <li>
          <a href="https://t.me/trade_ark" className='icon-telegram'/>
        </li>
      </ul>
    </header>
  )
};

export default Header;
