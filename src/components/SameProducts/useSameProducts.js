import { useContext, useEffect, useState } from "react"
import { ProductsContext } from "../ProductsProvider"

export const useSameProducts = ( {id} ) => {
    const allProducts = useContext(ProductsContext)
    const categoryId = id >> 16;
    const itemId = id & 0xFFFF; 
    const [products, setProduct] = useState(null)

    useEffect(() => {
        if (!allProducts || allProducts.length === 0) return;

        const foundCategory = allProducts.find(categoryItem => categoryItem.id === categoryId)
        setProduct(foundCategory.products.filter(item => item.id !== itemId));
    }, [categoryId, itemId, allProducts])

    return { products }
}