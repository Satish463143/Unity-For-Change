import React from 'react';
import Banners from '../../common/Banners/Banners';
import Activities from '../../components/Activities/Activities';
import { Helmet } from 'react-helmet-async';

const ActivitiesPage = () => {
  return (
    <div>
      <Helmet>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8938859185300079"
    crossorigin="anonymous"></script>
        <title>Activities</title>
        <meta
          name="description"
          content="Explore the diverse activities of Unity for Change, ranging from educational workshops and healthcare camps to environmental cleanups and community engagement programs. Our initiatives bring people together to work towards a better society. Whether it's organizing youth training sessions, skill development programs, or charity drives, we believe in hands-on impact. Stay updated on our latest activities and see how you can participate to support our mission!"
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
        content="Explore the diverse activities we organize, from workshops and support groups to awareness campaigns and community-building events."
        title="OUR ACTIVITIES"
      />
      <Activities />
    </div>
  );
};

export default ActivitiesPage;
