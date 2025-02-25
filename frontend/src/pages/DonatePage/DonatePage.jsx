import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banners from '../../common/Banners/Banners';

const DonatePage = () => {
  return (
    <div>
      <Helmet>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8938859185300079"
    crossorigin="anonymous"></script>
        <title>Donate</title>
        <meta
          name="description"
          content="Make a difference today by donating to Unity for Change. Your contribution helps us provide education, healthcare, and social welfare programs to underserved communities in Nepal. Every donation, big or small, creates a meaningful impact by supporting those in need. Choose to give a one-time or recurring donation and be a part of the change. Help us build a better future together!"
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
        content="Your donation helps us advocate for LBT+ rights, provide community support, and create a more inclusive world. Every contribution makes a difference."
        title="DONATE US"
      />
    </div>
  );
};

export default DonatePage;
