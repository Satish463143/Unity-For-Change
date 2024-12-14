import React from 'react'
import Banners from '../../common/Banners/Banners'
import './ContactUsPage.css'
import ConatctUsForm from '../../components/ConatctUs/ConatctUsForm/ConatctUsForm'
import ConatctUsMap from '../../components/ConatctUs/ConatctUsMap/ConatctUsMap'

const ContactUsPage = () => {
  return (
    <div>
      <hr />
        <Banners content='Have questions, feedback, or want to collaborate? Reach out to us through email, phone, or social media. We’re here to connect and support you!' title='CONTACT US'/>
        <div className="container">
            <div className="contact_grid">
                <ConatctUsForm/>
                <ConatctUsMap/>
            </div>
        </div>
    </div>
  )
}

export default ContactUsPage