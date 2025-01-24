// import React, { useState } from 'react';
// import { TextField, Button } from '@mui/material';
// import axios from 'axios';

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = () => {
//     axios.post('/api/signup', { email, password })
//       .then(response => {
//         console.log('User signed up:', response.data);
//       })
//       .catch(error => {
//         console.error('Error signing up:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <TextField
//         label="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         fullWidth
//       />
//       <TextField
//         label="Password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         fullWidth
//       />
//       <Button onClick={handleSignUp} variant="contained">Sign Up</Button>
//     </div>
//   );
// };

// export default SignUp;

// src/components/SignUp.js
import React, { useState } from 'react';

const SignUp = ({ handleSignUp }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && email && password) {
      handleSignUp({ username, email, password });
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="sign-up-form">
      <h2>Create a new account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
