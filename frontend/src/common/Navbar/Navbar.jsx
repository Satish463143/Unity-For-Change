import React,{useState,useEffect} from 'react'
import './Navbar.css'
import logo from '../../assets/Images/logo.png'
import {Link,useLocation} from 'react-router-dom'
import Button from '../Button/Button'

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setMenu("Home");
    } 
    else if (path === "/who_we_are/#ourValues") {
      setMenu("Who We Are");
    }
    else if (path === "/who_we_are/#howItsGoing") {
      setMenu("Who We Are");
    }
    else if (path === "/who_we_are/#howItStart") {
      setMenu("Who We Are");
    }
    else if (path === "/what_we_do") {
      setMenu("What We Do");
    }
    else if (path === "/activites") {
      setMenu("Activites");
    }
    else if (path === "/project_details/:id") {
      setMenu("Activites");
    }
    else if (path === "/resources") {
      setMenu("Resources");
    }
     else {
      setMenu("");
    }
  }, [location]);


  return (
    <div className='navbar'>
      <div className='container'>
        <div className="nav_menu">
          <div className="logo">
            <Link to='/'>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="menu">
            <nav>
              <ul>
                <li className='dropdownMenu'>
                  <Link to='/who_we_are'><p className={`${menu === "Who We Are" ? "liActive" : ""}`}>Who We Are </p></Link>
                  <span>
                    <svg
                      height="24px"
                      id="Layer_1"
                      style={{ enableBackground: 'new 0 0 512 512' }}
                      version="1.1"
                      viewBox="0 0 512 512"
                      width="24px"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z"
                      />
                    </svg>
                  </span>
                  <div className="submenu">
                    <Link to='/who_we_are/#howItStart'><li onClick={() => setMenu("Who We Are")}>Our Story</li></Link>
                    <Link to='/who_we_are/#ourValues'><li onClick={() => setMenu("Who We Are")}>Our Values</li></Link>
                    <Link to='/who_we_are/#ourTeam'><li onClick={() => setMenu("Who We Are")}>Our Team</li></Link>
                  </div>
                </li>
                <li onClick={()=> setMenu('What We Do')} className={menu === "What We Do" ? "liActive" : ""}>
                  <Link to='/what_we_do'>
                    Thematic Areas
                  </Link>
                </li>
                <li onClick={()=> setMenu('Activites')} className={menu === "Activites" ? "liActive" : ""}>
                  <Link to='/activites'>
                    Our Projects
                  </Link>
                </li>
                <li onClick={()=> setMenu('Resources')} className={menu === "Resources" ? "liActive" : ""}>
                  <Link to='/resources'>
                    Resources
                  </Link>
                </li>
                <li>
                  <Link to='/donate'>                   
                      <Button content="Donate Us"/>
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