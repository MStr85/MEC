export const changeOrderId = (order, orderId) => {
    
    return { ...order, orderId: orderId }
};

export const changeOrderQuantity = (order, orderQuantity) => {

    return { ...order, orderQuantity: orderQuantity }
};