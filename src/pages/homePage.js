import React from 'react'
import Header from '../Components/AuthenticationHeader'
import {useSelector, useDispatch} from 'react-redux'
import ImageSlider from "../Components/ImageSlider";
import Card from "../Components/Cards";
import {product}  from "../assests/files/products.js";
import { Link } from "react-router-dom";

export default function HomePage() {
    const dispatch = useDispatch()
    return (
        <div>
            <Header 
            brand="T-shop"
            />
            <div className="container mt-5">
                <ImageSlider
                button_text="Buy now!"
                />
            
            <div className="bg-dark text-white mt-3">
                <p className="py-2 ml-3 font-weight-bold mb-0">FEATURED PRODUCTS</p>
            </div>
            <div className="row">
                {product && product.map((element,index)=>{
                    return(
                    <div className="col-12 col-md-3">
                        <Card
                        key={index}
                        id={index}
                        imgSrc={element.imgSrc}
                        name = {element.name}
                        subTitle = {element.subTitle}
                        description = {element.description}
                        price = {element.price}
                        tax = {element.tax}
                        shipping = {element.shipping}
                        />
                     </div>
                     )

                })}                    
            </div>
            </div>
        </div>
        
    )
}
