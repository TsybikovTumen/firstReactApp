import ProductImage from '../ProductImage';
import './styles.css';
import { useProductDetail } from './useProductDetail';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ProductDetail = ({ id }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { product } = useProductDetail({ id: parseInt(id) });

  if (!product) {
    return (
      <div className="product-detail-loading">
        <p>Загрузка...</p>
      </div>
    );
  }

  const handleBack = () => {
    const category = searchParams.get('category');
    const backUrl = category && category !== 'all' ? `/?category=${category}` : '/';
    navigate(backUrl);
    window.scrollTo(0, 0);
  };

  return (
    <div className="product-detail">
      <button onClick={handleBack} className="back-button">
        ← Назад к товарам
      </button>

      <div className="product-detail-header">
        <h1 className="product-detail-title">{product.product_name}</h1>
      </div>

      <div className="product-detail-content">
        <div className="product-image-section">
          <ProductImage product={product} />
        </div>

        <div className="product-info-section">
          {/* Краткое описание */}
          {product.summary && (
            <section className="product-summary-section">
              <h2 className="section-title">Описание</h2>
              <p className="summary-text">{product.summary}</p>
            </section>
          )}

          {/* Ключевые особенности */}
          {product.key_features && product.key_features.length > 0 && (
            <section className="key-features-section">
              <h2 className="section-title">Ключевые особенности</h2>
              <ul className="features-list">
                {product.key_features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Характеристики */}
          {product.specs && (
            <section className="product-specs-section">
              <h2 className="section-title">Характеристики</h2>
              <div className="specs-container">
                {/* Основные характеристики */}
                {product.specs.General_features && product.specs.General_features.length > 0 && (
                  <div className="spec-group">
                    <h3 className="spec-group-title">Основные характеристики</h3>
                    <div className="spec-list">
                      {product.specs.General_features.map(([key, value], index) => (
                        <div key={index} className="spec-item">
                          <span className="spec-key">{key}</span>
                          <span className="spec-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Технические параметры */}
                {product.specs.Technical_parameters && product.specs.Technical_parameters.length > 0 && (
                  <div className="spec-group">
                    <h3 className="spec-group-title">Технические параметры</h3>
                    <div className="spec-list">
                      {product.specs.Technical_parameters.map(([key, value], index) => (
                        <div key={index} className="spec-item">
                          <span className="spec-key">{key}</span>
                          <span className="spec-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Физические параметры */}
                {product.specs.Physical_parameters && product.specs.Physical_parameters.length > 0 && (
                  <div className="spec-group">
                    <h3 className="spec-group-title">Физические параметры</h3>
                    <div className="spec-list">
                      {product.specs.Physical_parameters.map(([key, value], index) => (
                        <div key={index} className="spec-item">
                          <span className="spec-key">{key}</span>
                          <span className="spec-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Совместимость и условия работы */}
                {product.specs.compatibility_and_operating_conditions && 
                 product.specs.compatibility_and_operating_conditions.length > 0 && (
                  <div className="spec-group">
                    <h3 className="spec-group-title">Совместимость и условия работы</h3>
                    <div className="spec-list">
                      {product.specs.compatibility_and_operating_conditions.map(([key, value], index) => (
                        <div key={index} className="spec-item">
                          <span className="spec-key">{key}</span>
                          <span className="spec-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Блок с ценой по запросу */}
          <section className="product-price-section">
            <div className="price-request-card">
              <h3 className="price-request-title">Цена по запросу</h3>
              <p className="price-request-text">
                Для получения актуальной цены и условий поставки свяжитесь с нами
              </p>
              <div className="price-request-contacts">
                <a href="tel:+79244506430" className="contact-button">
                  +7 (924) 450-64-30
                </a>
                <a href="mailto:info@ark-trade.ru" className="contact-button">
                  info@ark-trade.ru
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
