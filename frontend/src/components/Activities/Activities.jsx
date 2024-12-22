import React from 'react'
import ActivitiesItem from '../../common/ActivitiesItem/ActivitiesItem'
import image1 from '../../assets/Images/image-lgbtq-plus.jpg'
import './Activities.css'
import { getAllActivities } from '../../api/api'

const Activities = () => {
    const {data:activities} = getAllActivities();
    
  return (
    <div className='container'>
        <div className="activities_grid">
            {activities.map((item,index)=>(
                <ActivitiesItem key={index} id={item._id} title={item.title} date={item.date} location={item.location} image={item.thumbnail_image}/>
            ))}
            
        </div>      
    </div>
  )
}

export default Activities