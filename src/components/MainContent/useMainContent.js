export const useMainContent = ({products = []}) => {
    const accProducts = products.filter(product => product.category === 1);
    const commProducts = products.filter(product => product.category === 2);
    const servProducts = products.filter(product => product.category === 3);

    return { accProducts, commProducts, servProducts };

}