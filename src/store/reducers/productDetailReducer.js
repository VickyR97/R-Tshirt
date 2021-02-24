const productDetailReducer = (state = {}, action) =>{
    switch(action.type){
        case 'PRODUCT_DETAIL':
            return state = action.payload
        default: 
            return state

    }
}

export default productDetailReducer