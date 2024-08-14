import React from 'react'
import './index.css'

const index = () => {
  return (
    <div className='news-letter-container'>
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subscribe to our news letter and stay updated</p>
      <div>
        <input type='email' placeholder='Your Email Id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default index
