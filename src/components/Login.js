// import React, { useState } from 'react';

// const Login = ({ handleLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You would typically authenticate the user here.
//     // For now, let's just simulate a login.
//     if (email && password) {
//       handleLogin(); // Call the parent function to set isLoggedIn to true
//     } else {
//       alert('Please enter both email and password');
//     }
//   };

//   return (
//     <div className="login-form">
//       <h2>Login to Book-A-Meal</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="login-button">Log In</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



// src/components/Login.js
import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you'd have an API request here, but for now, let's simulate a successful login:
    handleLogin({ name: username, role: 'user' }); // Simulate a user object after login
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
