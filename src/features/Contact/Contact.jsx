import React from 'react';
import './contact.sass';
import mail from '../../assets/images/envelope.svg'
import linkedin from '../../assets/images/linkedin.svg'
import phone from '../../assets/images/phone.svg'

function Contact({ theme }) {
  return (
    <>
      <div id="contact" className={`Container-contact ${theme}`}>
        <div className="Title">
          <h1>contactez-moi !</h1>
        </div>
        <div className='contact'>
          <div className='text-contact'>
            <p> N'hésitez pas à me contacter à me contacter via mon e-mail ou alors via LinkedIn.</p>
            <p>Mon numéro de téléphone se trouve aussi en dessous .</p>
            <span>&</span>
            <p>Merci de votre visite voyageur !</p>
          </div>
          <div className='Logo_contact'>
            <a href="mailto:Thalissondsv1@gmail.com">
              <img src={mail} alt="Email" />
            </a>
            <a href="https://www.linkedin.com/in/thalisson-da-silva-9a9844263/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="tel:+32492097794">
              <img src={phone} alt="Phone" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
