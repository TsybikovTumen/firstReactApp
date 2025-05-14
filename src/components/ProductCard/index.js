import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

import ModalCardInfo from "../ModalCardInfo/ModalCardInfo.js";

import './styles.css'

const ProductCard = ({item}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);

    const closeModal = () => setIsOpen(false);
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${item.id}`); 
    };

    return (
        <div onClick={handleClick} className="product-card">
            <img src={item.icon} alt={item.name} className="icon" onClick={openModal}/>
            <p style={{fontFamily: "Light"}}>{item.name}</p>
            <p>Price: {item.price}</p>
            <ModalCardInfo isOpen={isOpen} onClose={closeModal} info={item}/>
        </div>
    )
}

export default ProductCard;