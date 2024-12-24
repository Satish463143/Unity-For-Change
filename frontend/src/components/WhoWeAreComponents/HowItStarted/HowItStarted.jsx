import React from 'react'
import './HowItStarted.css'
import image from '../../../assets/Images/Be-ready-to-support-LGBTQ-youth.png'
import { gethowItsGoing, getHowItStarted } from '../../../api/api'

const HowItStarted = () => {
    const {data} = getHowItStarted();
  return (
    <div className='container'>
        <div className="how_it_start">
            <div className="how_it_start_title">
                <h1>how it started</h1>
            </div>
            <div className="how_it_start_grid">
                <div className="how_it_start_box">
                    <div className="how_it_start_image">
                        <img src={data.image} alt="" />
                    </div>
                </div>
                <div className="how_it_start_content">
                    <p>{data.description}</p>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default HowItStarted