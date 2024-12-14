import React from 'react'
import './ConatctUsMap.css'

const ConatctUsMap = () => {
  return (
    <div className='contact_map'>
      <div className="how_it_going_title">
          <h1 style={{fontSize:'35px', marginTop:'0px'}}>visit our office</h1>
      </div>
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.812884175096!2d85.32187577626502!3d27.723063024796534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193353fae6c3%3A0xfbdfe270244004e7!2sFlash%20Sports%20Academy!5e0!3m2!1sen!2snp!4v1734163392441!5m2!1sen!2snp" width="90%" height="300"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="contact_link">
        <h1>CONTACT US VIA</h1>
        <ul>
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
                  xmlns="http://www.w3.org/2fff/svg"
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
                  xmlns="http://www.w3.org/2fff/svg"
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
                  xmlns="http://www.w3.org/2fff/svg"
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
      <div className="number">
        <span>
          <svg
            id="icon"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2fff/svg"
            width='24px'
            height='24px'
            aria-labelledby="iconPhoneTitle"
            >
            <title id="iconPhoneTitle">Phone Icon</title>
            <defs>
                <style>{`.cls-1 { fill: none; }`}</style>
            </defs>
            <path
                d="M24,13H22a3.0033,3.0033,0,0,0-3-3V8A5.0057,5.0057,0,0,1,24,13Z"
                transform="translate(0)"
                fill='#fff'
            />
            <path
                d="M28,13H26a7.0078,7.0078,0,0,0-7-7V4A9.01,9.01,0,0,1,28,13Z"
                transform="translate(0)"
                fill='#fff'
            />
            <path
                d="M20.3333,21.4823l2.24-2.24a2.1667,2.1667,0,0,1,2.3368-.48l2.7281,1.0913A2.1666,2.1666,0,0,1,29,21.8659v4.9613a2.1668,2.1668,0,0,1-2.2843,2.1686C7.5938,27.8054,3.7321,11.6114,3.0146,5.4079A2.162,2.162,0,0,1,5.1692,3H10.042a2.1666,2.1666,0,0,1,2.0117,1.362L13.145,7.09a2.1666,2.1666,0,0,1-.48,2.3367l-2.24,2.24S11.6667,20.399,20.3333,21.4823Z"
                transform="translate(0)"
                fill='#fff'
            />
            <rect
                className="cls-1"
                data-name="&lt;Transparent Rectangle&gt;"
                width="32"
                height="32"
            />
          </svg>
        </span>
        <a href="" target='_blank'>(981)-123-1234</a>
      </div>
      <div className="number">
        <span>
          <svg
            id="Icons"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2fff/svg"
            width='24px'
            height='24px'
            aria-labelledby="iconEmailTitle"
            >
            <title id="iconEmailTitle">Email Icon</title>
            <path
                d="M20,2H4A4,4,0,0,0,0,6V18a4,4,0,0,0,4,4H20a4,4,0,0,0,4-4V6A4,4,0,0,0,20,2Zm2,16a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H20a2,2,0,0,1,2,2Z"
                fill='#fff'
            />
            <path
                d="M19.74,7.017a1,1,0,0,0-1.413-.067L13.35,11.479a2.005,2.005,0,0,1-2.7,0L5.673,6.95A1,1,0,1,0,4.327,8.43l3.957,3.6L4.328,15.62A1,1,0,1,0,5.672,17.1l4.143-3.76a3.937,3.937,0,0,0,4.37,0l4.143,3.76a1,1,0,1,0,1.344-1.48l-3.955-3.591,3.956-3.6A1,1,0,0,0,19.74,7.017Z"
                fill='#fff'
            />
          </svg>
        </span>
        <a href="" target='_blank'>unityforchange@gmail.com</a>
      </div>
    </div>
  )
}

export default ConatctUsMap