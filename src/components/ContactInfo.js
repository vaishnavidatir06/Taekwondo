import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactInfo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });  
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_afz0t3f', // Your EmailJS Service ID
      'template_7rckomt', // Your EmailJS Template ID
      formData, // Contains name, email, and message
      '3y3SoeA2PlMgxX95k' // Your EmailJS Public Key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSent(true);
      
      // Clear form data after success
      setFormData({ name: '', email: '', number: '', message: '' });

      // Hide success message and reset form after 2 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 2000);
    })
    .catch((error) => {
      console.log('FAILED...', error);
      setError('Failed to send message. Please try again.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="page">
      <div className="container">
        
        {/* Contact Details + Map */}
        <div className="contact-details-map">
          {/* Contact Details */}
          <div className="info">
            <h2 className="heading">Contact Us</h2>
            <p className="contact-detail">
              <a href="mailto:rbhorangee.dojang@gmail.com">
                rbhorangee.dojang@gmail.com
              </a><br />
              <strong>Phone:</strong> 09767893261<br />
              <strong>Address:</strong> Shri Krishna Society Lane No - 03, Kharadi<br />
            </p>
            <div>
              <h3 className="heading">Reach us on social media:</h3>
              <div className="social-links">
                <a href="https://www.facebook.com/ravindra.bhandari.71/about_overview" target="_blank" rel="noopener noreferrer" className="link">
                  <img src="/images/fb.png" alt="Facebook" className="logo-image" />
                </a>
              </div>
            </div>
          </div>

          {/* Location Map */}
          <div className="info">
            <h3 className="heading">Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15129.622781390868!2d73.90884953630375!3d18.555739799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c15e3392e9c7%3A0xe4f81c44ef93bac8!2sShree%20Krishna%20Housing%20Society!5e0!3m2!1sen!2sin!4v1727677658758!5m2!1sen!2sin"
              className="map-placeholder"
              allowFullScreen
              loading="lazy"
              title="Map"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="form-section">
          <h2 className="heading">Enquiry Form</h2>
          {isSent ? (
            <p>Your message has been sent successfully!</p>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="number">Number:</label>
                <input
                  id="number"
                  type="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {error && <p className="error">{error}</p>}
            </form>
          )}
        </div>
      </div>

      {/* Inline CSS for layout and responsiveness */}
      <style>
        {`
          * {
            box-sizing: border-box;
          }
          .page {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 100px;
          }
          .container {
            width: 90%; 
            max-width: 1200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 40px;
            background-color: #fff; 
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
            border-radius: 8px;
          }
          .form-section {
            width: 100%; /* Make the form take full width */
            justify-content: center;
            margin-top: 50px;
          }
          .contact-form {
            display: flex;
            flex-direction: column; /* Stack form elements vertically */
            align-items: center;
            gap: 20px;
            width: 100%; /* Make form full-width */
          }
          .contact-form div {
            width: 100%; /* Make each input full width */
          }
      
          .contact-form label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            text-align: left;
          }

          .contact-form input,
    .contact-form textarea {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 16px;
    }

    .contact-form button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .contact-form button:hover {
      background-color: #0056b3;
    }
    
          .contact-details-map {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-top: 40px;
          }
          .info {
            width: 48%;
            text-align: left;
          }
          .map-placeholder {
            width: 100%;
            height: 300px;
            border-radius: 8px;
            border: 2px solid #ddd;
            object-fit: cover;
          }
          .heading {
            margin-top: 70px
            color: #333; 
            margin-bottom: 15px;
          }
          .contact-detail {
            line-height: 1.6;
            color: #555; 
            text-align: left; 
          }
          .social-links {
            margin-top: 10px;
            display: flex;
            gap: 10px;
          }
          .link {
            color: #007bff; 
            text-decoration: none;
          }
          .logo-image {
            width: 30px;  
            height: 30px;
          }

          /* Responsive Styles for smaller screens */
          @media (max-width: 768px) {
            .contact-details-map {
              flex-direction: column;
              align-items: center;
            }
            .info {
              width: 100%;
              text-align: center;
            }
            .map-placeholder {
              height: 250px; 

              .form-section {
                width: 90%; /* Adjust width for smaller screens */
              }  
            }
          }
        `}
      </style>
    </div>
  );
}

export default ContactInfo;
