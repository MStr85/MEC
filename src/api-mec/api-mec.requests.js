import { APIURL } from '../env';

export const handleGetProductDetails = async (productId) => {
    try {
        const res = await fetch(`${APIURL}/product/${productId}`, 
        { Method: 'GET' });
        const data = await res.json();
        return data;
    } catch(err){
        console.log(err);
    }
}
export const handleGetOrderDetails = async (orderId) => {
    try { 
        const res = await fetch(`${APIURL}/order/${orderId}`, 
        { Method: 'GET' });
        const data = await res.json();
        console.log(data);
        return data;
    } catch(err){
        console.log(err);
    }
}
export const handlePostOrder = async (productId, quantity) => {
    try {
        const res = await fetch(`${APIURL}/order`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                productId: productId,
                quantity: quantity,
            })
        });
        const data = await res.json();
        return data;
    } catch(err){
        console.log(err);
    }
}

export const handleGetProducts = async () => {
    try {
        const res = await fetch(`${APIURL}/products`, {Method: 'GET'});
        const data = await res.json();
        return data;
    } catch(err){
        console.log(err);
    }
}
