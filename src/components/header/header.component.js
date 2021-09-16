import React from 'react';
import { connect } from 'react-redux';
import { setOrderId, setOrder } from '../../redux/order/order.actions';
import { setRouter } from '../../redux/router/router.actions' 

import './header.styles.scss';

const Header = ({ setRouter, setOrder, setOrderId }) => (
	<div className='header'>
		<div className="title">
			mEC - mini E-Commerce platform
		</div>
		<div className="options">
			<div className="option" onClick={() => {
				setRouter("products");
				setOrderId(0);
				setOrder('');
				}}>
				Produkty
			</div>
			<div className="option" onClick={() => {
				setRouter("orders");
				setOrderId(0);
				setOrder('');
				}}>
				Zamówienia
			</div>
		</div>
	</div>
);

const mapDispatchToProps = dispatch => ({
	setRouter: route => dispatch(setRouter(route)),
	setOrder: order => dispatch(setOrder(order)),
	setOrderId: orderId => dispatch(setOrderId(orderId))
})

export default connect(null, mapDispatchToProps)(Header);