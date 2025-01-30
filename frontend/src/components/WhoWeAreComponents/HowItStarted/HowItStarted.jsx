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
                <div className="how_it_start_desktop how_it_start_grid">
                    <div className="how_it_start_box">
                        <div className="how_it_start_image">
                            <img src={data.first_image} alt="The journey of Unity for Change—founded by dedicated trans youth, advocating for trans rights, inclusion, and community empowerment since 2019." />
                        </div>
                    </div>
                    <div className="how_it_start_content">
                        <p>{parse(data.first_description)}</p>
                    </div>
                    <div className="how_it_start_content">
                        <p>{parse(data.second_description)}</p>
                    </div>
                    <div className="how_it_start_box">
                        <div className="how_it_start_image">
                            <img src={data.second_image} alt="The journey of Unity for Change—founded by dedicated trans youth, advocating for trans rights, inclusion, and community empowerment since 2019." />
                        </div>
                    </div>
                    <div className="how_it_start_box">
                        <div className="how_it_start_image">
                            <img src={data.third_image} alt="The journey of Unity for Change—founded by dedicated trans youth, advocating for trans rights, inclusion, and community empowerment since 2019." />
                        </div>
                    </div>
                    <div className="how_it_start_content">
                        <p>{parse(data.third_description)}</p>
                    </div>
                </div>
                <div className="how_it_start_mobile how_it_start_grid">
                    <div className="how_it_start_box">
                        <div className="how_it_start_image image1">
                            <img src={data.first_image} alt="The journey of Unity for Change—founded by dedicated trans youth, advocating for trans rights, inclusion, and community empowerment since 2019." />
                        </div>
                    </div>
                    <div className="how_it_start_content">
                        <p>{parse(data.first_description)}</p>
                    </div>
                    <div className="how_it_start_box">
                        <div className="how_it_start_image">
                            <img src={data.second_image} alt="The journey of Unity for Change—founded by dedicated trans youth, advocating for trans rights, inclusion, and community empowerment since 2019." />
                        </div>
                    </div>
                    <div className="how_it_start_content">
                        <p>{parse(data.second_description)}</p>
                    </div>
                    
                    <div className="how_it_start_box">
                        <div className="how_it_start_image">
                            <img src={data.third_image} alt="The journey of Unity for Change—founded by dedicated trans youth, advocating for trans rights, inclusion, and community empowerment since 2019." />
                        </div>
                    </div>
                    <div className="how_it_start_content">
                        <p>{parse(data.third_description)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItStarted;
