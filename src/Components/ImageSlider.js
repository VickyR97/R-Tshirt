import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import "../assests/imageSlide.css"

export default function ImageSlider({
  button_text="Button text"
}) {
    return (
        <div>
        <Slide easing="ease">
        <div className="each-slide">
          <div className="slide1">
            <button className="buy-btn btn btn-lg btn-warning font-weight-bold">{button_text}</button>
          </div>
        </div>
        <div className="each-slide">
          <div className="slide2">
            <button className="buy-btn btn btn-lg btn-warning font-weight-bold">{button_text}</button>
          </div>
        </div>
        <div className="each-slide">
          <div className="slide3">
            <button className="buy-btn btn btn-lg btn-warning font-weight-bold">{button_text}</button>
          </div>
        </div>
        <div className="each-slide">
          <div className="slide4">
            <button className="buy-btn btn btn-lg btn-warning font-weight-bold">{button_text}</button>
          </div>
        </div>
      </Slide>
        </div>
    )
}
