export const changeProductStock = (products, productStockToChange) => {
    const existingProduct = products.find(product => product.productId === productStockToChange.productId);
    if (existingProduct) {
        return products.map(product => product.productId === productStockToChange.productId
			? { ...product, stock: productStockToChange.stock }
			: product
		);
    } 
    return [...products, productStockToChange]
};