import React from 'react'
import './TopNav.css'
import {Link} from 'react-router-dom'

const TopNav = () => {
  return (
    <div className='container'>
      <div className="topnav">
        <ul>
          <li><Link to='/galery'>Gallery</Link></li>
          <li><Link>Contact Us</Link></li>
          <li>
            <a href="" target='_blank'>
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
            <a href="" target='_blank'>
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
            <a href="" target='_blank'>
              <span>
                <svg
                  className="feather feather-linkedin"
                  fill="none"
                  height="34"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="34"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect height="12" width="4" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
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