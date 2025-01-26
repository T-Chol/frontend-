// src/components/Header.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// // import './Header.css'; // Optional: add some basic styling

// const Header = () => {
//   return (
//     <header className="header">
//       <nav className="nav">
//         <Link to="/" className="logo">Book-A-Meal</Link>
//         <ul className="nav-links">
//           <li><Link to="/login">Login</Link></li>
//           <li><Link to="/signup">Sign Up</Link></li>
//           <li><Link to="/dashboard">Dashboard</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// import React from 'react';

// const Header = ({ handleLogout, isLoggedIn }) => {
//   return (
//     <header className="App-header">
//       <h1>Book-A-Meal</h1>
//       {/* Display logout button if the user is logged in */}
//       {isLoggedIn && (
//         <button onClick={handleLogout} className="logout-button">
//           Log Out
//         </button>
//         // STARTS HERE THE ADDED FEATURE
//          ) ( 
//     <>
//       <Link to="/signup">
//         <button>Sign Up</button>
//       </Link>
//       <Link to="/">
//         <button>Login</button>
//       </Link>
//     </>



//       )}
//     </header>
//   );
// };

// export default Header;



import React from 'react';
import { Link } from 'react-router-dom'; // <-- Add this import

const Header = ({ handleLogout, isLoggedIn }) => {
  return (
    <header>
      <h1>Book-A-Meal</h1>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          <Link to="/">
            <button>Login</button>
          </Link>
        </>
      )}
    </header>
  );
};

export default Header;
