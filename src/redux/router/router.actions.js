import { RouterActionTypes } from './router.types';


export const setRouter = router => ({
	type: RouterActionTypes.SET_ROUTER,
	payload: router
});

export const setSelectedProduct = product => ({
	type: RouterActionTypes.SET_SELECTED_PRODUCT,
	payload: product
})