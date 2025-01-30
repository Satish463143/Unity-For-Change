import React from 'react'
import Banners from '../../common/Banners/Banners'
import './ContactUsPage.css'
import ConatctUsForm from '../../components/ConatctUs/ConatctUsForm/ConatctUsForm'
import ConatctUsMap from '../../components/ConatctUs/ConatctUsMap/ConatctUsMap'
import {Helmet} from 'react-helmet-async';

const ContactUsPage = () => {
  return (
    <div>
    <Helmet>
            <title>Contact Us</title>
            <meta name="description" content="
              Have questions or want to collaborate? Contact Unity for Change today! Whether you're looking for volunteering opportunities, partnerships, or want to support our programs, we are here to help. Reach out to us via email, phone, or visit our office in Nepal to learn more about our initiatives. We value every supporter, donor, and changemaker who wants to be part of our mission. Fill out our contact form, and our team will get back to you as soon as possible. Let's work together to create a better world—get in touch now!
            " />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
          </Helmet>
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