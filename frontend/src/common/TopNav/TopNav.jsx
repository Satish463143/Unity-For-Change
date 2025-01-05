import React from 'react'
import './TopNav.css'
import {Link} from 'react-router-dom'

const TopNav = () => {
  return (
    <div className='container'>
      <div className="topnav">
        <ul>
          <li><Link to='/gallery'>Gallery</Link></li>
          <li><Link to='/contact_us'>Contact Us</Link></li>
          <li>
            <a href="https://m.facebook.com/@lgbtiqgroup/?hr=1" target='_blank'>
              <span>
                <svg
                  className="feather feather-facebook"
                  fill="none"
                  height="30"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/unity_4_change?igsh=ZHNkZjB2Nm1xejR1" target='_blank'>
              <span>
                <svg
                  className="feather feather-instagram"
                  fill="none"
                  height="30"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a href="https://mail.google.com/mail/u/0/?ogbl=u4change2019@gmail.com" target='_blank'>
              <span>
                <svg
                  id="Icons"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2fff/svg"
                  width='30px'
                  height='30px'
                  aria-labelledby="iconEmailTitle"
                  >
                  <title id="iconEmailTitle">Email Icon</title>
                  <path
                      d="M20,2H4A4,4,0,0,0,0,6V18a4,4,0,0,0,4,4H20a4,4,0,0,0,4-4V6A4,4,0,0,0,20,2Zm2,16a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H20a2,2,0,0,1,2,2Z"
                      fill='#000'
                  />
                  <path
                      d="M19.74,7.017a1,1,0,0,0-1.413-.067L13.35,11.479a2.005,2.005,0,0,1-2.7,0L5.673,6.95A1,1,0,1,0,4.327,8.43l3.957,3.6L4.328,15.62A1,1,0,1,0,5.672,17.1l4.143-3.76a3.937,3.937,0,0,0,4.37,0l4.143,3.76a1,1,0,1,0,1.344-1.48l-3.955-3.591,3.956-3.6A1,1,0,0,0,19.74,7.017Z"
                      fill='#000'
                  />
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </div>      
    </div>
  )
}

export default TopNav