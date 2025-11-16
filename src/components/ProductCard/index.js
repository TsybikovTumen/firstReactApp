import { useNavigate } from 'react-router-dom';
import placeholderImage from '../../res/images/product-placeholder.png';
import './styles.css';

const ProductCard = ({ item, currentProductId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const newProductId = item.id;
    
    if (newProductId.toString() !== currentProductId?.toString()) {
      // Определяем категорию товара для возврата
      let categoryId = 'all';
      if (item.category === 1) {
        categoryId = 'storage';
      } else if (item.category === 2) {
        categoryId = 'switches';
      } else if (item.category === 3) {
        categoryId = 'servers';
      }
      
      navigate(`/product/${newProductId}?category=${categoryId}`);
    }
  };
  
  return (
    <div onClick={handleClick} className="product-card">
      <div className="product-card-image-wrapper">
        <img 
          src={item.img || placeholderImage} 
          alt={item.product_name || 'Товар'} 
          className="product-card-image"
          loading="lazy"
        />
        <div className="product-card-overlay">
          <span className="product-card-hover-text">Подробнее</span>
        </div>
      </div>
      
      <div className="product-card-content">
        <h3 className="product-card-name">{item.product_name}</h3>
        
        {item.summary && (
          <p className="product-card-summary">
            {item.summary.length > 120 
              ? `${item.summary.substring(0, 120)}...` 
              : item.summary}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
