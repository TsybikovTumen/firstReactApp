import React from "react";
import { useNavigate } from 'react-router-dom';

import './styles.css'

const ProductCard = ({item}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${(item.category << 16) | (item.id & 0xFFFF)}`);
    };
   
    return (
        <div onClick={handleClick} className="product-card">
            <img src={item.image} alt={item.name} className="icon"/>
            <p className="product-price">{item.price}₽</p>
            <p className="product-name">{item.name}</p>
        </div>
    )
}

export default ProductCard;