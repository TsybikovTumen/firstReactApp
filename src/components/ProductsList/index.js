import ProductCard from "../ProductCard";
import { useProductList } from "./useProductList";
import './styles.css';

const ProductsList = ({ items = []}) => {
    const { isVisible, products, showMore, remainingCount } = useProductList({ 
      items, 
      initialCount: 20, 
      step: 5 
    });
  
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
                <div className="show-more-container">
                    <button onClick={showMore} className="show-more-button">
                        Показать ещё {remainingCount > 0 && `(${remainingCount})`}
                    </button>
                </div>
            )}
        </div>
    );
}

export default ProductsList;