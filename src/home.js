// Home.js
import React from 'react';

const Home = () => {
  return (
    <div style={styles.homeContainer}>
      <div style={styles.homeContent}>
        <h2 style={styles.welcomeText}>Welcome to The Online Banking Application</h2>
        {/* Add additional content */}
      </div>
    </div>
  );
};

const styles = {
  homeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Full height of the viewport
    backgroundColor: '#3498db', // Nice blue background color
  },
  homeContent: {
    padding: '20px',
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: '3em', // Adjust the font size as needed
    color: '#ffffff', // White text color
  },
};

export default Home;
