import React from 'react'
import Banners from '../../common/Banners/Banners'
import Resources from '../../components/Resources/Resources'

const ResourcesPage = () => {
  return (
    <div>
        <hr />
        <Banners content='Discover guides, articles, and tools designed to support and empower the LBT+ community. Stay informed, stay connected, and embrace equality.' title='RESOURCES'/>
        <Resources/>
    </div>
  )
}

export default ResourcesPage