import React from 'react'
import './WhatWeOffer.css'
import whatweoffer from '../../../assets/Images/whatweoffer.png'
import { getWhatWeOffer } from '../../../api/api'

const WhatWeOffer = () => {
    const {data, error, loading} = getWhatWeOffer();
  return (
    <div className='what_we_offer'>
        <div className="tittle">
            <h1>What we offer</h1>
        </div>
        <div className="container">
            <div className="what_we_offer_content">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil pariatur doloremque eos ad ipsa voluptas aliquam, corporis quos. Sunt placeat dolorum eos doloremque ex culpa voluptas officiis esse consectetur at?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime corporis voluptate saepe error nisi accusamus eius quasi consequatur similique sint vero, voluptatibus quisquam ducimus deserunt provident, non, fugiat impedit ab!
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
                            <p style={{color:'var(--pruple) !important'}}>{data.description}</p>
                        </div>
                    </div>
                ))
            }                
            </div>
        </div>
    </div>
  )
}

export default WhatWeOffer