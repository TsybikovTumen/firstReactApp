import LogoIcon from '/programming/firstReactApp/src/res/images/logo.png'
import './styles.css'
const Header = () => {
    return (
        <div className='header'>
            <img src={LogoIcon} alt={"Company Logo"} className="logo"/>
            <ul className='header-list'>
                <li>
                    <a className='item'>О нас</a>
                </li>
                <li>
                    <a className='item'>Доставка</a>
                </li>
                <li>
                    <a className='item'>Гарантии</a>
                </li>
                <li>
                    <a className='item'>Отзывы</a>
                </li>
            </ul>
            <a href="https://t.me/trade_ark" className='icon-telegram'/>
        </div>
    )
};

export default Header;

