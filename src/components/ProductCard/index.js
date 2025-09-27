import React from "react";
import { useNavigate } from 'react-router-dom';

import './styles.css'

const ProductCard = ({item}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${(item.category << 16) | (item.id & 0xFFFF)}`);
    };
   
    return (
        <div onClick={handleClick} className="product-card">
            <img src={item.image} alt={item.name} className="icon"/>
            <p className="product-name"><strong>{item.name}</strong></p>
            <p className="price">{item.price} ₽</p>
        </div>
    )
}

export default ProductCard;