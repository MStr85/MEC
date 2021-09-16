import React from 'react';
import { connect } from 'react-redux';
import './product-page.styles.scss';
import { handlePostOrder } from '../../api-mec/api-mec.requests';
import { setOrderId, setOrderQuantity } from '../../redux/order/order.actions';

const ProductPage = ({ selectedProduct, order, setOrderId, setOrderQuantity }) => {

  const handleSubmit = event => {
    event.preventDefault();
    handlePostOrder(selectedProduct.productId, +order.orderQuantity).then(data => setOrderId(data));
    console.log(order);
  }

  return (
      <div>
        <div>Produkt: {selectedProduct.name.toUpperCase()}</div>
        <div>Cena: {selectedProduct.price/100} zł</div>
        <div>Dostępne sztuki: {selectedProduct.stock}</div>
        <form onSubmit={ handleSubmit }>
              <input 
                  type='number'
                  onChange={ event => setOrderQuantity(event.target.value) }
              />
              <button type='submit' disabled={!selectedProduct.stock}>ZAMÓW TERAZ</button>
        </form>
        {(order.orderId) ? 
        <div>Indentyfikator: {order.orderId}</div> : ''}
      </div>
    );
}

const mapStateToProps = state => ({
    selectedProduct: state.router.selectedProduct,
    order: state.order.order,
});

const mapDispatchToProps = dispatch => ({
    setOrderId: orderId => dispatch(setOrderId(orderId)),
    setOrderQuantity: orderQuantity => dispatch(setOrderQuantity(orderQuantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);