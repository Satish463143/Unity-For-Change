import React from 'react'
import './Home.css'
import Banner from '../../components/HomeComponent/Banner/Banner'
import WhatWeOffer from '../../components/HomeComponent/WhatWeOffer/WhatWeOffer'

const Home = () => {
  return (
    <div>
      <Banner/>
      <WhatWeOffer/>
    </div>
  )
}

export default Home