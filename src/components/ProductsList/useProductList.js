import { useState, useEffect, useCallback } from "react";

export const useProductList = ({ items = [], initialCount = 5, step = 5 }) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [products, setProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const visibleProducts = items.slice(0, visibleCount);
    setProducts(visibleProducts);
    setIsVisible(visibleCount < items.length);
    setIsLoading(false);
  }, [items, visibleCount]);

  const showMore = useCallback(() => {
    if (isLoading || !isVisible) return;
    
    setIsLoading(true);
    setVisibleCount(prevCount => {
      const newCount = Math.min(prevCount + step, items.length);
      return newCount;
    });
  }, [isLoading, isVisible, step, items.length]);

  return { 
    isVisible, 
    products, 
    showMore,
    remainingCount: items.length - visibleCount
  };
};