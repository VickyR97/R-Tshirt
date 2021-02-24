import React from 'react'
import ProductDetail from "../Components/ProductDetail";
import {useSelector, useDispatch} from 'react-redux'
import Header from '../Components/AuthenticationHeader'


function ProductDetails() {
    const Product = useSelector(state => state.productDetail)
    return (
        <div>
            <Header 
            brand="T-shop"
            />
            <div className="container mt-5 border">
            <ProductDetail 
            id = {Product.productId}
            imgSrc = {Product.productImage}
            name = {Product.productName}
            subTitle = {Product.productSubTitle}
            description = {Product.productDescription}
            price = {Product.productPrice}
            tax= {Product.productTax}
            shipping={Product.productShipping}
            />
            </div>
        </div>
    )
}

export default ProductDetails
