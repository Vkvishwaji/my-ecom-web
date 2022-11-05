import React from 'react'

const Contact = () => {
  return (
    <>
      <h3 className='h3 text-center'>Contact Page</h3>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754.7051676452422!2d77.1177006!3d28.40687285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d219331939509%3A0x5b6a49ea246b0e1d!2sInternational%20Tech%20Park%2C%20Haryana%20122102!5e0!3m2!1sen!2sin!4v1667297636393!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container text-center">
      <div className='contact-form'>
        <form action="" method="post" className='contact-input'>
           
          <input type="text" id='input-c' name='username' placeholder='Enter User Name' autoComplete='off' required/>
           
          <input type="email" id='input-c' name='email' placeholder='Enter Email' autoComplete='off' required/>
          <textarea name="massage" id='input-c' placeholder='Enter your Massage' required autoComplete='off' cols="30" rows="10"></textarea>
          <input type="submit" className="btn-sub" value='Send'/>
        </form>
        </div>
      </div>
    </>
  )
}

export default Contact