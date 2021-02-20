import React from 'react'
import Header from '../Components/AuthenticationHeader'
import {useSelector, useDispatch} from 'react-redux'
// import { increment } from "../store/actions/index";
import ImageSlider from "../Components/ImageSlider";
import Card from "../Components/Cards";

export default function HomePage() {
    const count = useSelector(state => state.counter)
    const dispatch = useDispatch()
    return (
        <div>
            <Header />
            <div className="container mt-5">
                <ImageSlider />
            
            <div className="bg-dark text-white mt-3">
                <p className="py-2 ml-3 font-weight-bold mb-0">FEATURED PRODUCTS</p>
            </div>
                

            <div className="row">
                <div className="col-12 col-md-3"><Card /></div>
                <div className="col-12 col-md-3"><Card /></div>
                <div className="col-12 col-md-3"><Card /></div>
                <div className="col-12 col-md-3"><Card /></div>
                <div className="col-12 col-md-3"><Card /></div>
                <div className="col-12 col-md-3"><Card /></div>
                
                    
            </div>
            </div>
        </div>
        
    )
}
