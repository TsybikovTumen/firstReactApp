import LogoIcon from '../../res/images/logo.png';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState('about'); // по умолчанию первая секция

  const handleClickLogo = () => {
    navigate(`/`);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  const handleClickItem = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
      <ul className='header-list'>
        {[
          { id: 'about', label: 'О НАС' },
          { id: 'delivery', label: 'ДОСТАВКА' },
          { id: 'garranty', label: 'ГАРАНТИИ' },
          { id: 'tenders', label: 'ТЕНДЕРЫ' },
        ].map(item => (
          <li key={item.id}>
            <span
              className={`item ${active === item.id ? 'active' : ''}`}
              onClick={() => handleClickItem(item.id)}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>
      <a href="https://t.me/trade_ark" className='icon-telegram'/>
    </header>
  )
};

export default Header;
