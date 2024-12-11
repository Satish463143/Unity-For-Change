import React from 'react'
import './Navbar.css'
import logo from '../../assets/Images/logo.png'
import {Link} from 'react-router-dom'
import Button from '../Button/Button'

const Navbar = () => {

  return (
    <div className='navbar'>
      <div className='container'>
        <div className="nav_menu">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="menu">
            <nav>
              <ul>
                <li>
                  <Link to=''>
                    Who We are
                  </Link>
                </li>
                <li>
                  <Link to=''>
                    What We Do
                  </Link>
                </li>
                <li>
                  <Link to=''>
                    Activities
                  </Link>
                </li>
                <li>
                  <Link to=''>
                    Resources
                  </Link>
                </li>
                <li>
                  <Link to=''>                   
                      <Button/>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Navbar