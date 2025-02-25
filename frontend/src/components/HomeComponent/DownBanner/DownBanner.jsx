import React from 'react'
import './DownBanner.css'
import {Link} from 'react-router-dom'

const DownBanner = () => {
  return (
    <div className="down_banner_bg">
      <div className='container'>
          <div className="downbanner">
              <h1>Feel free to reach out to us</h1>
              <p>We’d love to hear from you! Whether it’s a query, feedback, or just a hello, don’t hesitate to connect.</p>
              <Link to='/contact_us'>
                <div className="gradient-button">                    
                  <span>Contact Us</span>                    
                </div>
              </Link>
          </div>

      </div>
    </div>
  )
}

export default DownBanner