import React from 'react'
import './Contact.css';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
    <div className="contact">
      <div className="heading">
        <h1>Contact Us</h1>
      </div>
      <div className='contact-us'>
        <section className='sales-team'>
          <h2>Talk to a member of our <br />Sales Team</h2>
          <p>We'll help you find the right books and pricing for <br /> your business</p>
          <button className='sales-btn'>Contact Sales</button>
        </section>
        <section className='technical-support'>
          <h2>Product and Account <br /> Support</h2>
          <p>If you have any problem contact you our <br /> technical team</p>
          <button className='tech-btn'>Go to the help center</button>
        </section>
      </div>

      <section className='contact-form'>
        <div className="form-container">
          <form action="" className='contact-right'>
            <div className="contact-right-title">
              <h2>Get in Touch</h2>
            <hr />
            </div>
            <input type="text" name="" id="name" placeholder='Enter your name' className='contact-inputs' /> <br />
            <input type="email" name="" id="email" placeholder='Enter your email' className='contact-inputs'  /> <br />
            <input type="number" name="" id="number" placeholder='Enter your number' className='contact-inputs' /> <br />
            <button type="submit" className='btn-submit'>Submit</button>
          </form>
        </div>
        <div className="map-container">
          <h2>You can find us on Map also</h2>
          <iframe 
            title="Our Location on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4532356003424!2d85.30638687492291!3d27.703289125671382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1941220ba5af%3A0xb61c5db192250183!2sNew%20road%20book%20store!5e0!3m2!1sen!2snp!4v1749834367145!5m2!1sen!2snp" 
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
      </section>
    </div>
    <Footer />
    </>
  )
}

export default Contact