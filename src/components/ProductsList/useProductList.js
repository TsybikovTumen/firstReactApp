import { useState } from "react";

export const useProductList = ({ items = [] }) => {
  const [products, setProducts] = useState(items.slice(0, 5));
  const [isVisible, setIsVisible] = useState(items.length > 5);

  const showMore = () => {
    setProducts(items);
    setIsVisible(false);
  };

  return { isVisible, products, showMore };
};
