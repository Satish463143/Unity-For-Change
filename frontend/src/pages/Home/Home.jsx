import React from 'react'
import './Home.css'
import Banner from '../../components/HomeComponent/Banner/Banner'
import WhatWeOffer from '../../components/HomeComponent/WhatWeOffer/WhatWeOffer'
import GetInvolved from '../../components/HomeComponent/GetInvolved/GetInvolved'
import WhoWeAre from '../../components/HomeComponent/WhoWeAre/WhoWeAre'
import MakeADifference from '../../components/HomeComponent/MakeADifference/MakeADifference'
import Snapshots from '../../components/HomeComponent/Snapshots/Snapshots'
import Sponsor from '../../components/HomeComponent/Sponsor/Sponsor'
import DownBanner from '../../components/HomeComponent/DownBanner/DownBanner'
import {Helmet} from 'react-helmet-async';

const Home = () => {
  return (
    <div>
     <Helmet>
        <title>Unity for Change</title>
        <meta name="description" content="
        Welcome to Unity for Change! We are a Nepal-based non-profit organization dedicated to empowering communities through education, healthcare, environmental conservation, and social initiatives. Our mission is to bring meaningful change by supporting underprivileged communities and promoting sustainable solutions. Join us in making a difference through volunteering, donations, and advocacy. Explore our programs, success stories, and upcoming events to see how we are transforming lives. Be a part of the change today!
        " />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
      </Helmet>
      <Banner/>
      <WhatWeOffer/>        
      <WhoWeAre/>
      <MakeADifference/>
      <Snapshots/>           
      <Sponsor/>
      <GetInvolved/> 
      <DownBanner/>  
    </div>
  )
}

export default Home