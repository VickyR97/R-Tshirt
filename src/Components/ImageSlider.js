import React from 'react'
import {useDispatch} from 'react-redux'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import "../assests/imageSlide.css"
import {useHistory} from 'react-router-dom'
import { productDetail } from "../store/actions/index";

export default function ImageSlider({
    button_text="Button text",
    offers=[
      {
        id: 1,
        url: '...',
        name : "Classy Men",
        subTitle : "Actors Collection",
        description: "Buy stylish and fashionable Classic T-shirt from official fashion partner.",
        price: 899,
        tax: 70,
        shipping: 50,
    }]
}) {

  const dispatch = useDispatch()
  let history = useHistory()

  return (
        <div>
        <Slide easing="ease">
        {offers.map(element =>{
          return(
            <div key={element.id} className="each-slide">
              <div style={{
                backgroundImage: "url("+ element.url +")",
                position: 'relative'
              }}>
                <button className="buy-btn btn btn-lg btn-warning font-weight-bold" 
                onClick={()=>{
                  let cartItems = {
                    productId: element.id,
                    productImage : element.url,
                    productName : element.name,
                    productSubTitle : element.subTitle,
                    productDescription : element.description,
                    productPrice : element.price,
                    productTax: element.tax,
                    productShipping: element.shipping
                }
                dispatch(productDetail(cartItems))
                history.push(`/product/${element.name}`)
                }}
                >
                {button_text}
                </button>
              </div>
            </div>
          )
        })}     
      </Slide>
        </div>
    )
}
