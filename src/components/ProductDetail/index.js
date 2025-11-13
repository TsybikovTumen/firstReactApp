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
            <h1 style={{fontFamily : "Montserrat"}}>{product.product_name}</h1>
            <div className="product-info">
                <ProductImage product={product}/>
                <div className="product-details">
                    {/* Краткое описание (summary) */}
                    {product.summary && (
                        <div className="product-summary">
                            <h3>Описание</h3>
                            <p className="summary-text">{product.summary}</p>
                        </div>
                    )}
                    
                    {/* Характеристики */}
                    <div className="product-specs">

                        {/* Основные характеристики */}
                        {product.specs?.General_features && product.specs.General_features.length > 0 && (
                            <div className="spec-section">
                                <h4>Основные характеристики</h4>
                                <div className="spec-list">
                                    {product.specs.General_features.map(([key, value], index) => (
                                        <div key={index} className="spec-item">
                                            <span className="spec-key">{key}: </span>
                                            <span className="spec-value">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {/* Технические параметры */}
                        {product.specs?.Technical_parameters && product.specs.Technical_parameters.length > 0 && (
                            <div className="spec-section">
                                <h4>Технические параметры</h4>
                                <div className="spec-list">
                                    {product.specs.Technical_parameters.map(([key, value], index) => (
                                        <div key={index} className="spec-item">
                                            <span className="spec-key">{key}: </span>
                                            <span className="spec-value">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {/* Физические параметры */}
                        {product.specs?.Physical_parameters && product.specs.Physical_parameters.length > 0 && (
                            <div className="spec-section">
                                <h4>Физические параметры</h4>
                                <div className="spec-list">
                                    {product.specs.Physical_parameters.map(([key, value], index) => (
                                        <div key={index} className="spec-item">
                                            <span className="spec-key">{key}: </span>
                                            <span className="spec-value">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {/* Совместимость и условия работы */}
                        {product.specs?.compatibility_and_operating_conditions && product.specs.compatibility_and_operating_conditions.length > 0 && (
                            <div className="spec-section">
                                <h4>Совместимость и условия работы</h4>
                                <div className="spec-list">
                                    {product.specs.compatibility_and_operating_conditions.map(([key, value], index) => (
                                        <div key={index} className="spec-item">
                                            <span className="spec-key">{key}: </span>
                                            <span className="spec-value">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    
                    {/* Ключевые особенности */}
                    {product.key_features && product.key_features.length > 0 && (
                        <div className="key-features">
                            <h3>Ключевые особенности</h3>
                            <ul className="features-list">
                                {product.key_features.map((feature, index) => (
                                    <li key={index} className="feature-item">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
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
