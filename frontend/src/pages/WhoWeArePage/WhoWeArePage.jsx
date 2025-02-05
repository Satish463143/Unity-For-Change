import React from 'react';
import Banners from '../../common/Banners/Banners';
import HowItStarted from '../../components/WhoWeAreComponents/HowItStarted/HowItStarted';
import HowItGoing from '../../components/WhoWeAreComponents/HowItGoing/HowItGoing';
import OurTeam from '../../components/WhoWeAreComponents/OurTeam/OurTeam';
import OurValues from '../../components/WhoWeAreComponents/OurValues/OurValues';
import { Helmet } from 'react-helmet-async';

const WhoWeArePage = () => {
  return (
    <div>
      <Helmet>
        <title>Who we are</title>
        <meta
          name="description"
          content="Learn about Unity for Change, a passionate organization working towards social development in Nepal. Our team is committed to uplifting communities through education, health, and empowerment programs. Discover our vision, mission, and core values that drive us forward. Meet the changemakers behind our projects and see how our efforts are making a real impact. Whether you're looking to partner with us or volunteer, find out how you can be a part of our journey. Together, we can create a better future!"
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
        title="WHO WE ARE"
        content="Learn more about our organization, our mission, vision, and the passionate team dedicated to creating a more inclusive and supportive community for all."
      />
      <HowItStarted />
      <OurValues />
      {/* <HowItGoing /> */}
      <OurTeam />
    </div>
  );
};

export default WhoWeArePage;
