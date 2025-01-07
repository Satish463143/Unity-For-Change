import React from 'react';
import './OurValues.css';
import { getOurValues } from '../../../api/api';

const OurValues = () => {
    const { data } = getOurValues();

    return (
        <div className='container' id='ourValues'>
            <div className="our_values">
                <div className="how_it_start_title">
                    <h1>our values</h1>
                </div>
                <div className="our_values_grid" >
                    {
                        data?.map((item) => (
                            <div className="our_values_box" key={item.id} >
                                <img src={item.image} alt="Value icon" />
                                <h1>{item.heading}</h1>
                                {/* <p>{item.description}</p>
                                 */}
                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore dolores cumque doloribus cupiditate ad, aperiam beatae nihil voluptates veniam exercitationem? Optio nam eligendi dolore provident excepturi laboriosam omnis autem eveniet.</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default OurValues;
