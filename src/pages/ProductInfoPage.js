import { useParams } from "react-router-dom"
import ProductDetail from "../components/ProductDetail"
import SameProducts from "../components/SameProducts"

const ProductInfoPage = () => {
    const { id } = useParams()
    return (
        <div>
            <ProductDetail id={id}/>
            <SameProducts id={id}/>
        </div>
    )
}

export default ProductInfoPage;