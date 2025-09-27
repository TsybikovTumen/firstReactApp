import React, { useEffect } from "react";
import ProductCard from "../ProductCard/index.js";
import { useProductList } from "./useProductList";
import './styles.css';

const ProductsList = ({ items }) => {
    const { isVisible, products, showMore } = useProductList({ items }); 

    useEffect(() => {
        const listItems = document.querySelectorAll('.products-list li');
        listItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 25);
        });
    }, [products]);

    const remainingCount = items.length - products.length;

    return (
        <div>
            <ul className="products-list">
                {products?.map((item, index) => (
                    <li key={index}>
                        <ProductCard item={item}/>
                    </li>
                ))}  
            </ul>

            {isVisible && 
                <button onClick={showMore} className="show-more">
                    Показать ещё ({remainingCount})
                </button>
            }
        </div>
    );
}

export default ProductsList;
