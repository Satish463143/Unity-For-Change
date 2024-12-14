import React from 'react'
import ProjectsDetailsBanner from './ProjectsDetailsBanner'
import ProjectDetailsItem from './ProjectDetailsItem'


const ProjectsDetails = () => {
    const project = [
        {
            title:'Title 1',
            shortContent:'Here is the short content',
            description:'Here isi the short description',
            images:[
               'image1',
               'image2',
               'image3',
               'image4',
               'image5',
            ]
        }
    ]
  return (
    <div>
        {project.map((item, index)=>{
            return <div key={index}>
                <ProjectsDetailsBanner title={item.title} shortContent={item.shortContent}/>
                <ProjectDetailsItem description={item.description} images={item.images} />
            </div>
        })}    
    </div>
  )
}

export default ProjectsDetails