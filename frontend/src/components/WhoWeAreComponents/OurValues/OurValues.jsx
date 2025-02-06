import React from 'react';
import './OurValues.css';
import { getOurValues } from '../../../api/api';

const OurValues = () => {
    const { data } = getOurValues();

    return (
        <div className='container' id='ourValues' style={{marginTop:'6.5%'}}>
            <div className="our_values">
                <div className="how_it_start_title" style={{marginBlock:'5%'}}>
                    <h1>our values</h1>
                </div>
                <div className="our_values_grid" >
                    {
                        data?.map((item) => (
                            <div className="our_values_box" key={item.id} >
                                <img src={item.image} alt={item.heading} />
                                <h1>{item.heading}</h1>
                                <p>{item.description}</p>
                                
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default OurValues;
