import React from 'react'
import './MakeADifference.css'
import diference_1 from '../../../assets/Images/diference_1.png'
import diference_2 from '../../../assets/Images/diference_2.png'
import diference_3 from '../../../assets/Images/diference_3.png'
import { Link } from 'react-router-dom'
import Button from '../../../common/Button/Button'
import { getAllActivities } from '../../../api/api'

const MakeADifference = () => {
    const {data, error, loading} = getAllActivities();

  return (
    <div className='make_a_difference'>
        <div className="title">
            <h2>how we make a</h2>
            <h1>difference</h1>
        </div>
        <div className="container">
            <div className="make_a_difference_grid">
            {
                <div className="make_a_difference_box">
                    <div className="make_a_difference_box_image">
                        <img src={data[0]?.thumbnail_image} alt="" />
                    </div>
                    <div className="make_a_difference_box_content">
                        <p style={{display:'flex', alignItems:'center', margin:'20px 0 10px 0', gap:'20px'}}>
                            <span>
                                <svg
                                    id="Icons"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    width='25px'
                                    height='25px'
                                    >
                                    <defs>
                                        <style>{'.cls-1{fill:#A30262;}'}</style>
                                    </defs>
                                    <path
                                        className="cls-1"
                                        d="M20,2H19V1a1,1,0,0,0-2,0V2H7V1A1,1,0,0,0,5,1V2H4A4,4,0,0,0,0,6V20a4,4,0,0,0,4,4H20a4,4,0,0,0,4-4V6A4,4,0,0,0,20,2Zm2,18a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H5V5A1,1,0,0,0,7,5V4H17V5a1,1,0,0,0,2,0V4h1a2,2,0,0,1,2,2Z"
                                    />
                                    <path
                                        className="cls-1"
                                        d="M19,7H5A1,1,0,0,0,5,9H19a1,1,0,0,0,0-2Z"
                                    />
                                    <path
                                        className="cls-1"
                                        d="M7,12H5a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2Z"
                                    />
                                    <path
                                        className="cls-1"
                                        d="M7,17H5a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2Z"
                                    />
                                    <path
                                        className="cls-1"
                                        d="M13,12H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"
                                    />
                                    <path
                                        className="cls-1"
                                        d="M13,17H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"
                                    />
                                    <path
                                        className="cls-1"
                                        d="M19,12H17a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"
                                    />
                                    <path
                                        className="cls-1"
                                        d="M19,17H17a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"
                                    />
                                </svg>
                            </span>
                            <p>{data[0]?.date}</p>
                        </p>
                        <hr />
                        <h2>{data[0]?.title}</h2>
                        <Link to=''>                   
                            <Button content="Learn more"/>
                        </Link>
                    </div>
                </div>
            }
            
                <div className="make_a_difference_box" >
                   {
                    data?.slice(1,3).map((data)=>(
                        <div className="make_a_difference_box_grid" key={data.id} style={{marginBottom: '10px'}}>
                            <div className=" make_a_difference_box_image_second">
                                <img src={data.thumbnail_image} alt="" />
                            </div>
                            <div className="make_a_difference_box_content">
                                <p style={{display:'flex', alignItems:'center', margin:'20px 0 10px 0', gap:'20px'}}>
                                    <span>
                                        <svg
                                            id="Icons"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            width='25px'
                                            height='25px'
                                            >
                                            <defs>
                                                <style>{'.cls-1{fill:#A30262;}'}</style>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M20,2H19V1a1,1,0,0,0-2,0V2H7V1A1,1,0,0,0,5,1V2H4A4,4,0,0,0,0,6V20a4,4,0,0,0,4,4H20a4,4,0,0,0,4-4V6A4,4,0,0,0,20,2Zm2,18a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H5V5A1,1,0,0,0,7,5V4H17V5a1,1,0,0,0,2,0V4h1a2,2,0,0,1,2,2Z"
                                            />
                                            <path
                                                className="cls-1"
                                                d="M19,7H5A1,1,0,0,0,5,9H19a1,1,0,0,0,0-2Z"
                                            />
                                            <path
                                                className="cls-1"
                                                d="M7,12H5a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2Z"
                                            />
                                            <path
                                                className="cls-1"
                                                d="M7,17H5a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2Z"
                                            />
                                            <path
                                                className="cls-1"
                                                d="M13,12H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"
                                            />
                                            <path
                                                className="cls-1"
                                                d="M13,17H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"
                                            />
                                            <path
                                                className="cls-1"
                                                d="M19,12H17a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"
                                            />
                                            <path
                                                className="cls-1"
                                                d="M19,17H17a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"
                                            />
                                        </svg>
                                    </span>
                                    <p>{data.date}</p>
                                </p>
                                <hr />
                                <h2>{data.title}</h2>
                                <Link to=''>                   
                                    <Button content="Learn more"/>
                                </Link>
                            </div>
                        </div>
                    ))
                    }
                </div>   
            </div>
        </div>
    </div>
  )
}

export default MakeADifference