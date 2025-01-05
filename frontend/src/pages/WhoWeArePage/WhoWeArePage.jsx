import React from 'react'
import Banners from '../../common/Banners/Banners'
import HowItStarted from '../../components/WhoWeAreComponents/HowItStarted/HowItStarted'
import HowItGoing from '../../components/WhoWeAreComponents/HowItGoing/HowItGoing'
import OurTeam from '../../components/WhoWeAreComponents/OurTeam/OurTeam'
import OurValues from '../../components/WhoWeAreComponents/OurValues/OurValues'

const WhoWeArePage = () => {
  return (
    <div>
        <hr />
        <Banners title='WHO WE ARE' content="Learn more about our organization, our mission, vision, and the passionate team dedicated to creating a more inclusive and supportive community for all."/>
        <HowItStarted/>
        <OurValues/>
        {/* <HowItGoing/> */}        
        <OurTeam/>
    </div>
  )
}


export default WhoWeArePage