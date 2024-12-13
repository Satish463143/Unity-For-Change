import React from 'react'
import Banners from '../../common/Banners/Banners'
import Activities from '../../components/Activities/Activities'

const ActivitesPage = () => {
  return (
    <div>
        <hr />
        <Banners content='Explore the diverse activities we organize, from workshops and support groups to awareness campaigns and community-building events.' title='ACTIVITIES'/>
        <Activities/>
    </div>
  )
}

export default ActivitesPage