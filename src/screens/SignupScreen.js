import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import Hungryhub from './hungryhub'; // Adjust the path based on your file structure


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  // const [error, setError] = useState('');

  const inputStyle = {
    fontSize: '18px',
  };

  const buttonStyle = {
    fontSize: '18px',
    padding: '10px 20px',
    backgroundColor: 'orange',
    color: 'white',
  };

  const navigate = useNavigate();

  const handleSignup = () => {
    if (name && email && number && number.length === 10) {
      
      alert('Signup successful! Redirect to HungryHub');
      navigate('/hungryhub'); // Redirect to the 'HungryHub' page after a successful signup
    } else {
      alert('Please fill in all fields, or make sure the phone number is 10 digits.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign up !</h2>
      {/* {error && <p className="error-message">{error}</p>} */}
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          style={inputStyle}
        />
      </div>
      <button onClick={handleSignup} style={buttonStyle}>
        Signup
      </button>
    </div>
  );
};

export default Signup;
