import React from 'react';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';

function Homepage() {
  
  
  return (
    <>
      <div className="container">
        {/* Left: Text and Button */}
        <div className="text-container">
          <div className="heading-box"> {/* Box for the heading */}
            <h1 className="heading">Master Ravindra Bhandari</h1>
          </div>
          <p className="description">
            Empowering students with discipline, focus, and strength through Taekwondo. 
            Join us in our journey towards excellence.
          </p>
          <Link to="/contact-info" className="button">
            Let's Learn
          </Link>
        </div>

        {/* Right: Image */}
        <div className="image-container">
          <img
            src="/images/master1.png" // Replace with the actual path to your image
            alt="Master"
            className="master-image"
          />
        </div>
      </div>

      <div className="bio-container">
  {/* Left: Biography Info */}
  <div className="bio-info">
    <div className="bio-box">
      <h2 className="bio-heading">Master Ravindra Bhandari</h2>
      <ul className="bio-details">
        
        <li><strong>Mail:</strong><a href="mailto:rbhorangee.dojang@gmail.com" >
              rbhorangee.dojang@gmail.com
            </a></li>
        <li><strong>Phone:</strong>09767893261</li>
        <li><strong>Address:</strong> Shri Krishna Society Lane No - 03, Kharadi</li>
        <li><strong>Nationality:</strong> Indian</li>
      </ul>
    </div>
  </div>

  {/* Right: Biography Description */}
  <div className="bio-description">
      <p>
        <Typical
          steps={[
            "Master Ravindra Bhandari set about his taekwondo journey at the age of 21 in the year 2001 under the guidance of Late.  Master Balkrishna Bhandari .Due to his dedication and commitment to the art the practice for over 16 years till now. He secured his black belt in 2001 and started coaching with just one student.Over the years his passion,enthusiasm and dedication lead to an expansive growth , now he is coaching over 1000 students.",
            // 2000, // Delay before next line
            // "With dedication to the art, he has practiced for over 16 years, earning his first black belt in 2001.",
            // 2000,
            // "Master Ravi started coaching in 2001 with just one student.",
            // 2000,
            // "Over the years, his passion and commitment have led to impressive growth, now coaching over 1,000 students.",
            // 2000,
            // "He has been associated with St. Felix School since 2016.",
          ]}
          loop={1} // Set to 1 to play the typing effect once (can set to `Infinity` for looping)
          wrapper="span"
        />
      </p>
    </div>
  
</div>

<div className="student-achievements">
        <h2>Student Achievements</h2>
        <h3>Under his coaching, the following black belt students have been trained:</h3>
        <div className="achievement-grid">
          <div className="achievement-box">
            <h4 className="achievement-number">6+</h4>
            <p>4th Dan Students</p>
          </div>
          <div className="achievement-box">
            <h4 className="achievement-number">12+</h4>
            <p>3rd Dan Students</p>
          </div>
          <div className="achievement-box">
            <h4 className="achievement-number">15+</h4>
            <p>2nd Dan Students</p>
          </div>
          <div className="achievement-box">
            <h4 className="achievement-number">1500+</h4>
            <p>1st Dan Students</p>
          </div>
        </div>
      </div>

      <div className="kukkiwon-box">
        <h2>Kukkiwon Headquarter</h2>
        <p>
        Kukkiwon, the world headquarters of Taekwondo, came to India in 1976 and is now associated with over 200 countries globally. In 2018, Master Ravi became a member of Kukkiwon after successfully passing the examination. He has been guided and trained under approximately 5 masters at Kukkiwon, receiving certification under his own name in 2021.
        </p>
      </div>

 {/* Recognition and Awards Section */}
 <div className="recognition-section">
          <h2>Recognition and Awards</h2>
          <p>
            Master Ravi's contributions to Taekwondo have been recognized both nationally and internationally. He has received:
          </p>
          <ul className="awards-list">
            <li>2 National Best Coach Awards</li>
            <li>2 International Best Coach Awards</li>
          </ul>

          {/* Certificates Photo Section */}
          <div className="certificates-gallery">
            <h3>Certificates</h3>
            <div className="certificate-images">
              <img src="/images/certificates/img1.jfif" alt="Certificate 1" className="certificate-img" />
              <img src="/images/certificates/img2.jfif" alt="Certificate 2" className="certificate-img" />
              <img src="/images/certificates/img3.jfif" alt="Certificate 3" className="certificate-img" />
              <img src="/images/certificates/img4.jfif" alt="Certificate 4" className="certificate-img" />
              {/* Add more images as necessary */}
            </div>
          </div>
          </div>

          <div class="news-ticker">
  <div class="news-content">
    <a href="/projects-done" class="news-item"> Latest News: Our services are now available globally!</a>
    <a href="/projects-done" class="news-item">news</a>
    <a href="/projects-done" class="news-item"> news</a>
  </div>
</div>


      {/* Inline CSS for responsiveness */}
      <style>
  {`
    
    * {
    box-sizing: border-box;
  }
  
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      height: 100vh;
      max-width: 1200px;
      margin: 0 auto;
      margin-top: 100px;
      flex-wrap: wrap; /* Makes the layout responsive */
      width: 100%; /* Ensure it expands to full width */
      box-sizing: border-box; /* Include padding in width/height */
    }

    .image-container {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 500px; /* Adjust the width for desktop */
      margin-bottom: 20px;
      width: 100%; /* Full width for smaller screens */
    }

    .master-image {
      width: 100%;
      height: auto;
      border-radius: 10px;
    }

    .text-container {
      flex: 1;
      padding: 20px;
      text-align: center;
    }

    // .heading-box {
    //   background-color: #f2f2f2;
    //   padding: 10px;
    //   border-radius: 10px;
    //   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    //   margin-bottom: 20px;
    // }

    .heading {
      font-size: 2.4rem;
      font-family: "Brush Script MT", cursive;
      color: #333;
    }

    .description {
      font-size: 1.6rem;
      margin-bottom: 30px;
      line-height: 1.6;
      font-family: "Brush Script MT", cursive;
    }

    .button {
      padding: 12px 30px;
      background-color: #000;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      font-size: 1.1rem;
      font-weight: bold;
      display: inline-block;
      margin-top: 10px;
    }

    /* Responsive styles for mobile devices */
    @media only screen and (max-width: 768px) {
      .container {
        flex-direction: column; /* Stack the image and text vertically */
        text-align: center;
        height: auto; /* Remove fixed height to avoid overflow */
        padding: 0 10px; /* Reduce padding for smaller screens */
      }

      .image-container {
        max-width: 300px; /* Adjust image width for tablets/small screens */
        margin-bottom: 20px;
      }

      .heading-box {
        margin-bottom: 15px;
      }

      .heading {
        font-size: 2rem;
      }

      .description {
        font-size: 1.4rem;
      }

      .button {
        font-size: 1rem;
        padding: 10px 20px;
      }
    }

    /* Further adjustments for very small mobile screens */
    @media only screen and (max-width: 600px) {
      .container {
        padding: 0; /* Remove padding for ultra-small screens */
      }

      .image-container {
        max-width: 250px; /* Further reduce image size */
      }

      .heading {
        font-size: 1.8rem;
      }

      .description {
        font-size: 1.2rem;
      }

      .button {
        font-size: 0.9rem;
        padding: 8px 16px;
      }
    }
   

    .bio-container {
      display: flex;
      justify-content: space-between; /* Adjusts spacing between left and right */
      padding: 20px; /* Adjust the value for more or less space on sides */
      max-width: 1200px; /* Optional: set a maximum width for the container */
      margin: 0 auto; /* Centers the container */
    }
    
    
    .bio-info {
      flex: 1;
      background-color: #f8f398; /* Adjust the background to your preference */
      padding: 20px;
      border-radius: 10px;
      color: black;
      max-width: 350px; /* Adjust based on screen */
      font-family: "Brush Script MT", cursive;
      font-size: 1.4rem;
      
    }
    
    .bio-heading {
      font-size: 2rem;
      margin-bottom: 15px;
      color: black;
      font-family: "Brush Script MT", cursive;
    }

    .heading-box1 {
      background-color: #ff9a3c;
      padding: 2px;
      border-radius: 10px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
      font-family: "Brush Script MT", cursive;
      font-size: 1.6rem;
      align-items: center;
      min-width: 150px; /* Set a minimum width (adjust as needed) */
      max-width: 300px; /* Set a maximum width (adjust as needed) */
      text-align: center; /* Center the text if desired */
    }
    
    .bio-details {
      list-style: none;
      padding: 0;
    }
    
    .bio-details li {
      margin-bottom: 10px;
      font-size: 1.1rem;
    }
    
    .bio-description {
      flex: 2;
      padding: 20px;
      text-align: left;
      font-size: 2rem;
      top: 20px;
      font-weight: bold;
    }


    
    .bio-description h2 {
      font-size: 2rem;
      margin-bottom: 15px;
      text-align: center;
    }
    
    // .bio-description p {
      font-size: 1.3rem;
      line-height: 1.6;
      margin-bottom: 20px;
      font-family: "Brush Script MT", cursive;
      text-align: left;
    // }
    
    .bio-description p span {
      font-size: 1.3rem;
      line-height: 1.6;
      margin-bottom: 20px;
      font-family: "Brush Script MT", cursive;
      text-align: left;
      border-right: 2px solid orange; /* Blinking caret */
      animation: blink-caret .75s step-end infinite;
    }
    
    @keyframes blink-caret {
      from, to { border-color: transparent; }
      50% { border-color: orange; }
    }
    
    
    @media (max-width: 768px) {
      .bio-container {
        flex-direction: column;
        text-align: center;
      }
    
      .bio-info {
        margin-bottom: 20px;
        max-width: 100%;
      }
    
      .bio-description {
        padding: 0;
      }
    }

    .student-achievements {
      text-align: center;
      margin: 40px 0;
      font-weight: bold;
    }

    .student-achievements h2 {
      font-size: 2rem;
      margin-bottom: 20px;
      font-family: "Brush Script MT", cursive;
    }

    .student-achievements h3 {
      font-size: 1.3rem;
      font-family: "Brush Script MT", cursive;
    }

    .achievement-grid {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }

    .achievement-box {
      flex: 1;
      margin: 10px;
      text-align: center;
      max-width: 150px;
    }

    .achievement-number {
      font-size: 3rem;
      font-weight: bold;
      color: #f96d00; /* Yellow color */
    }

    .achievement-box p {
      font-size: 1.3rem;
      color: #333;
      font-family: "Brush Script MT", cursive;
    }

    /* Responsive styles */
    @media (max-width: 768px) {
      .achievement-grid {
        flex-direction: column;
      }

      .achievement-box {
        margin-bottom: 20px;
        max-width: 100%;
      }
    }
    
    /* Kukkiwon Connection green box */
        .kukkiwon-box {
          background-color: #e0f7e0; /* Light green background */
          border-radius: 10px;
          padding: 20px;
          margin: 40px 50px;
          font-family: "Brush Script MT", cursive;
          font-size: 1.3rem;
          
        }

        .kukkiwon-box h2 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 10px;
          text-align: left;
          margin-left: 20px
        }

        .kukkiwon-box p {
          margin: 0;
          line-height: 1.6;
          color: #333;
          text-align: left;
          font-size: 1.2rem;
        }

        /* Recognition and Awards section */
        .recognition-section {
          background-color: #cadefc;
          padding: 20px;
          margin: 40px 50px;
          border-radius: 10px;
        }

        .recognition-section h2 {
          font-size: 2rem;
          margin-bottom: 10px;
          font-family: "Brush Script MT", cursive;
          text-align: left;
        }

        .recognition-section p, .awards-list {
          font-size: 1.3rem;
          font-family: "Brush Script MT", cursive;
          color: #333;
          text-align: left;
        }

        .awards-list {
          list-style-type: none;
          padding: 0;
        }

        .awards-list li {
          margin-bottom: 10px;
        }

        /* Certificates Gallery */
        .certificates-gallery {
          margin-top: 30px;
        }

        .certificates-gallery h3 {
          font-size: 1.8rem;
          margin-bottom: 20px;
          font-family: "Brush Script MT", cursive;
          text-align: left;
        }

        .certificate-images {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }

        .certificate-img {
          max-width: 200px;
          margin: 10px;
          border-radius: 8px;
          border: 2px solid #ddd;
        }

        /* Responsive styles */
        @media (max-width: 768px) {
          .certificate-images {
            justify-content: center;
          }

          .certificate-img {
            max-width: 100%;
            margin: 10px 0;
          }
        }

        
        .news-ticker {
          position: fixed; /* Fixes the ticker to the bottom */
          bottom: 0; /* Positions it at the bottom */
          left: 0; /* Aligns it to the left */
          right: 0; /* Aligns it to the right */
          background-color: #f2f2f2; /* Background color */
          padding: 10px 0; /* Padding for spacing */
          box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow for a nice effect */
          z-index: 1000; /* Ensures it appears above other elements */
        }
        
        .news-content {
          display: flex; /* Allows items to be in a row */
          animation: scroll 15s linear infinite; /* Smooth scrolling effect */
          white-space: nowrap; /* Keep content in one line */
        }
        
        .news-item {
         
          color: black; /* Link color */
          white-space: nowrap; /* Prevents text from wrapping */
          margin-right: 50px;
          font-size: 16px;
          font-weight: bold;
          color: black;
          text-decoration: none; /* Remove underline from links */
          transition: color 0.3s; /* Smooth color transition */
          
          font-family: "Brush Script MT", cursive;
        }
        
        .news-item:hover {
          color: #ffcccc;
          text-decoration: underline; /* Underline on hover */
        }
        

        /* Scrolling animation */
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        /* Medium screens (tablets, small laptops) */
@media (max-width: 768px) {
  .news-ticker {
    padding: 8px;
  }
  .news-item {
    font-size: 14px; /* Reduce font size slightly */
    margin-right: 30px; /* Less margin between items */
  }
  .news-content {
    animation: scroll 20s linear infinite; /* Slow down the scroll speed */
  }
}

/* Small screens (mobile devices) */
@media (max-width: 480px) {
  .news-ticker {
    padding: 6px;
  }
  .news-item {
    font-size: 12px; /* Smaller font size for better readability */
    margin-right: 15px; /* Less space between items */
  }
  .news-content {
    animation: scroll 25s linear infinite; /* Further slow down the scroll speed */
  }
        

  `}
</style>

    </>
  );
}

export default Homepage;
