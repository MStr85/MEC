import React from 'react';
import { connect } from 'react-redux';
import { handleGetOrderDetails } from '../../api-mec/api-mec.requests';
import { setOrder, setOrderId } from '../../redux/order/order.actions';
import './orders.styles.scss';

const Orders = ({order, setOrder, setOrderId}) => {

    const handleSubmit = event => {   
        event.preventDefault();
        (order.orderId) ? handleGetOrderDetails(order.orderId).then(data => setOrder(data)) :
        alert('Musisz podać identyfikator zamówienia');
    }
    
    return (
        <div>
            <span>Podaj numer zamówienia:</span>
            <form onSubmit={ handleSubmit }>
                <input 
                    type='text'
                    onChange={ event => setOrderId(event.target.value) }
                />
                <button type='submit'>Sprawdź</button>
            </form>
            { (order.name) ? 
            <div>
                <p>Twoje zamówienie: </p>
                <p>Nazwa produktu: {(order.name) ? order.name.toUpperCase() : 'Błędny numer zamówienia'}. </p>
                <p>Ilość zamówionych sztuk: {order.quantity} </p>
            </div>
            : '' }
        </div>
    );
}

const mapStateToProps = state => ({
    order: state.order.order,
});

const mapDispatchToProps = dispatch => ({
    setOrder: order => dispatch(setOrder(order)),
    setOrderId: orderId => dispatch(setOrderId(orderId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders);