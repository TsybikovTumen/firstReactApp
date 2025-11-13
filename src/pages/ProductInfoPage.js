import { useParams } from "react-router-dom"
import { useEffect } from "react"
import ProductDetail from "../components/ProductDetail"
import SameProducts from "../components/SameProducts"

const ProductInfoPage = () => {
    const { id } = useParams()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id]) 
    return (
        <div>
            <ProductDetail key={id} id={id}/>
            <SameProducts key={`similar-${id}`} id={id}/>
        </div>
    )
}

export default ProductInfoPage;