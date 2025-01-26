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



// import React from 'react';
// import { Link } from 'react-router-dom'; // <-- Add this import

// const Header = ({ handleLogout, isLoggedIn }) => {
//   return (
//     <header>
//       <h1>Book-A-Meal</h1>
//       {isLoggedIn ? (
//         <button onClick={handleLogout}>Logout</button>
//       ) : (
//         <>
//           <Link to="/signup">
//             <button>Sign Up</button>
//           </Link>
//           <Link to="/">
//             <button>Login</button>
//           </Link>
//         </>
//       )}
//     </header>
//   );
// };

// export default Header;



// to handle my orders 

// src/components/Header.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = ({ handleLogout, isLoggedIn }) => {
//   return (
//     <header>
//       <h1>Food Delivery App</h1>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           {isLoggedIn && (
//             <>
//               <li>
//                 <Link to="/meal-list">Menu</Link>
//               </li>
//               <li>
//                 <Link to="/my-orders">My Orders</Link> {/* Link to My Orders */}
//               </li>
//               <li>
//                 <button onClick={handleLogout}>Logout</button>
//               </li>
//             </>
//           )}
//           {!isLoggedIn && (
//             <>
//               <li>
//                 <Link to="/signup">Sign Up</Link>
//               </li>
//               <li>
//                 <Link to="/login">Login</Link>
//               </li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;


  // WITH BOOSTSTRAP
// components/Header.js

// components/Header.js

// import React from 'react';

// const Header = ({ handleLogout, isLoggedIn }) => {
//   return (
//     <header className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">Book A Meal</a>
//         <div className="navbar-nav">
//           <a className="nav-link" href="/">Home</a>
//           {isLoggedIn ? (
//             <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
//           ) : (
//             <a className="nav-link" href="/login">Login</a>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



// testing testing


// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

// const Header = ({ handleLogout, isLoggedIn }) => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         {/* Logo */}
//         <Link className="navbar-brand" to="/">
//           MyApp
//         </Link>

//         {/* Toggle button for mobile view */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar links */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">
//                 About Us
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/team">
//                 Team
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/career">
//                 Career
//               </Link>
//             </li>

//             {/* Show Sign Up and Log In only if the user is not logged in */}
//             {!isLoggedIn && (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/signup">
//                     Sign Up
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/login">
//                     Log In
//                   </Link>
//                 </li>
//               </>
//             )}

//             {/* Show Log Out button if user is logged in */}
//             {isLoggedIn && (
//               <li className="nav-item">
//                 <button className="btn btn-danger" onClick={handleLogout}>
//                   Log Out
//                 </button>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;



// BUTTON LIKE EFFECTS


// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

// const Header = ({ handleLogout, isLoggedIn }) => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         {/* Logo */}
//         <Link className="navbar-brand" to="/">
//           MyApp
//         </Link>

//         {/* Navbar links */}
//         <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item mx-2">
//               <Link className="nav-link btn btn-outline-primary" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item mx-2">
//               <Link className="nav-link btn btn-outline-primary" to="/about">
//                 About Us
//               </Link>
//             </li>
//             <li className="nav-item mx-2">
//               <Link className="nav-link btn btn-outline-primary" to="/team">
//                 Team
//               </Link>
//             </li>
//             <li className="nav-item mx-2">
//               <Link className="nav-link btn btn-outline-primary" to="/career">
//                 Career
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Buttons for Sign Up, Log In, or Log Out (aligned to the right) */}
//         <div className="d-flex ms-auto">
//           {/* Show Sign Up and Log In only if the user is not logged in */}
//           {!isLoggedIn && (
//             <>
//               <Link className="btn btn-outline-primary mx-2" to="/signup">
//                 Sign Up
//               </Link>
//               <Link className="btn btn-outline-primary mx-2" to="/login">
//                 Log In
//               </Link>
//             </>
//           )}

//           {/* Show Log Out button if user is logged in */}
//           {isLoggedIn && (
//             <button className="btn btn-danger mx-2" onClick={handleLogout}>
//               Log Out
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;


// WITH MENU API

// src/components/Header.js


import React from 'react';
import { Link } from 'react-router-dom';

function Header({ handleLogout, isLoggedIn }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Our Company</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">Menu</Link> {/* Add Menu link */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/career">Career</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Today's Specials">Career</Link>
            </li>
          </ul>
          {/* Move the Sign Up and Log In buttons to the far right */}
          <ul className="navbar-nav ms-auto"> 
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Log In</Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button className="btn btn-danger" onClick={handleLogout}>Log Out</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

