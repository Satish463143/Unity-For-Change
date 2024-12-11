import React from 'react'
import Home from './pages/Home/Home'
import {Routes,Route} from 'react-router-dom'
import LayoutPage from './pages/LayoutPage/LayoutPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutPage/>}>
          <Route index element={<Home />} />
          <Route path='/aboutUs' element={<Home />} />

        </Route>
      </Routes>
    </div>
  )
}

export default App