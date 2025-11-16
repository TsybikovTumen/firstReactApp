import { useState, useEffect, useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductsList from '../ProductsList';
import { useMainContent } from './useMainContent';
import './styles.css';

const CATEGORIES_CONFIG = [
  { id: 'all', name: 'Все товары' },
  { id: 'storage', name: 'Накопители данных' },
  { id: 'switches', name: 'Коммутаторы' },
  { id: 'servers', name: 'Сервера' },
];

const MainContent = ({ products = [] }) => {
  const { accProducts, commProducts, servProducts } = useMainContent({ products });
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Инициализация активной категории из URL
  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryFromUrl = searchParams.get('category');
    return categoryFromUrl && ['all', 'storage', 'switches', 'servers'].includes(categoryFromUrl)
      ? categoryFromUrl
      : 'all';
  });

  // Синхронизация категории с URL
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      const validCategories = ['all', 'storage', 'switches', 'servers'];
      if (validCategories.includes(categoryFromUrl)) {
        setActiveCategory(prev => prev !== categoryFromUrl ? categoryFromUrl : prev);
      }
    } else {
      setActiveCategory(prev => prev !== 'all' ? 'all' : prev);
    }
  }, [searchParams]);

  // Обработчик смены категории
  const handleCategoryChange = useCallback((categoryId) => {
    setActiveCategory(categoryId);
    setSearchTerm(''); // Сбрасываем поиск при смене категории
    
    if (categoryId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams, { replace: true });
  }, [searchParams, setSearchParams]);

  // Обработчик поиска
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  // Очистка поиска
  const handleClearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  // Формирование категорий с продуктами
  const categories = useMemo(() => {
    return CATEGORIES_CONFIG.map(config => {
      let categoryProducts = [];
      switch (config.id) {
        case 'all':
          categoryProducts = products;
          break;
        case 'storage':
          categoryProducts = accProducts;
          break;
        case 'switches':
          categoryProducts = commProducts;
          break;
        case 'servers':
          categoryProducts = servProducts;
          break;
        default:
          categoryProducts = [];
      }
      return { ...config, products: categoryProducts };
    });
  }, [products, accProducts, commProducts, servProducts]);

  // Фильтрация продуктов
  const filteredProducts = useMemo(() => {
    const activeCategoryData = categories.find(cat => cat.id === activeCategory);
    if (!activeCategoryData) return [];

    const categoryProducts = activeCategoryData.products || [];
    
    if (!searchTerm.trim()) {
      return categoryProducts;
    }

    const searchLower = searchTerm.toLowerCase();
    return categoryProducts.filter(product => {
      const nameMatch = product.product_name?.toLowerCase().includes(searchLower);
      const summaryMatch = product.summary?.toLowerCase().includes(searchLower);
      const featuresMatch = product.key_features?.some(feature =>
        feature.toLowerCase().includes(searchLower)
      );
      return nameMatch || summaryMatch || featuresMatch;
    });
  }, [categories, activeCategory, searchTerm]);

  const activeCategoryData = categories.find(cat => cat.id === activeCategory);

  return (
    <div className="main-content-wrapper">
      <div className="categories-container">
        {/* Заголовок с табами и поиском */}
        <div className="categories-header">
          {/* Табы категорий */}
          <div className="categories-tabs" role="tablist">
            {categories.map(category => (
              <button
                key={category.id}
                role="tab"
                aria-selected={activeCategory === category.id}
                aria-controls={`category-${category.id}`}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                <span className="category-name">{category.name}</span>
                <span className="category-count">({category.products.length})</span>
              </button>
            ))}
          </div>

          {/* Поиск */}
          <div className={`search-wrapper ${isSearchFocused ? 'focused' : ''}`}>
            <input
              type="text"
              placeholder="Найти"
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="search-input"
              aria-label="Найти товары"
            />
            {searchTerm && (
              <button
                onClick={handleClearSearch}
                className="search-clear"
                aria-label="Очистить поиск"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Контент категории */}
        <div className="category-content" id={`category-${activeCategory}`} role="tabpanel">
          {/* Информация о категории и поиске */}
          <div className="category-info">
            <h1 className="category-title">
              {activeCategoryData?.name}
              {searchTerm && (
                <span className="search-results-badge">
                  найдено: {filteredProducts.length}
                </span>
              )}
            </h1>

            {searchTerm && (
              <div className="search-info">
                <span className="search-info-text">
                  Результаты по запросу: <strong>"{searchTerm}"</strong>
                </span>
                <button
                  onClick={handleClearSearch}
                  className="search-clear-button"
                  aria-label="Очистить поиск"
                >
                  Сбросить
                </button>
              </div>
            )}
          </div>

          {/* Список товаров или сообщение об отсутствии */}
          {filteredProducts.length === 0 ? (
            <div className="empty-state">
              <p className="empty-state-text">
                {searchTerm ? (
                  <>
                    По запросу <strong>"{searchTerm}"</strong> ничего не найдено
                  </>
                ) : (
                  'В этой категории пока нет товаров'
                )}
              </p>
              {searchTerm && (
                <button
                  onClick={handleClearSearch}
                  className="empty-state-button"
                >
                  Очистить поиск
                </button>
              )}
            </div>
          ) : (
            <ProductsList items={filteredProducts} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
