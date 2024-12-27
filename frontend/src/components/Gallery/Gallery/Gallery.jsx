import React,{useState} from 'react'
import './Gallery.css'
import { Link } from 'react-router-dom'
import Button from '../../../common/Button/Button'
import { getGalleryImages } from '../../../api/api'

const Gallery = () => {
    const {data:gallery} = getGalleryImages()
    const [visibleCount, setVisibleCount] = useState(8);

    const sortedProjects = gallery
        .sort((a, b) => new Date(b.date) - new Date(a.date));

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
               <Link to={item.image}><img key={index} src={item.image} alt={`Gallery ${index}`} /></Link>
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