import React from 'react'
import Banners from '../../common/Banners/Banners'
import Gallery from '../../components/Gallery/Gallery/Gallery'
import Video from '../../components/Gallery/Video/Video'

const GalleryPage = () => {
  return (
    <div>
      <hr />
        <Banners content='Take a look at the moments that define us-photos and videos capturing our events, initiatives, and the vibrant spirit of our community.' title='GALLERY'/>   
        <Gallery/>
        <Video/>
    </div>
  )
}

export default GalleryPage