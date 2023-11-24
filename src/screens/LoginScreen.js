// import { useHistory } from 'react-router-dom';
import React from "react";
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';



const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    const inputStyle = {
        fontSize: '35px', // Adjust the font size as needed
    };
    const buttonstyle = {
        backgroundColor:'orange',
        fontSize: '35px', 
        color:'black',
    }
    // const history = useHistory();
    const navigate = useNavigate();
  
    const handleLogin = () => {
      // Implement your authentication logic here
      if (email === 'shreevardhanrao@gmail.com' && password === '111') {
        // Authentication successful, you can redirect or set a user session
        alert('Login successful!');
        
        navigate('/foodiedelight');

      } else {
        alert('Invalid email or password');
      }
    };
  
    return (
      <div className="login-container">
        <h2>Login page</h2>
        {/* {error && <p className="error-message">{error}</p>} */}
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
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button onClick={handleLogin}  style={buttonstyle}> Login</button>
      </div>
    );
  };

  export default LoginScreen;
