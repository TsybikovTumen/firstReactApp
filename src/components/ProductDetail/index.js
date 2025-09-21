import './styles.css';
import { useProductDetail } from './useProductDetail';

const ProductDetail = ( {id} ) => {
    
    const { product } = useProductDetail({id : parseInt(id)})

    if (!product) {
        return <p>Loading...</p>; 
    }

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
                <h1 style={{fontFamily : "Montserrat"}}>Название: {product.name}</h1>
                <p className="product-description">О товаре: {product.description}</p>
                <h2 className="product-price">{product.price} ₽</h2>
            </div>
        </div>
    );
}

export default ProductDetail;
