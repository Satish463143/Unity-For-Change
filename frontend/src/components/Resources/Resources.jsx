import React from 'react'
import './Resources.css'
import ResourceItem from '../../common/ResourceItem/ResourceItem'
import { getResources } from '../../api/api'

const Resources = () => {
    const {data: documents} = getResources()

    return (
    <div className='container'>
        <div className="resource">
            {documents.map((item,index)=>(
                <ResourceItem key={index} title={item.name} description={item.description} documents={item.pdf}/>
            ))}
        </div>
    </div>
  )
}

export default Resources