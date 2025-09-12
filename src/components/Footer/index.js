import './styles.css';
import Partner1 from '../../res/images/logo192.png';
import Partner2 from '../../res/images/logo192.png';
import Partner3 from '../../res/images/logo192.png';
import Partner4 from '../../res/images/logo192.png';
const Footer = () => {
    const partners = [ Partner1, Partner2, Partner3, Partner4];

    return (
        <footer className='footer'>
            <p style={{fontFamily: "Light", color: "whitesmoke", opacity: "0.5", textAlign: "center"}}>Партнеры</p>

            <div className="partners-grid">
                {partners.map((logo, index) => (
                    <img key={index} src={logo} alt={`Partner ${index + 1}`} className="partner-logo"/>
                ))}
            </div>

            <p style={{fontFamily: "Light", color: "whitesmoke", opacity: "0.5", textAlign: "center", marginTop: "20px"}}>
                Copyright © 2025 ArcTrade. All rights reserved
            </p>
        </footer>
    );
}

export default Footer;
