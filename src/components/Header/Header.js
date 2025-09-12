import LogoIcon from '../../res/images/logo.png';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/`);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // скролл наверх
    };

    return (
        <header className='header'>
            <img
                src={LogoIcon}
                alt={"Company Logo"}
                className="logo"
                onClick={handleClick}
                style={{ cursor: 'pointer' }} // чтобы курсор был интерактивным
            />
            <ul className='header-list'>
                <li>
                    <a href="#about" className='item'>О нас</a>
                </li>
                <li>
                    <a href="#delivery" className='item'>Доставка</a>
                </li>
                <li>
                    <a href="#garranty" className='item'>Гарантии</a>
                </li>
                <li>
                    <a href="#reviews" className='item'>Отзывы</a>
                </li>
                <li>
                    <a href="#partners" className='item'>Наши партнеры</a>
                </li>
            </ul>
            <a href="https://t.me/trade_ark" className='icon-telegram'/>
        </header>
    )
};

export default Header;
