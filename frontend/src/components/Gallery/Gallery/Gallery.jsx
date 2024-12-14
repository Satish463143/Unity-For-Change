import React,{useState} from 'react'
import './Gallery.css'
import image1 from '../../../assets/Images/image-lgbtq-plus.jpg' 
import Button from '../../../common/Button/Button'

const Gallery = () => {
    const gallery = [
        {
            image:'',
        },
        {
            image:'',
        },
        {
            image:'',
        },
        {
            image:'',
        },
        {
            image:'',
        },
        {
            image:'',
        },
        {
            image:'',
        },
        {
            image:'',
        },
        {
            image:'',
        },
        {
            image:'',
        },
    ]
    const [visibleCount, setVisibleCount] = useState(8);

    // Sort projects by newest first
    const sortedProjects = gallery
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // Function to load more images
    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 8); // Load 9 more each time
    };
    
  return (
    <div className='container'>
        <div className="how_it_going_title">
                <h1>Our Gallery</h1>
                <p>Explore moments of unity, celebration, and advocacy through our vibrant gallery. Each image reflects our journey toward equality and acceptance within the LGBTQ+ community.</p>
            </div>
        <div className="gallery_grid">
            {sortedProjects.slice(0, visibleCount).map((item, index) => (
                <img key={index} src={image1} alt={`Gallery ${index}`} />
            ))}
        </div> 
        {visibleCount < sortedProjects.length && (
            <div className='load_more_btn'>
                <Button onClick={loadMore} content='Load more'/>
            </div>
        )}       
    </div>
  )
}

export default Gallery