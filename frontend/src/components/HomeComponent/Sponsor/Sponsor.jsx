import React, {useState} from 'react';
import './Sponsor.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SponsorItem from '../../../common/SponsorItem/SponsorItem';
import compnay from '../../../assets/Images/compnay.png'

const Sponsor = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const settings = {
        infinite: true, // Infinite scrolling
        speed: 500, // Animation speed
        slidesToShow: 3, // Show 3 elements at a time for better focus
        slidesToScroll: 1, // Scroll one element at a time
        centerMode: true, // Center the active element
        centerPadding: "0", // No padding around the center
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        afterChange: (current) => setActiveIndex(current), // Track the active element
    };

    const items = [
        {
            image: '../../../../assets/Images/whatweoffer.png',
            name: "Sponsor's Name 1",
        },
        {
            image: '../../../assets/Images/whatweoffer.png',
            name: "Sponsor's Name 2",
        },
        {
            image: '../../../assets/Images/whatweoffer.png',
            name: "Sponsor's Name 3",
        },
        {
            image: '../../../assets/Images/whatweoffer.png',
            name: "Sponsor's Name 4",
        },
        {
            image: '../../../assets/Images/whatweoffer.png',
            name: "Sponsor's Name 5",
        },
    ];


    return (
        <div className="sponsors">
            <hr />
            <div className="title">
                <h1>Our Sponsors</h1>
            </div>
            <div className="container">
                <div className="sponsor_slider">
                    <Slider {...settings}>
                        {items.map((item, index) => (
                            <SponsorItem key={index} name={item.name} image={compnay} isActive={index === activeIndex} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

// Custom Next Arrow
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                border:'2px solid var(--black)',
                borderRadius: "50%",
                right: "-10px",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            onClick={onClick}
        />
    );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                border:'2px solid var(--black)',
                borderRadius: "50%",
                zIndex: "9999",
                left:'-20px',
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            onClick={onClick}
        />
    );
};

export default Sponsor;