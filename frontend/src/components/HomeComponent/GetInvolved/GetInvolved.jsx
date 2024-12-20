import React from 'react'
import './GetInvolved.css'
import get_involved from '../../../assets/Images/get_involved.png'
import { getGetInvolved } from '../../../api/api'

const GetInvolved = () => {
    const {data, error, loading} = getGetInvolved();
  return (
    <div className='container'>
        <div className="get_involved_title">
            <h1>Get involved</h1>
        </div>
        <div className="get_involved">
            <div className="get_involved_content">
                <p>{data.subtitle}</p>
                <h1>{data.title}</h1>
                <h3>{data.date} <br /> {data.time}</h3>
            </div>
            <div className="get_involved_image">
                <img src={get_involved} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default GetInvolved