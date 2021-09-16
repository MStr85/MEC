import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setProducts } from './redux/products/products.actions';

import Header from './components/header/header.component';
import ProductsList from './components/products-list/products-list.component.js';
import Orders from './components/orders/orders.component';
import ProductPage from './components/product-page/product-page.component';

import { handleGetProducts } from './api-mec/api-mec.requests';

import './App.css';

const App = ({router, setProducts}) => {

  useEffect(() => {
      const getProductInteval = setInterval(() => {
        handleGetProducts().then(data => setProducts(data))
      }, 2000);
      return () => clearInterval(getProductInteval);
    }
  );
  
    return ( 
      <div className = 'App'>
        <Header />
        {(router === "products") ? <ProductsList /> : ''}
        {(router === "orders") ? <Orders /> : ''}
        {(router === "product") ? <ProductPage /> : ''}
      </div>
    );
  
}

const mapStateToProps = state => ({
  products: state.products.products,
  router: state.router.router
});

const mapDispatchToProps = dispatch => ({
  setProducts: products => dispatch(setProducts(products))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
