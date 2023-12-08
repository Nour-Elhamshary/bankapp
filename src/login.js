import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Login button clicked');
    console.log('Username:', username);
    console.log('Password:', password);
    // Example: You might want to send a request to a server for authentication
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2>Login</h2>
        <form style={styles.form}>
          <div style={styles.inputContainer}>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={styles.input}
              />
            </label>
          </div>
          <div style={styles.inputContainer}>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
              />
            </label>
          </div>
          <div style={styles.buttonContainer}>
            <button type="button" onClick={handleLogin} style={styles.button}>
              Login
            </button>
          </div>
        </form>
        <p>
          Don't have an account? <Link to="/signin">Sign up</Link>
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
  formContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  form: {
    display: 'inline-block',
    textAlign: 'left',
  },
  inputContainer: {
    margin: '10px 0', // Add space between inputs
  },
  input: {
    backgroundColor: '#3498db', // Blue background color for inputs
    padding: '8px',
    borderRadius: '4px',
    color: 'white', // Text color for inputs
  },
  buttonContainer: {
    marginTop: '20px', // Add space above the button
  },
  button: {
    backgroundColor: '#3498db', // Blue background color for the button
    color: 'white', // Text color for the button
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Login;
