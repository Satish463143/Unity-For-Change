import React from 'react'
import ActivitiesItem from '../../common/ActivitiesItem/ActivitiesItem'
import image1 from '../../assets/Images/image-lgbtq-plus.jpg'
import './Activities.css'

const Activities = () => {
    const activities = [
        {
            _id:'1',
            title:'title 1 ',
            image:'',
            date:'20th Dec 20024',
            location:'Kathmandu'
        },
        {
            _id:'2',
            title:'title 1 ',
            image:'',
            date:'20th Dec 20024',
            location:'Kathmandu'
        },
        {
            _id:'3',
            title:'here is title 1 ',
            image:'',
            date:'20th Dec 20024',
            location:'Kathmandu'
        },
        {
            _id:'4',
            title:'here is the title here is the title',
            image:'',
            date:'20th Dec 20024',
            location:'Kathmandu'
        },
        {
            _id:'5',
            title:'Title goes here now',
            image:'',
            date:'20th Dec 20024',
            location:'Kathmandu'
        },
        {
            _id:'6',
            title:'Title ',
            image:'',
            date:'20th Dec 20024',
            location:'Kathmandu'
        },
    ]
  return (
    <div className='container'>
        <div className="activities_grid">
            {activities.map((item,index)=>(
                <ActivitiesItem key={index} id={item._id} title={item.title} date={item.date} location={item.location} image={image1}/>
            ))}
            
        </div>      
    </div>
  )
}

export default Activities