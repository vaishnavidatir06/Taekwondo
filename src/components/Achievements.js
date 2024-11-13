import React from 'react';

function Achievements() {
  return (
    <>
      <div className="container">
        <h2 className="heading">Meet our Master, Ravindra B. Bhandari</h2>

        <div className="grid-container">
          {/* Collage of Images */}
          <div className="image-container">
            <img src="/images/master3.jpeg" alt="Master 3" className="image" />
          </div>

          {/* Master's Information */}
          <div className="info">
            <ul className="list">
              <strong>Taekwondo Qualification:</strong>
              <li><strong>5th Dan Black Belt (South Korea)</strong></li>
              <li>President & Technical Director R. B. Horangee Taekwondo Do-Jang</li>
              <li>Taekwondo Headquarter Kukkiwon Award Winner for great Work in Taekwondo</li>
              <li>International Taekwondo Player, National Taekwondo Referee (T.F.I)</li>
              <li>Hapkkido 2ND Dan Black Belt</li>
              <li>Qualified International Hapkkido Master Degree Course (South Korea)</li>
              <li>1st Dan Yongmoodo Black Belt (South Korea)</li>
              <li><strong>4th Dan Black Belt (South Korea)</strong></li>
              <li>Taekwondo Headquarter Kukkiwon Award Winner for great Work in Taekwondo</li>
              <li>National Taekwondo Player</li>
              <li>National Taekwondo Referee (T.F.I)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Inline CSS for responsiveness */}
      <style>
        {`
          * {
            box-sizing: border-box;
          }

          /* Base Styles */
          .container {
            background-color: #f0f0f0;
            padding: 40px 20px;
            color: black;
            text-align: center;   
            margin: 0 auto;
            margin-top: 100px;
            width: 100%; 
          }

          .heading {
            font-size: 2.5rem;
            margin-bottom: 20px;
          }

          .grid-container {
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            flex-wrap: wrap;
          }

          .image-container {
            flex: 1;
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
            max-width: 500px;
          }

          .image {
            width: 100%;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
          }

          .info {
            flex: 1;
            text-align: left;
            font-size: 1.2rem;
            line-height: 1.6;
            padding-left: 20px;
          }

          .list {
            list-style-type: none;
            padding-left: 0;
          }

          /* Responsive Styles for smaller screens */
          @media (max-width: 768px) {
            .grid-container {
              flex-direction: column;
              text-align: center;
              padding: 0 10px; /* Reduce padding for smaller screens */
            }

            .image-container {
              max-width: 300px;
            }

            .info {
              text-align: center;
              padding-left: 0;
              padding-top: 20px; /* Add space above for better layout */
            }

            .heading {
              font-size: 2rem;
              margin-top: 50px; /* Reduce top margin for smaller screens */
            }
          }
        `}
      </style>
    </>
  );
}

export default Achievements;
