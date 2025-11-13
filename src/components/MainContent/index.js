import React, { useState } from "react";
import ProductsList from "../ProductsList/index.js";
import './styles.css'
import { useMainContent } from "./useMainContent.js";

const MainContent = ({products}) => {
    const {accProducts, commProducts, servProducts} = useMainContent({products})
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        { id: 'all', name: 'Все товары', products: products },
        { id: 'storage', name: 'Накопители данных', products: accProducts },
        { id: 'switches', name: 'Коммутаторы', products: commProducts },
        { id: 'servers', name: 'Сервера', products: servProducts }
    ];

    const searchProducts = (products, searchTerm) => {
        if (!searchTerm.trim()) return products;
        
        return products.filter(product => 
            product.product_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.summary?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.key_features?.some(feature => 
                feature.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    };

    const activeCategoryData = categories.find(cat => cat.id === activeCategory);
    const filteredProducts = searchProducts(activeCategoryData.products, searchTerm);

    return (
        <div className="categories">
            <div className="category-header">
                <div className="category-tabs">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`tab-button ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.name}
                            <span className="product-count">({category.products.length})</span>
                        </button>
                    ))}
                </div>
                
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Поиск..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
            </div>

            <div className="category-content">
                <div className="category-header-info">
                    <h1 style={{fontFamily: "Montserrat"}}>
                        {activeCategoryData.name}
                        {searchTerm && (
                            <span className="search-results">
                                {' '}(найдено: {filteredProducts.length})
                            </span>
                        )}
                    </h1>
                    
                    {searchTerm && (
                        <div className="search-term">
                            Результаты по запросу: "<strong>{searchTerm}</strong>"
                            <button 
                                onClick={() => setSearchTerm('')}
                                className="clear-search-link"
                            >
                                Сбросить
                            </button>
                        </div>
                    )}
                </div>
                
                {filteredProducts.length === 0 ? (
                    <div className="no-products">
                        {searchTerm ? (
                            <p>По запросу "<strong>{searchTerm}</strong>" ничего не найдено</p>
                        ) : (
                            <p>В этой категории пока нет товаров</p>
                        )}
                    </div>
                ) : (
                    <ProductsList items={filteredProducts}/>
                )}
            </div>
        </div>
    )
}

export default MainContent;