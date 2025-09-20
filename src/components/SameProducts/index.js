import ProductCard from '../ProductCard';
import { useSameProducts } from './useSameProducts';
import './styles.css'

const SameProducts = ({id}) => {

    const {products} = useSameProducts({id})
    if (!products) {
        return <div>Loading...</div>
    }
    return (
        <div className="same-products">
            <h2 style={{fontFamily: "Montserrat"}}>Похожие товары</h2>
            <ul className="same-products-list">
                {products?.map((item, index) => (
                    <li key={index}>
                        <ProductCard item={item}/>
                    </li>
                ))}  
            </ul>
        </div>
    );
}

export default SameProducts;