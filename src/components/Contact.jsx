import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Contact.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Service ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log('Template ID:', process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    console.log('User ID:', process.env.REACT_APP_EMAILJS_USER_ID);

    emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="contact">
      <div className="container mt-5">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="user_name" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="user_email" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" className="form-control" required />
          </div>
          <button type="submit" className="btn btn-primary mt-3">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
