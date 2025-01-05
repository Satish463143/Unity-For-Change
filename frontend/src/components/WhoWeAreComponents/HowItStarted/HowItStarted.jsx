import React from 'react';
import { getHowItStarted } from '../../../api/api';
import parse from 'html-react-parser';
import './HowItStarted.css';

const HowItStarted = () => {
    const { data, loading, error } = getHowItStarted();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>No data available</div>;
    }

    return (
        <div className="container">
            <div className="how_it_start" id="howItStart">
                <div className="how_it_start_title">
                    <h1>Our Story</h1>
                </div>
                <div className="how_it_start_grid">
                    <div className="how_it_start_box">
                        <div className="how_it_start_image">
                            <img src={data.image} alt="Story" />
                        </div>
                    </div>
                    <div className="how_it_start_content">
                        <p>{parse(data.description)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItStarted;
