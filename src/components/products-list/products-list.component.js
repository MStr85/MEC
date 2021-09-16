import React from 'react';
import { connect } from 'react-redux';
import Product from '../product/product.component';

import './products.styles.scss';

const ProductsList = ({ products }) => {
    return (
        <div className='products-list'>
            {(Array.isArray(products) && products.length!==0) ? 
            products.map(product => <Product key={ product.productId } product={ product } />
            ): "Trwa synchronizacja danych...."}
        </div>
    );
};

const mapStateToProps = state => ({
    products: state.products.products
});

export default connect(mapStateToProps)(ProductsList);