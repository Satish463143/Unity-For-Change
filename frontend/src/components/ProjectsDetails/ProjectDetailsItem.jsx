import React from 'react'
import './ProjectsDetails.css'
import image from '../../assets/Images/one.jpg'

const ProjectDetailsItem = ({description, images}) => {
  return (
    <div className='container project_content'>
        <p>{description}</p>
        <div className="project_images">
            {images.map((image, index) => (
                <img key={index} src={image.image_url} alt={`Project image ${index + 1}`} />
            ))}
        </div>      
    </div>
  )
}

export default ProjectDetailsItem