import React from 'react'
import Home from './pages/Home/Home'
import {Routes,Route} from 'react-router-dom'
import LayoutPage from './pages/LayoutPage/LayoutPage'
import WhoWeArePage from './pages/WhoWeArePage/WhoWeArePage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutPage/>}>
          <Route index element={<Home />} />
          <Route path='/who_we_are' element={<WhoWeArePage/> } />

        </Route>
      </Routes>
    </div>
  )
}

export default App