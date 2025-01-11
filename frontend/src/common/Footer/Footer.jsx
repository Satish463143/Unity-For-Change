import React, { isValidElement } from 'react'
import './Footer.css'
import logo from '../../assets/Images/logo.png'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer_bg'>
        <div className='container'>
            <div className="footer">
                <div className="logo_section">
                    <img src={logo} alt="Unity For Change" />
                    <h3>Unity For Change</h3>
                    <p>Lazimpat, Kathmandu</p>
                </div>
                <div className="social_links">
                    <h3>Social Links</h3>
                    <li>
                        <span>
                            <svg
                                id="Icons"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                width='24px'
                                height='24px'
                                aria-labelledby="iconEmailTitle"
                                >
                                <title id="iconEmailTitle">Email Icon</title>
                                <path
                                    d="M20,2H4A4,4,0,0,0,0,6V18a4,4,0,0,0,4,4H20a4,4,0,0,0,4-4V6A4,4,0,0,0,20,2Zm2,16a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H20a2,2,0,0,1,2,2Z"
                                    fill='#D62E3F'
                                />
                                <path
                                    d="M19.74,7.017a1,1,0,0,0-1.413-.067L13.35,11.479a2.005,2.005,0,0,1-2.7,0L5.673,6.95A1,1,0,1,0,4.327,8.43l3.957,3.6L4.328,15.62A1,1,0,1,0,5.672,17.1l4.143-3.76a3.937,3.937,0,0,0,4.37,0l4.143,3.76a1,1,0,1,0,1.344-1.48l-3.955-3.591,3.956-3.6A1,1,0,0,0,19.74,7.017Z"
                                    fill='#D62E3F'
                                />
                            </svg>
                        </span>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=u4change2019@gmail.com" target='_blank'>u4change2019@gmail.com</a>
                    </li>
                    <li>
                        <span>
                            <svg
                                id="icon"
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
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
                                    fill='#D62E3F'
                                />
                                <path
                                    d="M28,13H26a7.0078,7.0078,0,0,0-7-7V4A9.01,9.01,0,0,1,28,13Z"
                                    transform="translate(0)"
                                    fill='#D62E3F'
                                />
                                <path
                                    d="M20.3333,21.4823l2.24-2.24a2.1667,2.1667,0,0,1,2.3368-.48l2.7281,1.0913A2.1666,2.1666,0,0,1,29,21.8659v4.9613a2.1668,2.1668,0,0,1-2.2843,2.1686C7.5938,27.8054,3.7321,11.6114,3.0146,5.4079A2.162,2.162,0,0,1,5.1692,3H10.042a2.1666,2.1666,0,0,1,2.0117,1.362L13.145,7.09a2.1666,2.1666,0,0,1-.48,2.3367l-2.24,2.24S11.6667,20.399,20.3333,21.4823Z"
                                    transform="translate(0)"
                                    fill='#D62E3F'
                                />
                                <rect
                                    className="cls-1"
                                    data-name="&lt;Transparent Rectangle&gt;"
                                    width="32"
                                    height="32"
                                />
                            </svg>
                        </span>
                        <a href="tel:980233 4130" target='_blank'>(980)-233 4130</a>
                    </li>
                    <li>
                        <span>
                        <svg
                            data-name="Google alt"
                            width='24px'
                            height='24px'
                            id="Google_alt"
                            viewBox="0 0 420 419.997"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#D62E3F"
                            >
                            <title>Google Alt Icon</title>
                            <path d="M388.818,146.28a24.3,24.3,0,1,1-24.295-24.295A24.3,24.3,0,0,1,388.818,146.28ZM466,256l-0.005.306-1.38,88.105a121.58,121.58,0,0,1-120.2,120.2L256,466l-0.306-.006-88.105-1.376a121.586,121.586,0,0,1-120.206-120.2L46,256l0.006-.306,1.376-88.108a121.59,121.59,0,0,1,120.206-120.2L256,46l0.306,0.006,88.105,1.376a121.584,121.584,0,0,1,120.2,120.2Zm-39.112,0-1.374-87.8A82.654,82.654,0,0,0,343.8,86.485L256,85.114l-87.8,1.371A82.658,82.658,0,0,0,86.484,168.2L85.113,256l1.371,87.8A82.655,82.655,0,0,0,168.2,425.515l87.8,1.371,87.8-1.371A82.651,82.651,0,0,0,425.514,343.8Zm-63.048,0A107.841,107.841,0,1,1,256,148.159,107.962,107.962,0,0,1,363.84,256Zm-39.107,0A68.734,68.734,0,1,0,256,324.734,68.812,68.812,0,0,0,324.732,256Z" transform="translate(-46 -46.001)"/>
                        </svg>
                        </span>
                        <a href="https://www.instagram.com/unity_4_change?igsh=ZHNkZjB2Nm1xejR1" target='_blank'>Instagram</a>
                    </li>
                    <li>
                        <span>
                            <svg
                                height="24px"
                                widths='24px'
                                style={{
                                    fillRule: 'evenodd',
                                    clipRule: 'evenodd',
                                    strokeLinejoin: 'round',
                                    strokeMiterlimit: 2,
                                }}
                                version="1.1"
                                viewBox="0 0 512 512"
                                width="100%"
                                xmlSpace="preserve"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsSerif="http://www.serif.com/"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                fill="#D62E3F"
                                >
                                <path
                                    d="M501.303,132.765c-5.887,-22.03 -23.235,-39.377 -45.265,-45.265c-39.932,-10.7 -200.038,-10.7 -200.038,-10.7c0,0 -160.107,0 -200.039,10.7c-22.026,5.888 -39.377,23.235 -45.264,45.265c-10.697,39.928 -10.697,123.238 -10.697,123.238c0,0 0,83.308 10.697,123.232c5.887,22.03 23.238,39.382 45.264,45.269c39.932,10.696 200.039,10.696 200.039,10.696c0,0 160.106,0 200.038,-10.696c22.03,-5.887 39.378,-23.239 45.265,-45.269c10.696,-39.924 10.696,-123.232 10.696,-123.232c0,0 0,-83.31 -10.696,-123.238Zm-296.506,200.039l0,-153.603l133.019,76.802l-133.019,76.801Z"
                                    style={{ fillRule: 'nonzero' }}
                                />
                                </svg>
                        </span>
                        <a href="https://youtube.com/@unityforchange3252?feature=shared" target='_blank'>Youtube</a>
                    </li>
                    <li>
                        <span>
                        <svg viewBox="0 0 448 512" fill="#D62E3F" width='24px' height='24px' xmlns="http://www.w3.org/2000/svg">
                            <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                        </svg>
                        </span>
                        <a href="https://m.facebook.com/@lgbtiqgroup/?hr=1" target='_blank'>TikTok</a>
                    </li>
                    <li>
                        <span>
                            <svg
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#D62E3F"
                                width="24"
                                height="24"
                                >
                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                            </svg>
                        </span>
                        <a href="https://m.facebook.com/@lgbtiqgroup/?hr=1" target='_blank'>Facebook</a>
                    </li>
                </div>                
                <div className="menu_link">
                    <h3>Quick Links</h3>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/what_we_do'>Thematic Areas</Link>
                    </li>
                    <li>
                        <Link to='/who_we_are'>Who We Are</Link>
                    </li>
                    <li>
                        <Link to='/activites'>Our Projects</Link>
                    </li>
                </div>
                <div className="menu_link menu_link_2">
                    <li>
                        <Link to='/resources'>Resouces</Link>
                    </li>
                    <li>
                        <Link to='/gallery'>Gallery</Link>
                    </li>
                    <li>
                        <Link to='/contact_us'>Contact Us</Link>
                    </li>
                    <li>
                        <Link to='/donate'>Make a Donation</Link>
                    </li>
                </div>
            </div>
            <hr />
            <div className="copyright_section">
                <p>© 2024 | Unity for Change - Empowering LBT, Powering Pride </p>
                <p>Design and Developed by <a href="" target='_blank' >Bleeding Tech</a></p>
            </div>           
            
        </div>
    </div>
  )
}

export default Footer