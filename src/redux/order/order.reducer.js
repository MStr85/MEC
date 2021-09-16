import { OrderActionTypes } from './order.types';
import { changeOrderId, changeOrderQuantity } from './order.utils';

const INITIAL_STATE = {
	order: {}
}

const orderReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case OrderActionTypes.SET_ORDER:
			return {
				...state,
				order: action.payload
			}
		case OrderActionTypes.SET_ORDER_ID:
				return {
				...state,
				order: changeOrderId(state.order, action.payload)
			}
		case OrderActionTypes.SET_ORDER_QUANTITY:
				return {
				...state,
				order: changeOrderQuantity(state.order, action.payload)
			}
		default :
			return state; 
	}
}

export default orderReducer;