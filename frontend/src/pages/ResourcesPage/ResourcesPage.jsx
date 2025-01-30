import React from 'react'
import Banners from '../../common/Banners/Banners'
import Resources from '../../components/Resources/Resources'
import {Helmet} from 'react-helmet-async';

const ResourcesPage = () => {
  return (
    <div>
    <Helmet>
            <title>Resources</title>
            <meta name="description" content="
            Find valuable resources, research reports, and guides provided by Unity for Change to empower communities and drive social transformation. Our library includes informative articles on education, healthcare, environmental sustainability, and social justice. Whether you're a student, volunteer, or organization, explore our collection to learn and take action. Stay informed and contribute to positive change with the right knowledge and tools!
            " />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
          </Helmet>
        <hr />
        <Banners content='Discover guides, articles, and tools designed to support and empower the LBT+ community. Stay informed, stay connected, and embrace equality.' title='RESOURCES'/>
        <Resources/>
    </div>
  )
}

export default ResourcesPage