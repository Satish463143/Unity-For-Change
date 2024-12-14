import React from 'react'
import Home from './pages/Home/Home'
import {Routes,Route} from 'react-router-dom'
import LayoutPage from './pages/LayoutPage/LayoutPage'
import WhoWeArePage from './pages/WhoWeArePage/WhoWeArePage'
import WhatWeDo from './pages/WhatWeDo/WhatWeDo'
import ActivitesPage from './pages/ActivitesPage/ActivitesPage'
import GalleryPage from './pages/GalleryPage/GalleryPage'
import ContactUsPage from './pages/ContactUsPage/ContactUsPage'
import DonatePage from './pages/DonatePage/DonatePage'
import ResourcesPage from './pages/ResourcesPage/ResourcesPage'
import ProjectDetailsPage from './pages/ProjectDetailsPage/ProjectDetailsPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutPage/>}>
          <Route index element={<Home />} />
          <Route path='/who_we_are' element={<WhoWeArePage/> } />
          <Route path='/what_we_do' element={<WhatWeDo/> } />
          <Route path='/activites' element={<ActivitesPage/> } />
          <Route path='/galery' element={<GalleryPage/> } />
          <Route path='/contact_us' element={<ContactUsPage/> } />
          <Route path='/donate' element={<DonatePage/> } />
          <Route path='/resources' element={<ResourcesPage/> } />
          <Route path='/project_details/:id' element={<ProjectDetailsPage/> } />

        </Route>
      </Routes>
    </div>
  )
}

export default App