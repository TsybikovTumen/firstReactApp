import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../ProductsProvider';

export const useProductDetail = ({ id }) => {
    const products = useContext(ProductsContext)
    const category = id >> 16; 
    const itemId = id & 0xFFFF; 
    
    const [product, setProduct] = useState(null)
    
    useEffect(() => {
        if (!products || products.length === 0) return;

        const foundCategory = products.find(categoryItem => categoryItem.id === category)
        const foundProduct = foundCategory.products.find(item => item.id === itemId)
        setProduct(foundProduct);
    }, [itemId, category, products]);

    return { product };
}
