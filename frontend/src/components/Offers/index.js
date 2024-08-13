import React from 'react'
import './index.css'
import exclusive_image from '../Assets/exclusive_image.png'


const index = () => {
  return (
    <div className='offers-container'>
      <div className="offers-left-container">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button className='check-now-button'>Check Now</button>
      </div>
      <div className="offers-right-container">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default index
