import React, { useState } from 'react';
import './ConatctUsForm.css';
import { addNewInquiry } from '../../../api/api';

const ConatctUsForm = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    number: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const response = await addNewInquiry(formData);
        alert(response.message);
        setFormData({
          full_name: '',
          email: '',
          number: '',
          message: '',
        });
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='contact_from'>
      <div className="how_it_start_title contact_title">
        <h1>send us a message</h1>
      </div>
      <div>
        <form onSubmit={handleForm}>
          <input
            name='full_name'
            type="text"
            placeholder='Full name'
            value={formData.full_name}
            onChange={handleInputChange}
            required
          /><br />
          <input
            name='email'
            type="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleInputChange}
            required
          /><br />
          <input
            name='number'
            type="number"
            placeholder='Number'
            value={formData.number}
            onChange={handleInputChange}
            required
          /><br />
          <textarea
            name="message"
            type='text'
            placeholder='Message'
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea><br />
          <input type="submit" value='Send' name='contact_send' />
        </form>
      </div>
    </div>
  );
};

export default ConatctUsForm;
