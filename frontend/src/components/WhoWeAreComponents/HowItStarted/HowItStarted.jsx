import React from 'react'
import './HowItStarted.css'
import image from '../../../assets/Images/Be-ready-to-support-LGBTQ-youth.png'

const HowItStarted = () => {
  return (
    <div className='container'>
        <div className="how_it_start">
            <div className="how_it_start_title">
                <h1>how it starated</h1>
            </div>
            <div className="how_it_start_grid">
                <div className="how_it_start_box">
                    <div className="how_it_start_image">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="how_it_start_content">
                    <p>Learn more about our organization, our mission, vision, and the passionate team dedicated to creating a more inclusive and supportive community for all.Learn more about our organization, our mission, vision, and the passionate team dedicated to creating a more inclusive and supportive community for all.Learn more about our organization, our mission, vision, and the passionate team dedicated to creating a more inclusive and supportive community for all.</p>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default HowItStarted