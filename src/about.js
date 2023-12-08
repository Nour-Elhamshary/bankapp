import React from 'react';

const AboutPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.aboutContainer}>
        <h2>About Us</h2>
        <p>
          Welcome to Our Bank, where we strive to provide top-notch banking services to our valued customers.
        </p>
        <p>
          Our mission is to make banking easy, secure, and convenient for you. Whether you're managing your
          accounts, applying for loans, or seeking financial advice, we are here to assist you every step of the way.
        </p>
        <p>
          With a commitment to excellence, we prioritize the security of your financial information and offer
          innovative solutions to meet your banking needs.
        </p>
        <p>
          Thank you for choosing Our Bank. We look forward to serving you and ensuring a seamless banking experience.
        </p>
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
  aboutContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
};

export default AboutPage;
