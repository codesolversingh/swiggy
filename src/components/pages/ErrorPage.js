import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Oops! Something went wrong.</h1>
      <h2 style={styles.paragraph}>
        {err.status}, {err.statusText}
      </h2>
      <Link to="/" style={styles.link}>
        <button style={styles.button}>Go back to homepage</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif', // Choose an appropriate font
  },
  heading: {
    fontSize: '2em',
    color: '#FF5733', // Orange color
  },
  paragraph: {
    fontSize: '1.2em',
    color: '#555',
    marginBottom: '20px',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    backgroundColor: '#4CAF50', // Green color
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default ErrorPage;
