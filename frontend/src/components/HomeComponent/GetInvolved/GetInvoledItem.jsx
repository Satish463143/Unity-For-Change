import React from 'react'

const GetInvoledItem = ({image,title, subtitle, date, location, time}) => {
  return (
    <div className='get_involved_item'>
        <img src={image} alt="Join Unity for Change in making a difference through internships, volunteer opportunities, community events, and advocacy programs supporting trans and LGBTQIA+ rights." />  
        <h1>{title}</h1> 
        <div className="get_involved_item_content"> 
          <p>{subtitle}</p>
          <h4 style={{display:'flex', justifyContent:'space-between'}}> <span>{date}</span>  <span>{time}</span> </h4>
          <h4>{location}</h4>  
        </div> 
    </div>
  )
}

export default GetInvoledItem