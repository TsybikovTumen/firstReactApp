import React from "react";
import { useNavigate } from 'react-router-dom';
import placeholderImage from '../../res/images/product-placeholder.png';
import './styles.css'

const ProductCard = ({ item, currentProductId }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        const newProductId = (item.id);
        
        if (newProductId.toString() !== currentProductId) {
            navigate(`/product/${newProductId}`, { replace: true });
            
            setTimeout(() => {
                window.location.reload();
            }, 100);
        }
    };
    
    return (
        <div onClick={handleClick} className="product-card">
            <img 
                src={item.img || placeholderImage} 
                alt={item.product_name} 
                className="icon"
            />
            <p className="product-name"><strong>{item.product_name}</strong></p>
            <p className="price">{item.price} ₽</p>
        </div>
    )
}

export default ProductCard;