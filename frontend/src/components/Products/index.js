import React from 'react'
import './index.css'

const index = (props) => {
  return (
    <div className="product">
      <img src={props.image} alt="product img" className='product-img' />
      <p className='product-name'>{props.product_name}</p>
      <div className="product-prices-container">
        <div className="product-old-prices">
            ${props.old_price}
        </div>
        <div className="product-new-prices">
            ${props.new_price}
        </div>
      </div>
    </div>
  )
}

export default index
