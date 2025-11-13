import { useContext, useEffect, useState } from "react"
import { ProductsContext } from "../ProductsProvider"

export const useSameProducts = ( {id} ) => {
    const allProducts = useContext(ProductsContext)
    
    const [products, setProduct] = useState(null)

    useEffect(() => {
        if (!allProducts || allProducts.length === 0) return;

        const foundProduct = allProducts.find(item => item.id == id)
        const sameProducts = allProducts.filter(item => item.category === foundProduct.category)
        setProduct(sameProducts.slice(0, 10));
    }, [allProducts])

    return { products }
}