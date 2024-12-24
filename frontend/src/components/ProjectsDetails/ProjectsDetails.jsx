import React from 'react'
import { useLocation } from 'react-router-dom';
import ProjectsDetailsBanner from './ProjectsDetailsBanner'
import ProjectDetailsItem from './ProjectDetailsItem'


const ProjectsDetails = () => {
    const location = useLocation();
    const { activity } = location.state || {};
    console.log(activity)

  return (
    <div>
            <div>
                <ProjectsDetailsBanner title={activity.title} shortContent={activity.subtitle}/>
                <ProjectDetailsItem description={activity.description} images={activity.images} />
            </div>
            
    </div>
  )
}

export default ProjectsDetails