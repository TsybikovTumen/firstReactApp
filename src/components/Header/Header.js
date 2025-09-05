import LogoIcon from '/programming/firstReactApp/src/res/images/logo.png'
import './styles.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/`);
    };
    return (
        <header className='header'>
            <img src={LogoIcon} alt={"Company Logo"} className="logo" onClick={handleClick}/>
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

