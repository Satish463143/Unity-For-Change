import React, {useState, useEffect} from 'react'
import './MobileNav.css'
import {Link, useLocation} from 'react-router-dom'


const MobileNav = () => {
    const [menuActive, setMenuActive] = useState()
    const [menu, setMenu] = useState("Home");
    const location = useLocation();

    const toggleMenu = ()=>{
        setMenuActive(!menuActive)
    }

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setMenu("Home");
    } else if (path === "/who_we_are") {
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
    else if (path === "/gallery") {
      setMenu("Gallery");
    }
    else if (path === "/donate") {
      setMenu("Donate");
    }
    else if (path === "/contact_us") {
      setMenu("Contact Us");
    }
     else {
      setMenu("");
    }
  }, [location]);
  return (
    <div className='mobile_nav'>
        <div className="container">
            <div className="menu_grid">
                <div className={`${menuActive && 'activeMenu'} hamberg_menu`} >
                    <div className="three_menu" onClick={toggleMenu}>
                        <div className="first_bar"></div>
                        <div className="second_bar"></div>
                        <div className="third_bar"></div>
                    </div>
                </div>
                <div className={`mobile_logo`}>
                    <h1>Unity For Change</h1>
                </div>
                <div className="contact_logo">
                    <span>
                        <svg
                            fill="none"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M12 19.6748C13.9304 20.5049 16.2424 21 19 21V17L15 16L12 19.6748ZM12 19.6748C8.15896 18.023 5.82392 15.0447 4.5 12M4.5 12C3.40075 9.47198 3 6.89819 3 5H7L8 9L4.5 12Z"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                            <path
                                d="M14 4H14.01"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                            <path
                                d="M17 4H17.01"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                            <path
                                d="M20 4H20.01"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                            <path
                                d="M14 7H14.01"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                            <path
                                d="M17 7H17.01"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                            <path
                                d="M20 7H20.01"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                            <path
                                d="M14 10H14.01"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                            <path
                                d="M17 10H17.01"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                            <path
                                d="M20 10H20.01"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                            </svg>
                    </span>
                </div>
            </div>

            <div className={`${menuActive && 'activemobile_menu'} mobile_menu`}>
                <nav>
                    <ul>
                    <li onClick={()=>  {toggleMenu(); setMenu('Home')}} className={menu === "Home" ? "liActive" : ""}>
                    <Link to='/'>
                        Home
                    </Link>
                    </li>
                    <li onClick={()=>  {toggleMenu(); setMenu('Who We Are')}} className={menu === "Who We Are" ? "liActive" : ""}>
                    <Link to='/who_we_are'>
                        Who We Are
                    </Link>
                    </li>
                    <li onClick={()=> {toggleMenu(); setMenu('What We Do')}} className={menu === "What We Do" ? "liActive" : ""}>
                    <Link to='/what_we_do'>
                        What We Do
                    </Link>
                    </li>
                    <li onClick={()=> {toggleMenu(); setMenu('Activites')}} className={menu === "Activites" ? "liActive" : ""}>
                    <Link to='/activites'>
                        Activities
                    </Link>
                    </li>
                    <li onClick={()=> {toggleMenu(); setMenu('Resources')}} className={menu === "Resources" ? "liActive" : ""}>
                    <Link to='/resources'>
                        Resources
                    </Link>
                    </li>
                    <li onClick={()=> {toggleMenu(); setMenu('Gallery')}} className={menu === "Gallery" ? "liActive" : ""}>
                    <Link to='/gallery'>
                        Gallery
                    </Link>
                    </li>
                    <li onClick={()=> {toggleMenu(); setMenu('Contact Us')}} className={menu === "Contact Us" ? "liActive" : ""}>
                    <Link to='/contact_us'>
                        Contact Us
                    </Link>
                    </li>
                    <li onClick={()=> {toggleMenu(); setMenu('Donate')}} className={menu === "Donate" ? "liActive" : ""}>
                    <Link to='/donate'>
                        Donate
                    </Link>
                    </li>                
                    </ul>
                </nav>
            </div>
        </div>        
    </div>
  )
}

export default MobileNav