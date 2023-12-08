import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navbar';
import Home from './home';
import SignIn from './signUp';
import Login from './login';
import LoanPage from './loan';
import AboutPage from './about'; // Updated import
import ProfilePage from './profile'; // Updated import

import { useState, useEffect } from 'react';

// Footer component
const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const isScrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

      setIsVisible(!isScrolledToBottom);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer style={{ ...styles.footer, opacity: isVisible ? 1 : 0 }}>
      <p style={styles.footerText}>BUE SENIORS: Adam, Mazen, Nour, Omar</p>
    </footer>
  );
};

// Styles for the footer
const styles = {
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    position: 'fixed', // Change to fixed for sticking to the bottom
    bottom: 0,
    width: '100%',
    transition: 'opacity 0.5s', // Add a smooth transition for opacity change
  },
  footerText: {
    margin: 0,
  },
};

// Styles for the main content area
const contentStyles = {
  minHeight: 'calc(100vh - 50px)', // Adjust the height based on your navbar's height
  position: 'relative',
};

// App component
const App = () => {
  return (
    <Router>
      <div style={contentStyles}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/loan" element={<LoanPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App