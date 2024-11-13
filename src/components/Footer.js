import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <style>
        {`
          .footer {
            background-color: black;
            color: #fff;
            padding: 20px 0;
            font-family: Arial, sans-serif;
            margin: 0;
          }

          .footer-container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 0 20px;
          }
           
          .footer-heading {
            font-size: 1.2rem;
            margin-bottom: 10px;
            text-transform: uppercase;
            text-align: left;
            margin-top: 20px
          }

          .footer-section {
            flex: 1;
            min-width: 200px;
            max-width: 250px;
          }
          

          .footer-list {
            list-style: none;
            padding: 0;
            text-align: left;
            margin-bottom: 8px;
            color: white;
          }

          .footer-list a {
            color: #fff;
            text-decoration: none;
            display: block;
            margin-bottom: 8px;;
          }



          .footer-social {
            display: flex;
            justify-content: space-between;
            max-width: 150px;
          }

          .footer-icon {
            color: #fff;
            text-decoration: none;
          }

          .footer-icon img {
            width: 30px;
            height: 30px;
          }

          .footer-copyright {
            text-align: center;
            padding: 10px 0;
            border-top: 1px solid #444;
            margin-top: 20px;
          }

          /* Responsive styles */
          @media screen and (max-width: 600px) {
            .footer-container {
              flex-direction: column;
              align-items: center;
            }
            
            .footer-section {
              margin: 10px 0;
              text-align: center;
            }

            .footer-heading {
              font-size: 1rem;
            }

            .footer-list {
              font-size: 0.9rem;
            }

            .footer-icon img {
              width: 25px;
              height: 25px;
            }
          }
        `}
      </style>

      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-section">
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '1rem', color: 'white' }}>
            <a href="/">
              <img 
                src="/images/logo.png" 
                alt="Logo" 
                style={{ width: '80px', height: '80px', marginLeft: '20px', marginRight: '10px', marginTop: '10px' }} 
              />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-heading"><strong>Quick Links</strong></div>
        <div >
          <ul className="footer-list">
            <li><a href="/">Home</a></li>
            <li><a href="/achievements">About</a></li>
            <li><a href="/projects-done">Events</a></li>
            <li><a href="/contact-info">Contact</a></li>
            
            
          </ul>
          
        </div>

        <div >
          <ul className="footer-list">
          <li><a href="/nationals">Nationals</a></li>
            <li><a href="/upcoming-projects">Upcoming Events</a></li>
            
            <li><a href="/champions">Our Champions</a></li>
            </ul>
        </div>

        {/* Address (Commented out)
        <div className="footer-section">
          <h3 className="footer-heading">Address & Contact</h3>
          <p className="footer-list">Shri Krishna Society Lane No - 03, Kharadi</p>
          <p className="footer-list">09767893261</p>
          <p className="footer-list">
            <a href="mailto:rbhorangee.dojang@gmail.com" className="footer-email">
              rbhorangee.dojang@gmail.com
            </a>
          </p>
        </div> */}

        {/* Social Media */}
        <div className="footer-section">
          <h3 className="footer-heading">Social Media</h3>
          <div className="footer-social">
            <a href="https://www.facebook.com/ravindra.bhandari.71/about_overview" className="footer-icon">
              <img src="/images/fb.png" alt="Facebook" />
            </a>
            <a href="https://www.facebook.com/ravindra.bhandari.71/about_overview" className="footer-icon">
              <img src="/images/insta.png" alt="instagram" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; 2024 Taekwondo Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
