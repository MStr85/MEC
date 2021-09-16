import { combineReducers } from 'redux';
import productsReducer from './products/products.reducer';
import routerReducer from './router/router.reducer';
import orderReducer from './order/order.reducer';


const rootReducer = combineReducers({
	products: productsReducer,
	router: routerReducer,
	order: orderReducer
});

export default rootReducer;