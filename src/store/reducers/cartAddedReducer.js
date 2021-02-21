const cartAddedReducer = (state = [{}], action) =>{
    switch(action.type){
        case 'CART_ADD':
            state.push(action.payload);
            return state
        default: 
            return state

    }
}

export default cartAddedReducer