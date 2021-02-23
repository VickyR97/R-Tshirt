const cartAddedReducer = (state = [], action) =>{
    switch(action.type){
        case 'CART_ADD':
            state.push(action.payload);
            return state
        case 'CART_REMOVE': 
            let newList = state.slice()
            newList.splice(action.payload,1)
            return newList; 
        default: 
            return state

    }
}

export default cartAddedReducer