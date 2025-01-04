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

const Home = () => {
  return (
    <div>
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