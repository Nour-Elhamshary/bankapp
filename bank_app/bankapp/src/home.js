// Home.js
import React from 'react';


const Home = () => {
  return (
    <div>
      
      <div style={styles.homeContent}>
        <h2>Welcome to The Online Banking Application</h2>
        {/* Add additional content */}
      </div>
    </div>
  );
};

const styles = {
  homeContent: {
    padding: '20px',
    marginTop: '50px', // Adjust as needed
  },
};

export default Home;
