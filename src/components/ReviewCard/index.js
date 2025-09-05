import './styles.css'
const ReviewCard = ({review}) => {
    return (
        <div className="review-card">
            <div style={{display: "flex"}}>
                <h2 style={{fontFamily: "Light"}}>{review.author}</h2>
                <a href={review.ref} className="icon-telegram-review"/>
            </div>
            <p style={{fontFamily: "Light"}}>{review.text}</p>
        </div>
    )
}

export default ReviewCard;