import React from 'react'
import './WhoWeAre.css'
import whoweare from '../../../assets/Images/whoweare.png'
import {Link, Links} from 'react-router-dom'

const WhoWeAre = () => {
  return (
    <div className='who_we_are'>
        <div className="container">
            <div className="tittle">
                <h1>WHo we are</h1>
            </div>
            <div className="wo_we_are_grid">
                <div className="wo_we_are_grid_box">
                    <div className="wo_we_are_grid_background">
                        <div className="wo_we_are_grid_image">
                            <img src={whoweare} alt="" />
                        </div>
                    </div>
                </div>
                <div className="who_we_are_content">
                    <p>
                        We are dedicated to creating a supportive, inclusive, and empowering environment for lesbian, bisexual, and transgender individuals. Our platform offers resources, advocacy, and a safe space to connect and thrive
                    </p>
                    <Link to='/who_we_are'>
                        <div class="gradient-button">
                            
                                <span>Learn More</span>
                            
                        </div>
                    </Link>
                </div>


            </div>
        </div>

    </div>
  )
}

export default WhoWeAre