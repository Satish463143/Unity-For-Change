import React from 'react'
import './Banner.css'
import bannerImage from '../../../assets/Images/banner.webp'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner_img">
            <img className='desktop_iamge' src={bannerImage} alt="" />
            <img className='mobile_image' src={bannerImage} alt="" />
        </div>
        <div className='banner_overlay'></div>
        <div className="container">
            <div className="banner_content">
                <h1>Embracing the LBT Community</h1>
                <p class="gradient_text">
                    <span>A Space</span> <br /> <span>to be</span> <br /> <span>Young and Free</span> 
                </p>
                <div>
                    <button class="filled-button">Join Us</button>
                    <button class="outlined-button">Learn More </button>
                </div>                

            </div>
        </div>
    </div>
  )
}

export default Banner