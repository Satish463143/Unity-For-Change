import React from 'react'
import './ProjectsDetails.css'

const ProjectsDetailsBanner = ({title, shortContent}) => {
  return (
    <div className='container'>
        <div className="project_banner">
            <h1>{title}</h1>
            <p>{shortContent}</p>
        </div>        
    </div>
  )
}

export default ProjectsDetailsBanner