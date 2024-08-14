import React from 'react'
import new_collection from '../Assets/new_collections'
import Products from '../Products'
import './index.css'

const index = () => {
  return (
    <div className='new-collections-container'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections-container">
        {new_collection.map((eachProduct, index) => {
            return <Products key = {index} image={eachProduct.image} product_name={eachProduct.name} 
            old_price={eachProduct.old_price} new_price={eachProduct.new_price} />
        })} 
      </div>
    </div>
  )
}

export default index
