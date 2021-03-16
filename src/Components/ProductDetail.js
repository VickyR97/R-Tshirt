import React,{useContext} from 'react'
import {
    CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { cartadd, cartIncrement } from "../store/actions/index";
import "../assests/cart.css";
import {isAuth} from '../App'

function ProductDetail({
    id = 0,
    imgSrc = "...",
    name = "Product name",
    subTitle = "Card subtitle",
    description = "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price = 200,
    tax = 0,
    shipping = 0
}) {
    const cart = <svg className="mr-2 mb-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>

    const dispatch = useDispatch()    
    let history = useHistory()
    const isAuthenticated = useContext(isAuth)

    const cartAdd = () =>{
        if(isAuthenticated){
            dispatch(cartIncrement())
            let cartItems = {
                productId: id,
                productImage : imgSrc,
                productName : name,
                productSubTitle : subTitle,
                productDescription : description,
                productPrice : price,
                productTax: tax,
                productShipping: shipping
            }
            dispatch(cartadd(cartItems))                    
        }else{
            history.push('/login')
        }
        
    }

    return (
        <div className="container-fluid p-0">
            <div className="row border rounded align-items-center m-3">
                <div className="col-12 col-md-5 p-2">
                    <img height="311" width="300" src={imgSrc} alt="Card image cap" />
                </div>
                <div className="col-12 col-md-7 col-md-offset-4 p-2">
                    <CardBody>
                        <CardTitle tag="h5">{name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{subTitle}</CardSubtitle>
                        <CardText>{description}</CardText>
                        <h4 className="font-weight-bold"> &#x20B9;{price}</h4>
                        <p className="pt-2"> Tax: &#x20B9; {tax}</p>
                        <p> Shipping cost: &#x20B9; {shipping}</p>
                        <Button className="btn btn-warning font-weight-bold"
                        onClick={cartAdd}
                        >
                        {cart} Add to cart
                        </Button>
                    </CardBody>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
