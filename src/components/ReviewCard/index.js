import './styles.css'
import TelegramIcon from '../../res/images/telegram-black.png';

const ReviewCard = ({review}) => {
    return (
        <div className="review-card">
            <div style={{display: "flex"}}>
                <h2 style={{fontFamily: "Montserrat"}}>{review.author}</h2>
                <a 
                    href={review.ref} 
                    className="icon-telegram-review"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                >
                    <img 
                        src={TelegramIcon} 
                        alt="Telegram" 
                        style={{ width: '50px', height: '50px' }}
                    />
                </a>
            </div>
            <p style={{fontFamily: "Montserrat"}}>{review.text}</p>
        </div>
    )
}

export default ReviewCard;