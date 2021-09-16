import React from 'react';
import { setRouter, setSelectedProduct } from '../../redux/router/router.actions' 
import './product.styles.scss';
import { connect } from 'react-redux';
import { ReactComponent as Icon } from '../../assets/icon.svg';
import { handleGetProductDetails } from '../../api-mec/api-mec.requests';

const Product = ({ product, setRouter, setSelectedProduct }) => (
    <div className='product-container' 
        onClick={()=>{
            setRouter("product");
            handleGetProductDetails(product.productId).then(data => setSelectedProduct(data));
        }}>
        <Icon className='icon'/>
        <span className='name'>{ product.name.toUpperCase() }</span>
        <span className='name'>Dostępna ilość: { product.stock }</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
	setRouter: route => dispatch(setRouter(route)),
    setSelectedProduct: product => dispatch(setSelectedProduct(product))
})
export default connect(null, mapDispatchToProps)(Product);