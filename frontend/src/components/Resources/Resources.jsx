import React from 'react'
import './Resources.css'
import ResourceItem from '../../common/ResourceItem/ResourceItem'
import docs from '../../assets/Images/Website Contract.pdf'

const Resources = () => {
    const documents = [
        {
            title:'Documents 1',
            description:'Here is the short description',
            documents:''
        },
        {
            title:'Documents 2',
            description:'Here is the short description',
            documents:''
        },
    ]
  return (
    <div className='container'>
        <div className="resource">
            {documents.map((item,index)=>(
                <ResourceItem key={index} title={item.title} description={item.description} documents={docs}/>
            ))}
        </div>
    </div>
  )
}

export default Resources