import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Achievements from './components/Achievements';
import ProjectsDone from './components/ProjectsDone';
import Champions from './components/champions';
import Nationals from './components/nationals';
import UpcomingProjects from './components/UpcomingProjects';
import ContactInfo from './components/ContactInfo';

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo1.png)`, // Watermark path
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundAttachment: 'fixed',
    opacity: '0.2', // Watermark transparency
    height: '100vh',
    width: '100vw',
    position: 'fixed', // Changed to fixed so it stays in place as you scroll
    top: '50',
    left: '0',
    zIndex: '-1', // Keeps it behind all content
  };
  

  return (
    <>
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Watermark background */}
      <div style={backgroundStyle}></div>
      
      {/* Main content */}
      <div style={{ zIndex: '1', position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Router>
        <Header />
        <div style={{ flex: '1' }}> {/* Main content grows to take available space */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/projects-done" element={<ProjectsDone />} />
            <Route path="/champions" element={<Champions />} />
            <Route path="/nationals" element={<Nationals />} />
            <Route path="/upcoming-projects" element={<UpcomingProjects />} />
            <Route path="/contact-info" element={<ContactInfo />} />
          </Routes>
        </div>
        
        <Footer />
      </Router>
      </div>
      
    </div>
    </>
  );
}

export default App;