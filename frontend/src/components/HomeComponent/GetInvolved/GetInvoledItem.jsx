import React from 'react'

const GetInvoledItem = ({image,title, subtitle, date, location}) => {
  return (
    <div className='get_involved_item'>
        <img src={image} alt="" />        
        <h1>{title}</h1> 
        <p style={{color:'var(--orange)'}}>{subtitle}</p>
        <h3>{date} <br /> {time}</h3>
        <h3>{location}</h3>   
    </div>
  )
}

export default GetInvoledItem