import React,{useState} from 'react'
import './Video.css'
import Button from '../../../common/Button/Button'
import { getGalleryVideos } from '../../../api/api'

const Video = () => {
    const {data: gallery} = getGalleryVideos();
    const [visibleCount, setVisibleCount] = useState(6);
    console.log(gallery)

    // Sort projects by newest first
    const sortedProjects = gallery
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // Function to load more images
    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 6); // Load 9 more each time
    };
    
  return (
    <div className='container'>
        <div className="how_it_going_title">
                <h1>Our Videos</h1>
                <p>Experience stories of resilience, advocacy, and celebration through our inspiring video collection. Each clip captures powerful moments from our journey toward equality and acceptance within the LGBTQ+ community.</p>
            </div>
            <div className='videos_grid'>
                {sortedProjects.slice(0, visibleCount).map((item, index) => {
                    return (
                        <iframe
                            key={index}
                            src={`https://www.youtube.com/embed/${new URL(item.youtubeLink).searchParams.get('v')}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    )
                })
                }
            </div>
        {visibleCount < sortedProjects.length && (
            <div className='load_more_btn'>
                <Button onClick={loadMore} content='Load more'/>
            </div>
        )}       
    </div>
  )
}

export default Video