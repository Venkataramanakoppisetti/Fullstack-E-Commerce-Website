import React from 'react'
import wave_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png';
import shop_model_img from '../Assets/hero_image.png'
import './index.css'

const index = () => {
  return (
    <div className="shop-item-container">
        <div className="shop-item-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="shop-wave-icon">
                    <p>new</p>
                    <img src = {wave_icon} alt="wave-icon"/>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="shop-item-latest">
                <div>
                    Latest Collections
                </div>
                <img src={arrow_icon} alt="arrow icon" />
            </div>
        </div>
        <div className="shop-item-right">
            <img className='shop-model-image' src={shop_model_img} alt="shop model img" />
        </div>
    </div>
  )
}

export default index
