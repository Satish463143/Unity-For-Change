import React from 'react'
import './OurValues.css'
import values from '../../../assets/Images/values.png'
import { getOurValues } from '../../../api/api'

const OurValues = () => {
    const {data} = getOurValues();
    console.log(data)
  return (
    <div className='container'>
        <div className="our_values">
            <div className="how_it_start_title">
                <h1>our values</h1>
            </div>
            <div className="our_values_grid" style={{marginTop:'50px'}}>
            {
                data?.map((data) => (
                    <>
                    <div className="our_values_box" key={data.id} style={{marginTop:'50px'}}>
                    <img src={values} alt="" />
                    <h1>{data.heading}</h1>
                    <p>{data.description}</p>
                    </div>
                    </>
                    
                ))
            }
                
            </div>
        </div>
    </div>
  )
}

export default OurValues