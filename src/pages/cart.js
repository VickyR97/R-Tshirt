import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function Cart() {
    const cartList = useSelector(state => state.cartList)

    return (
        <div>
            <h1>Cart page...</h1>
            {cartList.map((element)=>{
                return(
                    <p>{element.productName}</p>
                )
            })}
        </div>
    )
}
