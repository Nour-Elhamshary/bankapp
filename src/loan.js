import React, { useState } from 'react';

const LoanPage = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleLoanAdvance = () => {
    // Implement your loan advancing logic here
    console.log('Loan Advance button clicked');
    console.log('Loan Amount:', loanAmount);
    console.log('Interest Rate:', interestRate);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    // Example: You might want to send a request to a server for loan processing
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2>Loan Advancing</h2>
        <form style={styles.form}>
          <div style={styles.inputContainer}>
            <label>
              Loan Amount:
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                style={styles.input}
              />
            </label>
          </div>
          <div style={styles.inputContainer}>
            <label>
              Interest Rate:
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                style={styles.input}
              />
            </label>
          </div>
          <div style={styles.inputContainer}>
            <label>
              Start Date:
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                style={styles.input}
              />
            </label>
          </div>
          <div style={styles.inputContainer}>
            <label>
              End Date:
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                style={styles.input}
              />
            </label>
          </div>
          <div style={styles.buttonContainer}>
            <button type="button" onClick={handleLoanAdvance} style={styles.button}>
              Advance Loan
            </button>
          </div>
        </form>
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

export default LoanPage;