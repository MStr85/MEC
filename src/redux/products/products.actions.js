import { ProductsActionTypes } from './products.types';


export const setProducts = products => ({
	type: ProductsActionTypes.SET_PRODUCTS,
	payload: products
});

export const changeQuantity = product => ({
    type: ProductsActionTypes.CHANGE_STOCK,
    payload: product
})