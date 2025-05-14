import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Импортируйте стили Swiper
import ReviewCard from '../ReviewCard';

const reviews = [
    { id: 1, text: "Отличный сервис! Рекомендую всем.", author: "Иван", ref: "https://t.me/arc_trade"},
    { id: 2, text: "Продукция на высшем уровне! Буду заказывать снова.", author: "Мария", ref: "https://t.me/arc_trade"},
    { id: 3, text: "Очень доволен покупкой, спасибо!", author: "Алексей", ref: "https://t.me/arc_trade"},
    { id: 4, text: "Очень доволен покупкой, спасибо!", author: "Алексей", ref: "https://t.me/arc_trade"},
    { id: 5, text: "Очень доволен покупкой, спасибо!", author: "Алексей", ref: "https://t.me/arc_trade"},
    { id: 6, text: "Очень доволен покупкой, спасибо!", author: "Алексей", ref: "https://t.me/arc_trade"},
    { id: 7, text: "Очень доволен покупкой, спасибо!", author: "Алексей", ref: "https://t.me/arc_trade"},
];

const ReviewSlider = () => {
    return (
        <div style={{marginTop: "5%"}}>
            <h1 style={{fontFamily: "Light"}}>Отзывы</h1>
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4, 
                },
            }}
            style={{ padding: '20px' }}>
            {reviews.map(review => (
                <SwiperSlide key={review.id}>
                    <ReviewCard review={review}/>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    );
};

export default ReviewSlider;
