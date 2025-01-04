import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Snapshots.css'
import { getGalleryImages } from '../../../api/api';
import { Link } from 'react-router-dom';

const Snapshots = () => {
    const settings = {
        infinite: true, // Infinite scrolling
        speed: 500, // Animation speed
        slidesToShow: 4, // Show 4 elements at a time
        slidesToScroll: 1, // Scroll one element at a time
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
              breakpoint: 1000, // Max width 600px
              settings: {
                  slidesToShow: 3, // Show only 1 slide at a time
                  slidesToScroll: 1, // Scroll one slide at a time
              },
          },
          {
              breakpoint: 700, // Max width 600px
              settings: {
                  slidesToShow: 2, // Show only 1 slide at a time
                  slidesToScroll: 1, // Scroll one slide at a time
              },
          },
      ],
      };

      const {data: items} = getGalleryImages();

      return (
    <div style={{position:'relative'}}>
        <div className="snapshots_overlay"></div>
        <div className="snapshots_title">
            <h1>snapshots</h1>
            <p>A vibrant display of our best moments, projects, and achievements.</p>
        </div>
        <div className="container">
          <div className=" gallery_slider">
              <Slider {...settings}>
                  {items.map((item, index) => (
                      <a href={item.image} target='_blank'><img key={index} src={item.image} alt="" /></a>
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
                background: "#5BCEFA",
                borderRadius: "50%",
                right:'40px',
                width:'50px',
                height:'50px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
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
            background: "#5BCEFA",
            borderRadius: "50%",
            width:'50px',
            height:'50px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            zIndex:'99'        
        }}
        onClick={onClick}
      />
    );
  };

export default Snapshots