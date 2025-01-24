import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    axios.post('/api/signup', { email, password })
      .then(response => {
        console.log('User signed up:', response.data);
      })
      .catch(error => {
        console.error('Error signing up:', error);
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <Button onClick={handleSignUp} variant="contained">Sign Up</Button>
    </div>
  );
};

export default SignUp;
