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

            {isVisible && 
                <button onClick={showMore} className="show-more">
                    Показать ещё ({remainingCount})
                </button>
            }
        </div>
    );
}

export default ProductsList;