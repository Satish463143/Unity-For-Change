import React from 'react'

const ResourceItem = ({documents, description, title}) => {
  return (
    <div className='resource_box'>
        <h1>{title}</h1>
        <p>{description}</p>
        <embed src={documents} type="application/pdf"/>
    </div>
  )
}

export default ResourceItem