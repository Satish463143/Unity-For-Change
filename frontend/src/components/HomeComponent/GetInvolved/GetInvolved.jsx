import React from 'react'
import './GetInvolved.css'
import { getGetInvolved } from '../../../api/api'
import GetInvoledItem from './GetInvoledItem';

const GetInvolved = () => {
    const {data, error, loading} = getGetInvolved();
    console.log('data', data);
  return (
    <div className='container'>
        <div className="get_involved_title">
            <h1>Get involved</h1>
        </div>
        <div className="get_involved">
        {data.length > 0 && (
            data.map((item, index) => (
                <GetInvoledItem
                key={index}
                title={item?.title}
                subtitle={item?.subtitle}
                date={item?.date}
                location={item?.location}
                image={item?.image}
                />
            ))
            )}        
           
        </div>
        
    </div>
//     <div className="get_involved_content">
//     <p style={{color:'var(--orange)'}}>{data?.subtitle}</p>
//     <h1>{data?.title}</h1>
//     <h3>{data?.date} <br /> {data?.time}</h3>
//     <h3>{data?.location}</h3>
// </div>
// <div className="get_involved_image">
//     <img src={data.image} alt="" />
// </div>
  )
}

export default GetInvolved