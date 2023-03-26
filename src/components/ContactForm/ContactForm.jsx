import React from 'react';
import StyledContactForm from './ContactForm-styles';
import Location from '../../assets/svgs/location.svg';
import Phone from '../../assets/svgs/phone.svg';
import Clock from '../../assets/svgs/clock_contact.svg';

function ContactForm() {
  return (
    <StyledContactForm>
      <div className="contact__text">
        <p className="contact__title">Get In Touch With Us</p>
        <p className="contact__desc">
          For More Information About Our Product &amp; Services. Please feel free to drop us
          an email. Our staff always be there to help you out. do not hesitate!
        </p>
      </div>
      <div className="contact__container">
        <div className="contact__info">
          <div className="contact__info__separated address">
            <img src={Location} alt="Location icon" style={{ width: '22px', height: '28.18px' }} />
            <div className="img__text">
              <p>Address</p>
              <small>
                236 5th SE Avenue, New
                <br />
                York NY10000, United
                <br />
                States
              </small>
            </div>
          </div>
          <div className="contact__info__separated phone">
            <img src={Phone} alt="Phone icon" style={{ width: '22.27px', height: '22.27px' }} />
            <div className="img__text">
              <p>Phone</p>
              <small>
                Mobile: +(84)546-6789
                <br />
                Hotline: +(84)546-6789
              </small>
            </div>
          </div>
          <div className="contact__info__separated clock">
            <img src={Clock} alt="clock icon" style={{ width: '23px', height: '23px' }} />
            <div className="img__text">
              <p>Working Time</p>
              <small>
                Moday-Friday: 9:00 -
                <br />
                22:00
                <br />
                Saturday-Sunday: 9:00 -
                <br />
                21:00
              </small>
            </div>
          </div>
        </div>

        <div className="contact__form">
          <label htmlFor="name">
            <p> Your name </p>
            <input type="text" placeholder="Abc" className="contact__form__name" />
          </label>
          <label htmlFor="email">
            <p> Email address</p>
            <input type="email" placeholder="Abc@def.com" className="contact__form__email" />
          </label>
          <label htmlFor="subject">
            <p> Subject</p>
            <input type="text" placeholder="This is optional" className="contact__form__subject" />
          </label>
          <label htmlFor="message">
            <p>Message </p>
            <input
              type="text"
              placeholder="Hi! I 'd like to ask about"
              className="contact__form__message"
            />
          </label>
          <button>Submit</button>
        </div>
      </div>
    </StyledContactForm>
  );
}

export default ContactForm;
