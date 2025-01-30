import React from 'react'
import './FocousArea.css'
import { getWhatWeDo } from '../../../api/api'

const FocousArea = () => {
    const {data} = getWhatWeDo();
  return (
    <div className='container'>
        <div className="how_it_start_title_content">            

        </div>    
        <div className="focous_area" style={{marginTop:'50px'}}>
        {
            data?.map((item)=>(
                <div className="focous_area_box" style={{border:'2px solid var(--blue)'}} key={item.id}>
                <img src={item.image} alt={item.title} />
                <h1>{item.title}</h1>
                <p>{item.description}</p>
            </div>
            ))
        }
            
        </div>     
    </div>
  )
}

export default FocousArea