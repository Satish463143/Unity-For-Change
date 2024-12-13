import React from 'react'
import image2 from '../../../assets/Images/shutterstock_1912887757-scaled-1-1024x683.jpeg'
import './HowItGoing.css'

const HowItGoing = () => {
  return (
    <div className='container'>
        <div className="how_it_going">
            <div className="how_it_going_title">
                <h1>how it going</h1>
            </div>
            <div className="how_it_going_grid">
                <div className="how_it_going_content">
                    <p>Learn more about our organization, our mission, vision, and the passionate team dedicated to creating a more inclusive and supportive community for all.Learn more about our organization, our mission, vision, and the passionate team dedicated to creating a more inclusive and supportive community for all.Learn more about our organization, our mission, vision, and the passionate team dedicated to creating a more inclusive and supportive community for all.</p>
                </div>
                <div className="how_it_going_box">
                    <div className="how_it_going_image">
                        <img src={image2} alt="" />
                    </div>
                </div>
                
            </div>
        </div>        
    </div>
  )
}

export default HowItGoing