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