import './styles.css'
const ReviewCard = ({review}) => {
    return (
        <div className="review-card">
            <div style={{display: "flex"}}>
                <h2 style={{fontFamily: "Montserrat"}}>{review.author}</h2>
                <a href={review.ref} className="icon-telegram-review"/>
            </div>
            <p style={{fontFamily: "Montserrat"}}>{review.text}</p>
        </div>
    )
}

export default ReviewCard;