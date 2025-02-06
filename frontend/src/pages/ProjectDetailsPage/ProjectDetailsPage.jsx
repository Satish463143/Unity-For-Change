import React from 'react';
import Banners from '../../common/Banners/Banners';
import ProjectsDetails from '../../components/ProjectsDetails/ProjectsDetails';
import { Helmet } from 'react-helmet-async';

const ProjectDetailsPage = () => {
  return (
    <div>
      <Helmet>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8938859185300079"
    crossorigin="anonymous"></script>
        <title>Unity For Change</title>
        <meta
          name="description"
          content="Get an in-depth look at Unity for Change’s ongoing and completed projects in Nepal. From grassroots initiatives to large-scale social programs, each project is designed to create a sustainable impact. Learn about our goals, beneficiaries, and the difference we are making in communities. See real stories of change and find out how you can support or contribute to these projects through volunteering or donations."
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
      <ProjectsDetails />
    </div>
  );
};

export default ProjectDetailsPage;
