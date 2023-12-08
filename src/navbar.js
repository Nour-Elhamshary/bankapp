import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/signin" style={styles.navLink}>
            Sign In
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/logIn" style={styles.navLink}>
            Log In
          </Link>
          
        </li>
        <li style={styles.navItem}>
          <Link to="/profile" style={styles.navLink}>
            Profile
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/loan" style={styles.navLink}>
            Loan
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.navLink}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: 'black',  // Background color
    padding: '10px',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
  },
  navItem: {
    marginRight: '15px',
    fontFamily: 'Times New Roman',  // Font family
    transition: 'color 0.3s',  // Add transition effect for color change
  },
  navLink: {
    color: 'white',  // Font color
    textDecoration: 'none',
    fontSize: '16px',
  },
  // Add hover styles
  navItemHover: {
    color: 'white',  // Font color on hover
  },
};

export default Navbar;
