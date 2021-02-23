export const increment = () =>{
    return{
        type: 'INDCREMENT'
    }
}

export const cartIncrement = () =>{
    return{
        type: 'CART_INCREMENT'
    }
}

export const cartDecrement = () =>{
    return{
        type: 'CART_DECREMENT'
    }
}

export const cartadd = (cartItems) =>{
    return{
        type: 'CART_ADD',
        payload: cartItems
    }
}

export const cartRemove = (productId) =>{
    return{
        type: 'CART_REMOVE',
        payload: productId
    }
}