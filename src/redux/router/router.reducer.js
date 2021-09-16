import { RouterActionTypes } from './router.types';

const INITIAL_STATE = {
	router: 'products',
    selectedProduct: {
		"productId": '', 
        "name": '', 
        "price": '', 
        "stock": ''
	}
}

const routerReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case RouterActionTypes.SET_ROUTER:
			return {
				...state,
				router: action.payload
			}
		case RouterActionTypes.SET_SELECTED_PRODUCT:
			return {
				...state,
				selectedProduct: action.payload
			}
		default :
			return state; 
	}
}

export default routerReducer;