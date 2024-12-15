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
                <li onClick={()=> setMenu('Who We Are')} className={menu === "Who We Are" ? "liActive" : ""}>
                  <Link to='who_we_are'>
                    Who We Are
                  </Link>
                </li>
                <li onClick={()=> setMenu('What We Do')} className={menu === "What We Do" ? "liActive" : ""}>
                  <Link to='/what_we_do'>
                    What We Do
                  </Link>
                </li>
                <li onClick={()=> setMenu('Activites')} className={menu === "Activites" ? "liActive" : ""}>
                  <Link to='/activites'>
                    Activities
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