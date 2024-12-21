import React from 'react'
import './FocousArea.css'
import image from'../../../assets/Images/0614LGBTQHealth_SC.jpg'

const FocousArea = () => {
  return (
    <div className='container'>
        <div className="how_it_start_title">
            <h1>KEY FOCUS AREAS</h1>
        </div>    
        <div className="focous_area">
            <div className="focous_area_box" style={{border:'2px solid var(--blue)'}}>
                <img src={image} alt="" />
                <h1>Heading</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo veritatis accusantium commodi delectus sapiente corrupti provident magnam natus recusandae facere autem architecto, error iure adipisci itaque doloremque odit? Labore, neque?</p>
            </div>
            <div className="focous_area_box" style={{border:'2px solid var(--orange)'}}>
                <img src={image} alt="" />
                <h1>Heading</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo veritatis accusantium commodi delectus sapiente corrupti provident magnam natus recusandae facere autem architecto, error iure adipisci itaque doloremque odit? Labore, neque?</p>
            </div>
            <div className="focous_area_box" style={{border:'2px solid var(--deep_pink)'}}>
                <img src={image} alt="" />
                <h1>Heading</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo veritatis accusantium commodi delectus sapiente corrupti provident magnam natus recusandae facere autem architecto, error iure adipisci itaque doloremque odit? Labore, neque?</p>
            </div>
        
            <div className="focous_area_box" style={{border:'2px solid var(--pruple)'}}>
                <img src={image} alt="" />
                <h1>Heading</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo veritatis accusantium commodi delectus sapiente corrupti provident magnam natus recusandae facere autem architecto, error iure adipisci itaque doloremque odit? Labore, neque?</p>
            </div>
            <div className="focous_area_box" style={{border:'2px solid var(--blue_purple)'}}>
                <img src={image} alt="" />
                <h1>Heading</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo veritatis accusantium commodi delectus sapiente corrupti provident magnam natus recusandae facere autem architecto, error iure adipisci itaque doloremque odit? Labore, neque?</p>
            </div>
            <div className="focous_area_box" style={{border:'2px solid var(--blue)'}}>
                <img src={image} alt="" />
                <h1>Heading</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo veritatis accusantium commodi delectus sapiente corrupti provident magnam natus recusandae facere autem architecto, error iure adipisci itaque doloremque odit? Labore, neque?</p>
            </div>
        </div>    
    </div>
  )
}

export default FocousArea