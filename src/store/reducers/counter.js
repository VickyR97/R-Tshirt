const counterReducer = (state = 0, action) =>{
    switch(action.type){
        case 'INDCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default: 
            return state

    }
}

export default counterReducer