import React from 'react'

const OurTeamSlider = ({image, name, position, content}) => {
  return (
    <div className='team_slider'>
        <img src={image} alt="" />   
        <h2>{name}</h2> 
        <h4>{position}</h4>  
        <p>{content}</p>  
    </div>
  )
}

export default OurTeamSlider