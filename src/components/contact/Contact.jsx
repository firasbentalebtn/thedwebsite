import React from "react";
import "./contact.css";
import { MdOutlineEmail } from 'react-icons/md'
import { BsTelegram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_53m076f', 'template_s8w29aw', form.current, 'ywlws3P5F0dqvtMCE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return <section id="contact">
    <h5>Get In touch </h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>contact@theerineum.com</h5>
          <a href="mailto:dummyegator@gmail.com" target='_blank' rel="noreferrer">Send a Message </a>
        </article>
        <article className="contact__option">
          <BsTelegram className="contact__option-icon" />
          <h4>Telegram</h4>
          <a href="https://m.me/firas.bt.5" target='_blank' rel="noreferrer">Send a Message </a>
        </article>
        <article className="contact__option">
          <FaDiscord className="contact__option-icon" />
          <h4>Discord</h4>

          <a href="https://api.whatsapp.com/send?phone=+21627773500 " target='_blank' rel="noreferrer">Send a Message </a>
        </article>
      </div>
      {/**form starts */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="your full name" required />
        <input type="email" name="email" placeholder="your email" required />
        <textarea name="Message" rows="7" placeholder="your message"></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>;
};

export default Contact;
