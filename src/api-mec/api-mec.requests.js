export const handleGetProductDetails = async (productId) => {
    try {
        const res = await fetch(`http://localhost:3000/product/${productId}`, 
        { Method: 'GET' });
        const data = await res.json();
        return data;
    } catch(err){
        console.log(err);
    }
}
export const handleGetOrderDetails = async (orderId) => {
    try { 
        const res = await fetch(`http://localhost:3000/order/${orderId}`, 
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
        const res = await fetch('http://localhost:3000/order', {
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
        const res = await fetch('http://localhost:3000/products', {Method: 'GET'});
        const data = await res.json();
        return data;
    } catch(err){
        console.log(err);
    }
}
