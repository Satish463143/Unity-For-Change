import React from 'react'
import './GetInvolved.css'
import get_involved from '../../../assets/Images/get_involved.png'

const GetInvolved = () => {
  return (
    <div className='container'>
        <div className="get_involved_title">
            <h1>Get involved</h1>
        </div>
        <div className="get_involved">
            <div className="get_involved_content">
                <p>The celebration of love</p>
                <h1>Unity <br /> for <br /> Change</h1>
                <h3>Kathmandu <br /> 20th Octuber</h3>
            </div>
            <div className="get_involved_image">
                <img src={get_involved} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default GetInvolved