import React from 'react';
import Banners from '../../common/Banners/Banners';
import Gallery from '../../components/Gallery/Gallery/Gallery';
import Video from '../../components/Gallery/Video/Video';
import { Helmet } from 'react-helmet-async';

const GalleryPage = () => {
  return (
    <div>
      <Helmet>
        <title>Gallery</title>
        <meta
          name="description"
          content="Explore inspiring moments from Unity for Change’s projects and events in our gallery. Our photos and videos showcase our impact in education, healthcare, and environmental initiatives across Nepal. See how our volunteers, beneficiaries, and supporters come together to create meaningful change. Browse our collection and get a glimpse of the positive work being done on the ground."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-91Y5X6D7SM"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-91Y5X6D7SM');
          `}
        </script>
      </Helmet>
      <hr />
      <Banners
        content="Take a look at the moments that define us - Photos and Videos capturing our events, initiatives, and the vibrant spirit of our community."
        title="GALLERY"
      />
      <Gallery />
      <Video />
    </div>
  );
};

export default GalleryPage;
