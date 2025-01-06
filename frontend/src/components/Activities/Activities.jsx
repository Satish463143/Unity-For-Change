import React from 'react'
import ActivitiesItem from '../../common/ActivitiesItem/ActivitiesItem'
import './Activities.css'
import { getAllActivities } from '../../api/api'

const Activities = () => {
    const {data:activities} = getAllActivities();
    
  return (
    <div className='container'>
        <div className="activities_grid">
            {activities.map((item,index)=>(
                <ActivitiesItem key={index} activity={item} />
            ))}
        </div>      
    </div>
  )
}

export default Activities