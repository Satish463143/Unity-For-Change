import React from 'react'
import './SponsorItem.css'

const SponsorItem = ({image, name,isActive}) => {
  return (
    <div className={`sponsor-item ${isActive ? 'activeTab' : ''}`}>
        <img src={image} alt="A banner displaying logos of organizations collaborating with Unity for Change." />  
        <h1>{name}</h1>     
    </div>
  )
}

export default SponsorItem