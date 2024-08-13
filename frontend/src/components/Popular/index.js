import React from 'react'
import './index.css'
import products_data from '../Assets/data'
import Products from '../Products'

const index = () => {
  return (
    <>
      <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className='products-container'>
          {products_data.map((eachProduct, i) => {
            return <Products key = {i} image={eachProduct.image} product_name={eachProduct.name} 
            old_price={eachProduct.old_price} new_price={eachProduct.new_price}
          />
          })}
      </div>
      </div>
      
    </>
    
  )
}

export default index
