import React from 'react'
import './Banners.css'

const Banners = ({title, content}) => {
  return (
    <div className="container">
        <div className='banners'>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default Banners