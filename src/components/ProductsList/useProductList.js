import {useState} from "react";

const COUNT_ITEMS = 5

export const useProductList = ({items = []}) => {
    const [products, setProducts] = useState(items.slice(0, COUNT_ITEMS));
    const [page, setPage] = useState(1);
    const [isVisible, setIsVisible] = useState(items.length <= COUNT_ITEMS * (page + 1) ? false : true);
    
    const showMore = () => {
        const nextProducts = items.slice(page * COUNT_ITEMS, (page + 1) * COUNT_ITEMS)
        if (items.length <= COUNT_ITEMS * (page + 1)) {
            setIsVisible(false)
        }
        setPage(prefPage => prefPage + 1)
        setProducts(prevProducts => [...prevProducts, ...nextProducts])
    }
    return {isVisible, products, showMore};
};