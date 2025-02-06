import React from 'react'

const OurTeamSlider = ({image, name, position, content}) => {
  return (
    <div className='team_slider'>
        <img src={image} alt="Meet the dedicated team behind Unity for Change—LGBTQIA+ and trans-led leaders and advocates working together to empower the community and drive positive change." />   
        <h2>{name}</h2> 
        <h4>{position}</h4>  
        <p>{content}</p>  
    </div>
  )
}

export default OurTeamSlider