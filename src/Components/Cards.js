import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { cartIncrement, cartadd } from "../store/actions/index";

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import "../assests/card.css"
  
export default function Cards({
    id = 0,
    imgSrc = "...",
    name = "Product name",
    subTitle = "Card subtitle",
    description = "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price = 200,
    tax = 0,
    shipping = 0
}) {

    const dispatch = useDispatch()

    const cart = <svg className="mr-2 mb-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>

    return (
        <div>
            <Card className="card mt-4">
                <CardImg top width="100%" src={imgSrc} alt="T-shirts" />
                <CardBody>
                    <CardTitle tag="h5" className="font-weight-bold">{name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted font-weight-bold">{subTitle}</CardSubtitle>
                    <CardText>{description}</CardText>
                    <div className="addToCart">
                        <h4 className="font-weight-bold"> &#x20B9;{price}</h4>
                        <Button className="font-weight-bold btn btn-warning" 
                        onClick={()=>{
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
                            console.log(cartItems)
                        }}
                        >{cart}Add to cart</Button>
                    </div>
                    
                </CardBody>
            </Card>
        </div>
    )
}
