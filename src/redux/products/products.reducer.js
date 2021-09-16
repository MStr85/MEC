import { ProductsActionTypes } from './products.types';
import { changeProductStock } from './products.utils';

const INITIAL_STATE = {
	products: []
}


const productsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ProductsActionTypes.SET_PRODUCTS:
			return {
				...state,
				products: action.payload
			};
        case ProductsActionTypes.CHANGE_STOCK:
            return {
                ...state,
                products: changeProductStock(state.products, action.payload)
            };
		default :
			return state; 
	}
}

export default productsReducer;