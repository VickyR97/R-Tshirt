import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import {useSelector, useDispatch} from 'react-redux'
import { cartRemove } from "../store/actions/index";
import "../assests/cart.css";

export default function CartList({
    id = 0,
    imgSrc = "...",
    name = "Product name",
    subTitle = "Card subtitle",
    description = "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price = 200
}) {
    const dispatch = useDispatch()    
    const cartList = useSelector(state => state.cartList)

    return (
        <div className="container-fluid">
            <div className="row border rounded align-items-center mb-3">
                <div className="col-12 col-md-5 p-2">
                    <img height="211" width="200" src={imgSrc} alt="Card image cap" />
                </div>
                <div className="col-12 col-md-7 col-md-offset-4 p-2">
                    <CardBody>
                        <CardTitle tag="h5">{name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{subTitle}</CardSubtitle>
                        <CardText>{description}</CardText>
                        <h4 className="font-weight-bold"> &#x20B9;{price}</h4>
                        <Button className="btn btn-danger"
                        onClick={()=>{
                            console.log(id)
                            dispatch(cartRemove(id))
                        }}
                        >Remove from Cart</Button>
                    </CardBody>
                </div>
            </div>
        </div>
    )
}
