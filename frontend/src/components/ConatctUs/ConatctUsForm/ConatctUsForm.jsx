import React from 'react'
import './ConatctUsForm.css'

const ConatctUsForm = () => {
    const handleForm = ()=>{
      
    }
  return (
    <div className='contact_from'>
        <div className="how_it_start_title" >
            <h1 style={{fontSize:'35px', marginTop:'0px'}}>send us a message</h1>
        </div>
        <div>
            <form action="" onSubmit={handleForm}>
                <input name='fullname' type="text" placeholder='Full name' required /><br />
                <input name='email' type="email" placeholder='Email' required /><br />
                <input name='number' type="number" placeholder='Number' required /><br />
                <textarea name="message" type='text' id="" placeholder='Message'></textarea>
                <input type="submit" value='Send' name='contact_send' />
            </form>
        </div>
    </div>
  )
}

export default ConatctUsForm