import React from 'react'
import './WhoWeAre.css'
import { getWhoWeAre } from '../../../api/api'

const WhoWeAre = () => {
    const {data, error, loading} = getWhoWeAre();
  return (
    <div className='who_we_are'>
        <div className="container">
            <div className="tittle">
                <h1>theory of change</h1>
            </div>
                        
                
                    <div className="wo_we_are_grid_image">
                        <img src={data.image} alt={data.description} />
                    </div>
                {/* <div className="who_we_are_content">
                    <p>
                       {data.description}
                    </p>
                    <Link to='/who_we_are'>
                        <div className="gradient-button">                            
                                <span>Learn More</span>                            
                        </div>
                    </Link>
                </div> */}
        </div>
    </div>
  )
}

export default WhoWeAre