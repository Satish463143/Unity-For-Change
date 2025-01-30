import React from 'react'
import './GetInvolved.css'
import { getGetInvolved } from '../../../api/api'
import GetInvoledItem from './GetInvoledItem';
import parse from 'html-react-parser'

const GetInvolved = () => {
    const {data, error, loading} = getGetInvolved();
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
                subtitle={parse(item?.description)}
                date={item?.date}
                location={item?.location}
                image={item?.image}
                time={item.time}
                />
            ))
            )}        
           
        </div>        
    </div>
  )
}

export default GetInvolved