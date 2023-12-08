import React from 'react';

const profile = () => {
  return (
    <div style={styles.container}>
      <div style={styles.profileContainer}>
        <h2>User Profile</h2>
        <div style={styles.profileInfo}>
          <div>
            <strong>Username:</strong> JohnDoe
          </div>
          <div>
            <strong>Full Name:</strong> John Doe
          </div>
          <div>
            <strong>Email:</strong> john.doe@example.com
          </div>
          <div>
            <strong>Account Number:</strong> 123456789
          </div>
          {/* Add more user information as needed */}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#3498db',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  profileInfo: {
    marginTop: '20px',
  },
};

export default profile;
