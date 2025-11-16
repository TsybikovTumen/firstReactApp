import ProductCard from "../ProductCard";
import { useProductList } from "./useProductList";
import { useEffect, useRef } from "react";
import './styles.css';

const ProductsList = ({ items = []}) => {
    const { isVisible, products, showMore } = useProductList({ 
      items, 
      initialCount: 20, 
      step: 5 
    });
    
    const observerTarget = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && isVisible) {
                    showMore();
                }
            },
            { threshold: 0.1 }
        );

        const currentTarget = observerTarget.current;
        if (currentTarget) {
            observer.observe(currentTarget);
        }

        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget);
            }
        };
    }, [isVisible, showMore]);
  
    return (
        <div>
            <ul className="products-list">
                {products.map((item, index) => (
                    <li key={item.id || index}>
                        <ProductCard item={item}/>
                    </li>
                ))}  
            </ul>

            {isVisible && (
                <div ref={observerTarget} className="scroll-trigger">
                    <div className="loading-indicator">Загрузка товаров...</div>
                </div>
            )}
        </div>
    );
}

export default ProductsList;