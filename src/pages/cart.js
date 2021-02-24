import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import Header from "../Components/AuthenticationHeader";
import CartList from "../Components/cartList";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Loader from "../Components/Loader";


export default function Cart({history}) {
    const [showModal, setshowModal] = useState(false)
    const cartList = useSelector(state => state.cartList)
    const [isLoading, setIsLoading] = useState(false)
    

    // Sub Total
    let subTotal = cartList.reduce(function(prev, cur) {
        return prev + cur.productPrice;
      }, 0);
    
    // Shipping Total
    let shippingTotal = cartList.reduce(function(prev, cur) {
        return prev + cur.productShipping;
      }, 0);

    // Tax  
    let tax = cartList.reduce(function(prev, cur) {
        return prev + cur.productTax;
      }, 0);

    // Place order
    const placeOrder = async () =>{
        setshowModal(true)

    }

    // CART List
    const Cart = () =>{
        return(
            <div>
            <Header 
            brand="T-shop"
            />
            <Modal isOpen={showModal} toggle={()=>{
                
            }}>
            <ModalHeader toggle={async ()=>{
                setshowModal(!showModal)
                await setIsLoading(true)
                await setTimeout(() => {
                    setIsLoading(false)
                    history.push("/home")
                    window.location.reload()
                }, 2000);
                
            }}><p className="font-weight-bold m-0">T-Shop</p> </ModalHeader>
            <ModalBody>
              <p style={{color: "green", fontWeight: "bold", textAlign: "center"}}>Your order placed successfully!!</p>
            </ModalBody>
            </Modal> 
            
            
            {cartList.length < 1 && <h3 className="font-weight-bold mt-3 ml-4">Your Shopping Cart is Empty...</h3>}
            <div className="container mt-5">
                <div className="row">
                <div className="col-12 col-sm-12 col-md-8">
                    {cartList.map((element,index)=>{
                        return(
                            // <p key={element.productId}>{element.productName}</p>
                            <CartList 
                                key={index}
                                id= {index} 
                                imgSrc = {element.productImage}
                                name = {element.productName}
                                subTitle = {element.productSubTitle}
                                description = {element.productDescription}
                                price = {element.productPrice}
                            />
                        )
                    })}
                </div>
                <div className="col-12 col-sm-12 col-md-4 p-0">
                    {cartList.length >0 && <div className="border rounded mx-3 p-3 px-4">
                        <h5 className="font-weight-bold py-2">PRICING DETAILS</h5>
                        {cartList.map((element)=>{
                            return (
                                    <div className="d-flex justify-content-between">
                                        <p>{element.productName}</p>
                                        <p>&#x20B9;{element.productPrice}</p>
                                    </div>
                                )
                        })}

                        <hr></hr>
                        <div className="d-flex justify-content-between">
                            <p className="font-weight-bold">Subtotal</p>
                            <p className="font-weight-bold">&#x20B9;{subTotal}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Shipping (In-Store-Pickup)</p>
                            <p>&#x20B9;{shippingTotal}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Tax </p>
                            <p>&#x20B9; {tax}</p>
                        </div>
                        <hr></hr>
                        <div className="d-flex justify-content-between">
                            <p className="font-weight-bold">Total</p>
                            <p className="font-weight-bold">&#x20B9;{subTotal+shippingTotal+tax}</p>
                        </div>

                        <button className="btn btn-block btn-warning font-weight-bold my-2" 
                        onClick={placeOrder}>
                        Place Order
                        </button>
                    </div>}
                    </div>
                </div>
            </div>
            </div>
        )
    }
 
    return (
        <div>
            {!isLoading && Cart()}
            {isLoading && 
                <div className="container-fluid p-0">
                    <div className="row-size row justify-content-center align-items-center m-0 pt-5">
                        <div className="column col-sm-12 col-md-3 mt-5 ">
                            <Loader />
                        </div>
                    </div>
                </div>  
            }    
        </div>
    )
}
