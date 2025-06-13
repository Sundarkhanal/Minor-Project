import React from 'react'
import './Contact.css';

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


    </div>
    </>
  )
}

export default Contact