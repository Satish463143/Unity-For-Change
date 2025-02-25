import React from 'react'
import './HowItGoing.css'
import { gethowItsGoing } from '../../../api/api'

const HowItGoing = () => {
    const {data} = gethowItsGoing();
  return (
    <div className='container'>
        <div className="how_it_going" id='howItsGoing'>
            <div className="how_it_going_title">
                <h1>how its going</h1>
            </div>
            <div className="how_it_going_grid">
                <div className="how_it_going_content">
                    <p>{data.description}</p>
                </div>
                <div className="how_it_going_box">
                    <div className="how_it_going_image">
                        <img src={data.image} alt="" />
                    </div>
                </div>
                
            </div>
        </div>        
    </div>
  )
}

export default HowItGoing