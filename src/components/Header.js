import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'white', // semi-transparent background
    width: '100%',  // Take full width
    top: 0,
    position: 'fixed',  // Ensure the header stays on top
    zIndex: '1000' // Higher z-index to stay above the watermark
}}>

        <div style={{ display: 'flex', alignItems: 'center', fontSize: '1rem', color: 'black' }}>
  <NavLink to="/" exact>
    <img 
      src="/images/logo.png" 
      alt="Logo" 
      style={{ width: '80px', height: '80px', marginLeft: '20px',marginRight: '10px' }} // Adjust the size and spacing here
    />
  </NavLink>
  
  <h3>R. B. HORANGEE</h3>
</div>


        <nav>
         {/* Hamburger icon for mobile */}
<div className="nav-toggle" onClick={toggleMenu}>
<span style={{ fontSize: '3rem', color: '#000' }}>&#9776;</span>

</div>


          <ul style={{
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }} className={isMenuOpen ? 'nav__menu active' : 'nav__menu'}>
            <li style={{ marginRight: '20px' }}>
              {/* <NavLink 
                to="/" 
                exact 
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? '#ff4500' : '#000',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  position: 'relative',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  backgroundColor: isActive ? '#e6e6ea' : 'transparent',
                })} 
              >
                Home
                {({ isActive }) => isActive && (
                  <span style={{
                    display: 'block',
                    height: '3px',
                    width: '100%',
                    backgroundColor: '#FF0000',
                    position: 'absolute',
                    bottom: '-5px',
                    left: 0,
                    transition: 'width 0.3s ease',
                  }}></span>
                )}
              </NavLink> */}
            </li>

            <li style={{ marginRight: '20px' }}>
              <NavLink 
                to="/achievements" 
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'black' : '#000',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  position: 'relative',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  backgroundColor: isActive ? '#fcff82' : 'transparent',
                })} 
              >
                Achievements
                {({ isActive }) => isActive && (
                  <span style={{
                    display: 'block',
                    height: '3px',
                    width: '100%',
                    backgroundColor: '#FF0000',
                    position: 'absolute',
                    bottom: '-5px',
                    left: 0,
                    transition: 'width 0.3s ease',
                  }}></span>
                )}
              </NavLink>
            </li>

            <li style={{ marginRight: '20px' }}>
              <NavLink 
                to="/projects-done" 
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'black' : '#000',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  position: 'relative',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  backgroundColor: isActive ? '#7dd87d' : 'transparent',
                })} 
              >
                Events
                {({ isActive }) => isActive && (
                  <span style={{
                    display: 'block',
                    height: '3px',
                    width: '100%',
                    backgroundColor: '#FF0000',
                    position: 'absolute',
                    bottom: '-5px',
                    left: 0,
                    transition: 'width 0.3s ease',
                  }}></span>
                )}
              </NavLink>
            </li>

            <li style={{ marginRight: '20px' }}>
              <NavLink 
                to="/champions" 
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'black' : '#000',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  position: 'relative',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  backgroundColor: isActive ? '#fd5959' : 'transparent',
                })} 
              >
                Our Champions
                {({ isActive }) => isActive && (
                  <span style={{
                    display: 'block',
                    height: '3px',
                    width: '100%',
                    backgroundColor: '#FF0000',
                    position: 'absolute',
                    bottom: '-5px',
                    left: 0,
                    transition: 'width 0.3s ease',
                  }}></span>
                )}
              </NavLink>
            </li>

            <li style={{ marginRight: '20px' }}>
              <NavLink 
                to="/nationals" 
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'black' : '#000',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  position: 'relative',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  backgroundColor: isActive ? '#fcff82' : 'transparent',
                })} 
              >
                Nationals
                {({ isActive }) => isActive && (
                  <span style={{
                    display: 'block',
                    height: '3px',
                    width: '100%',
                    backgroundColor: '#FF0000',
                    position: 'absolute',
                    bottom: '-5px',
                    left: 0,
                    transition: 'width 0.3s ease',
                  }}></span>
                )}
              </NavLink>
            </li>

            <li style={{ marginRight: '20px' }}>
              <NavLink 
                to="/upcoming-projects" 
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'black' : '#000',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  position: 'relative',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  backgroundColor: isActive ? '#7dd87d' : 'transparent',
                })} 
              >
                Upcoming Events
                {({ isActive }) => isActive && (
                  <span style={{
                    display: 'block',
                    height: '3px',
                    width: '100%',
                    backgroundColor: '#FF0000',
                    position: 'absolute',
                    bottom: '-5px',
                    left: 0,
                    transition: 'width 0.3s ease',
                  }}></span>
                )}
              </NavLink>
            </li>

            <li style={{ marginRight: '20px' }}>
              <NavLink 
                to="/contact-info" 
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'black' : '#000',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  position: 'relative',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  backgroundColor: isActive ? '#fd5959' : 'transparent',
                })} 
              >
                Contact
                {({ isActive }) => isActive && (
                  <span style={{
                    display: 'block',
                    height: '3px',
                    width: '100%',
                    backgroundColor: '#FF0000',
                    position: 'absolute',
                    bottom: '-5px',
                    left: 0,
                    transition: 'width 0.3s ease',
                  }}></span>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 10,
        }} onClick={toggleMenu}></div>
      )}

      <style>
        {`
          /* Media query for responsiveness */
          @media screen and (max-width: 1150px) {
            .nav-toggle {
              display: block;
              z-index: 2000; /* Add this line to bring the hamburger menu to the front */
            }
            .nav__menu {
              position: fixed;
              top: 0;
              right: -100%;
              background-color: #f2f2f2;
              width: 70%;
              height: 100%;
              padding: 6rem 3rem 0;
              flex-direction: column;
              transition: right 0.4s;
              z-index: 15;
            }
            .nav__menu.active {
              right: 0;
            }
            .nav__menu li {
              margin-bottom: 2rem;
            }
          }
          
          /* Media query for larger screens */
          @media screen and (min-width: 1151px) {
            .nav-toggle {
              display: none; /* Hide hamburger on larger screens */
            }
          
            .nav__menu {
              position: static;
              display: flex;
              background-color: transparent;
              height: auto;
              padding: 0;
              flex-direction: row;
              right: 0;
            }
          
            .nav__menu li {
              margin-bottom: 0;
            }
          }
          
        `}
      </style>
    </>
  );
}

export default Header;
