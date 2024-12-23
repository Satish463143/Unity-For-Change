import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
import {getHomeBanner} from '../../../api/api'

const Banner = () => {
    const { data: homeBanner, error, loading } = getHomeBanner();

  return (
    <div className='banner'>
        <div className="banner_img">
            <img className='desktop_iamge' src={homeBanner.image} alt="" />
            <img className='mobile_image' src={homeBanner.mobileImage} alt="" />
        </div>
        <div className='banner_overlay'></div>
        <div className="container">
            <div className="banner_content">
                <h1>{homeBanner.subtitle}</h1>
                <p className="gradient_text">
                    <span>{homeBanner.title}</span> 
                </p>
                <div>
                    <Link to='/donate'>
                    <button className="filled-button">Join Us</button></Link>
                    <Link to='/what_we_do'>
                    <button className="outlined-button">Learn More </button>
                    </Link>
                </div>     

            </div>
        </div>
    </div>
  )
}

export default Banner