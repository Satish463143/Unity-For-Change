import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Snapshots.css'

const Snapshots = () => {
    const settings = {
        infinite: true, // Infinite scrolling
        speed: 500, // Animation speed
        slidesToShow: 4, // Show 4 elements at a time
        slidesToScroll: 1, // Scroll one element at a time
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
    
        const items = [
            {
                item1:'../../../assets/Images/whatweoffer.png'
            },
            {
                item2:''
            },
            {
                item3:''
            },
            {
                item4:''
            },
            {
                item5:''
            },
            {
                item6:''
            },
          ];

  return (
    <div style={{position:'relative'}}>
        <div className="snapshots_overlay"></div>
        <div className="snapshots_title">
            <h1>snapshots</h1>
            <p>A vibrant display of our best moments, projects, and achievements.</p>
        </div>
        <div className="gallery_slider">
            <Slider {...settings}>
                {items.map((item, index) => (
                    <img key={index} src={item} alt="" />
                ))}
            </Slider>
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