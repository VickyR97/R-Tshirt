import counterReducer from "./counter";
import isLoggedReducer from "./isLoggedReducer";
import cartReducer from "../reducers/cartReducer";
import cartAdd from "../reducers/cartAddedReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: isLoggedReducer,
    cartCount: cartReducer,
    cartList: cartAdd
})

export default allReducers