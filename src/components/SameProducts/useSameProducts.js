import { useContext, useEffect, useState } from "react"
import { ProductsContext } from "../ProductsProvider"

export const useSameProducts = ( {id} ) => {
    const allProducts = useContext(ProductsContext)
    
    const [products, setProduct] = useState([])

    useEffect(() => {
        if (!allProducts || allProducts.length === 0) {
            setProduct([]);
            return;
        }

        const productId = parseInt(id);
        const foundProduct = allProducts.find(item => item.id === productId)
        if (!foundProduct) {
            setProduct([]);
            return;
        }
        
        // Фильтруем товары той же категории, исключая текущий товар
        const sameProducts = allProducts.filter(item => 
            item.category === foundProduct.category && item.id !== productId
        );
        setProduct(sameProducts.slice(0, 10));
    }, [allProducts, id])

    return { products }
}