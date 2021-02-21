const cartReducer = (state = 0, action) =>{
    switch(action.type){
        case 'CART_INCREMENT':
            return state+1;
        case 'CART_DECREMENT':
            return state-1;
        default: 
            return state

    }
}

export default cartReducer