import React from 'react'
import './OurTeam.css'
import OurTeamSlider from '../../../common/OurTeamSlider/OurTeamSlider'
import team from '../../../assets/Images/team.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurTeam = () => {
    const settings = {
        infinite: true, // Infinite scrolling
        speed: 500, // Animation speed
        slidesToShow: 1, // Show 3 elements at a time for better focus
        slidesToScroll: 1, // Scroll one element at a time
        centerMode: true, // Center the active element
        centerPadding: "0", // No padding around the center
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    const ourTeams = [
        {
           name:'Satish Mahato',
           image:'',
           position:'President',
           content:'he is webdeveloper' 
        },
        {
           name:'Prayusha Acharaya',
           image:'',
           position:'CEO',
           content:'she is full stack developer' 
        },
    ]
  return (

    
    
    <div className="our_team">
        <div className='container'>
            <div className="how_it_going_title">
                <h1>Our team</h1>
                <p>A passionate group dedicated to advocating for LGBTQ+ equality, empowerment, and community support.</p>
            </div>
            <div className="our_team_slider">
                <Slider {...settings}>
                    {ourTeams.map((item,index)=>(
                        <OurTeamSlider key={index} name={item.name} image={team} position={item.position} content={item.content}/>
                    ))}   
                </Slider>             
            </div>

        </div>        
    </div>
  )
}

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

export default OurTeam