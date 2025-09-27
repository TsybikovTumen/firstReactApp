import ProductImage from '../ProductImage';
import './styles.css';
import { useProductDetail } from './useProductDetail';

const ProductDetail = ( {id} ) => {
    
    const { product } = useProductDetail({id : parseInt(id)})

    if (!product) {
        return <p>Loading...</p>; 
    }

    return (
        <div className="product-detail">
            <h1 style={{fontFamily : "Montserrat"}}>{product.name}</h1>
            <div className="product-info">
                <ProductImage product={product}/>
                <div className="product-details">
                    <h2 style={{ fontFamily: "Montserrat" }}><strong>Описание</strong></h2>
                    <p className="product-description">{product.description}</p>
                </div>
    
                <div className="product-price">
                    <h2><strong>{product.price} ₽</strong></h2>
                    <div>от <strong>2 шт.</strong> — {product.price * 2} ₽</div>
                    <div>(от 100 шт. индивидуальная цена)</div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
