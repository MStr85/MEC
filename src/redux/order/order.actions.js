import { OrderActionTypes } from './order.types';


export const setOrder = order => ({
	type: OrderActionTypes.SET_ORDER,
	payload: order
});

export const setOrderId = order => ({
	type: OrderActionTypes.SET_ORDER_ID,
	payload: order
});

export const setOrderQuantity = order => ({
	type: OrderActionTypes.SET_ORDER_QUANTITY,
	payload: order
});