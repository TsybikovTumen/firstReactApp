import { useState, useEffect } from "react";

export const useProductList = ({ items = [], initialCount = 5, step = 5 }) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [products, setProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const visibleProducts = items.slice(0, visibleCount);
    setProducts(visibleProducts);
    setIsVisible(visibleCount < items.length);
    
  }, [items, visibleCount]);

  const showMore = () => {
    const newCount = Math.min(visibleCount + step, items.length);
    setVisibleCount(newCount);
    console.log("➕ Show more clicked, new count:", newCount);
  };

  return { 
    isVisible, 
    products, 
    showMore,
    remainingCount: items.length - visibleCount
  };
};