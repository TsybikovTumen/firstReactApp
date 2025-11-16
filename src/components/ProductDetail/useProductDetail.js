import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../ProductsProvider';

export const useProductDetail = ({ id }) => {
    const products = useContext(ProductsContext)
     
    const [product, setProduct] = useState(null)
    
    useEffect(() => {
        if (!products || products.length === 0) return;
        const foundProduct = products.find(item => item.id === id)
        setProduct(foundProduct);
    }, [products, id]);

    return { product };
}
