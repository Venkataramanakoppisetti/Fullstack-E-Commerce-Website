import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagaram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

import './index.css'

const index = () => {
  return (
    <div className='footer-container'>
      <div className='footer-logo-container'>
        <img src={footer_logo} alt='footer logo' />
        <p>FULLSHOP</p>
      </div>
      <ul className="footer-nav-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagaram_icon} alt="instagram icon" />
        </div>
        <div className="footer-icons-container">
            <img src={pintrest_icon} alt="pintrest icon" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="whatsapp icon" />
        </div>
      </div>
      <div className="footer-copy-right-container">
        <hr />
        <p>Copy right @2024 - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default index
