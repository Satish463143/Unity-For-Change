import React from 'react'
import {Link} from 'react-router-dom'

const ActivitiesItem = ({activity}) => {
  return (
    <div className='activities_box'>
        <Link to={`/project_details/${activity.id}`} 
        state={{activity}}
        >
            <img src={activity.thumbnail_image} alt="Various activities by Unity for Change, including LGBTQIA+ advocacy, community workshops, awareness campaigns, and empowerment programs for trans individuals." /> 
            <div className="activities_date">
                <p style={{display:'flex', alignItems:'center', gap:'8px'}}>
                    <span>
                        <svg baseProfile="tiny" height="24px" version="1.2"
                         viewBox="0 0 24 24" width="24px" xml:space="preserve"
                          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Layer_1">
                                <path d="M19,6.184V6c0-1.657-1.343-3-3-3s-3,1.343-3,3h-2c0-1.657-1.343-3-3-3S5,4.343,5,6v0.184C3.839,6.599,3,7.698,3,9v9   c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3V9C21,7.698,20.161,6.599,19,6.184z M15,6c0-0.552,0.447-1,1-1s1,0.448,1,1v2   c0,0.552-0.447,1-1,1s-1-0.448-1-1V6z M7,6c0-0.552,0.447-1,1-1s1,0.448,1,1v2c0,0.552-0.447,1-1,1S7,8.552,7,8V6z M19,18   c0,0.551-0.448,1-1,1H6c-0.552,0-1-0.449-1-1v-6h14V18z M19,11H5V9c0-0.551,0.448-1,1-1c0,1.104,0.896,2,2,2s2-0.896,2-2h4   c0,1.104,0.896,2,2,2s2-0.896,2-2c0.552,0,1,0.449,1,1V11z"/></g>
                        </svg>
                    </span>
                    <p>{activity.date}</p>
                </p>
                <p style={{display:'flex', alignItems:'center', gap:'8px'}}>
                    <span>
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                        >
                            <defs>
                            <style>{".cls-1{fill:none;}"}</style>
                            </defs>
                            <g data-name="Layer 2" id="Layer_2">
                            <path d="M16,29a1,1,0,0,1-.71-.29l-7.07-7a10.91,10.91,0,0,1,0-15.48,11.07,11.07,0,0,1,15.56,0,10.91,10.91,0,0,1,0,15.48l-7.07,7A1,1,0,0,1,16,29ZM16,5A9,9,0,0,0,9.63,7.62h0a8.91,8.91,0,0,0,0,12.64L16,26.59l6.37-6.33a8.91,8.91,0,0,0,0-12.64A9,9,0,0,0,16,5ZM8.93,6.91h0Z" />
                            <path d="M16,19a5,5,0,1,1,5-5A5,5,0,0,1,16,19Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,16,11Z" />
                            </g>
                            <g id="frame">
                            <rect className="cls-1" height="32" width="32" />
                            </g>
                        </svg>
                    </span>
                    <p>{activity.location}</p>
                </p>
                
            </div>  
            <hr />
            <h1>{activity.title}</h1>  
            <div className="link_button">
                <h4>View details</h4> 
                <span>
                    <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#A30262"
                    >
                        <g id="Layer_1">
                        <path d="M13.293,7.293c-0.391,0.391-0.391,1.023,0,1.414L15.586,11H8c-0.552,0-1,0.448-1,1s0.448,1,1,1h7.586l-2.293,2.293   c-0.391,0.391-0.391,1.023,0,1.414C13.488,16.902,13.744,17,14,17s0.512-0.098,0.707-0.293L19.414,12l-4.707-4.707   C14.316,6.902,13.684,6.902,13.293,7.293z" />
                        </g>
                    </svg>
                </span>
            </div>
        </Link>
    </div>
  )
}

export default ActivitiesItem