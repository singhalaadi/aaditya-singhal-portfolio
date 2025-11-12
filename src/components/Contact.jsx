import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'singhal26aaditya@gmail.com',
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p>
                <a href="mailto:singhal26aaditya@gmail.com">
                  singhal26aaditya@gmail.com
                </a>
              </p>
            </div>
            
            <div className="contact-item">
              <h3>Location</h3>
              <p>Greater Noida, India</p>
            </div>
            
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/aaditya-singhal26/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/singhalaadi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                GitHub
              </a>
              <a 
                href="https://www.instagram.com/_aaditya_singhal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                Instagram
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              
              {status === 'success' && <p className="status-message success">Message sent successfully!</p>}
              {status === 'error' && <p className="status-message error">Failed to send message. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
