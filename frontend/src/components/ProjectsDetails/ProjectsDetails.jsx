import React from 'react'
import { useLocation } from 'react-router-dom';
import ProjectsDetailsBanner from './ProjectsDetailsBanner'
import ProjectDetailsItem from './ProjectDetailsItem'
import parse from 'html-react-parser'

const ProjectsDetails = () => {
    const location = useLocation();
    const { activity } = location.state || {};

  return (
    <div>
            <div>
                <ProjectsDetailsBanner title={activity.title} shortContent={activity.subtitle}/>
                <ProjectDetailsItem description={parse(activity.description)} images={activity.images} videos={activity.videos}/>
            </div>
            
    </div>
  )
}

export default ProjectsDetails