import React from 'react'
import './WhatWeOffer.css'
import { getWhatWeOffer } from '../../../api/api'
import { Link } from 'react-router-dom'

const WhatWeOffer = () => {
    const {data, error, loading} = getWhatWeOffer();
  return (
    <div className='what_we_offer'>
        <div className="tittle">            
            <h1>Who We Are</h1>
        </div>
        <div className="container">
            <div className="what_we_offer_content">
                <p>Unity for Change is a registered trans-men-led organization, under the District Administration Office of Nepal on February 14, 2020. Unity for Change emerged from a group of committed trans youth, working unofficially for the welfare of trans people even before the official establishment, and has no political affiliation. 
                </p>
            </div>
            <div className="what_we_offer_grid">
            {
                data.map((data) => (
                    <div className="what_we_offer_box" key={data.id} style={{borderColor:'var(--pruple)'}}>
                        <div className="what_we_offer_box_image">
                            <img src={data.image} alt="" />
                        </div>
                        <div className="what_we_offer_box_content">
                            <h1 style={{color:'var(--pruple) !important'}}>{data.heading}</h1>
                            <p >{data.description}</p>
                        </div>
                    </div>
                ))
            }                
            </div>
            <div className='what_we_offer_button'>
            <Link to='/who_we_are'>
                <div className="gradient-button">                            
                        <span>Learn More</span>                            
                </div>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default WhatWeOffer