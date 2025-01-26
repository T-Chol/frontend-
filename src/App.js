// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//           ADD CONTENT HERE
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import './App.css'; // Assuming you already have this CSS file
// import Header from './components/Header';
// import Login from './components/Login';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

//   const handleLogin = () => {
//     setIsLoggedIn(true); // Set login state to true when the user logs in
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false); // Set login state to false when the user logs out
//   };

//   return (
//     <div className="App">
//       <Header handleLogout={handleLogout} isLoggedIn={isLoggedIn} />
      
//       {/* Render Login component if the user is not logged in */}
//       {!isLoggedIn ? (
//         <Login handleLogin={handleLogin} />
//       ) : (
//         <div>
//           <h2>Welcome to the Dashboard!</h2>
//           <p>You are logged in.</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import './App.css'; // Assuming you already have this CSS file
// import Header from './components/Header';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import Dashboard from './components/Dashboard';
// import MealList from './components/MealList';
// import OrderHistory from './components/OrderHistory';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
//   const [user, setUser] = useState(null); // State to manage logged-in user
//   const [meals, setMeals] = useState([
//     { id: 1, name: 'Beef with Rice', description: 'Delicious beef with steamed rice.', price: 10 },
//     { id: 2, name: 'Chicken with Fries', description: 'Crispy chicken with fries.', price: 8 },
//   ]);
//   const [orders, setOrders] = useState([
//     { mealName: 'Beef with Rice', quantity: 2, status: 'Delivered' },
//   ]);

//   const handleLogin = (userInfo) => {
//     setIsLoggedIn(true);
//     setUser(userInfo); // Simulate setting a user after login
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUser(null);
//   };

//   const handleSignUp = (newUser) => {
//     // In a real app, you'd send this data to an API.
//     setIsLoggedIn(true);
//     setUser({ ...newUser, role: 'user' }); // Assign a role after signup
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Header handleLogout={handleLogout} isLoggedIn={isLoggedIn} />
//         <Routes>
//           <Route path="/" element={isLoggedIn ? <Dashboard user={user} /> : <Login handleLogin={handleLogin} />} />
//           <Route path="/signup" element={<SignUp handleSignUp={handleSignUp} />} />
//           <Route path="/meal-list" element={<MealList meals={meals} />} />
//           <Route path="/order-history" element={<OrderHistory orders={orders} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;






// import React, { useState } from 'react';
// import './App.css';
// import Header from './components/Header';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import Dashboard from './components/Dashboard';
// import MealList from './components/MealList';
// import OrderHistory from './components/OrderHistory';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
//   const [user, setUser] = useState(null); // Initialize as null, which will be set after login
//   const [meals, setMeals] = useState([
//     { id: 1, name: 'Beef with Rice', description: 'Delicious beef with steamed rice.', price: 10 },
//     { id: 2, name: 'Chicken with Fries', description: 'Crispy chicken with fries.', price: 8 },
//   ]);
//   const [orders, setOrders] = useState([
//     { mealName: 'Beef with Rice', quantity: 2, status: 'Delivered' },
//   ]);

//   const handleLogin = (userInfo) => {
//     setIsLoggedIn(true);
//     setUser(userInfo); // Set the user state after login
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUser(null); // Reset user state when logging out
//   };

//   const handleSignUp = (newUser) => {
//     setIsLoggedIn(true);
//     setUser({ ...newUser, role: 'user' }); // Simulate a new user signup
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Header handleLogout={handleLogout} isLoggedIn={isLoggedIn} />
//         <Routes>
//           <Route
//             path="/"
//             element={isLoggedIn ? <Dashboard user={user} /> : <Login handleLogin={handleLogin} />}
//           />
//           <Route path="/signup" element={<SignUp handleSignUp={handleSignUp} />} />
//           <Route path="/meal-list" element={<MealList meals={meals} />} />
//           <Route path="/order-history" element={<OrderHistory orders={orders} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// TO HANDLE THE LANDING PAGE 





import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import MealList from './components/MealList';
import OrderHistory from './components/OrderHistory';
import LandingPage from './components/LandingPage'; // Import LandingPage component
import { Routes, Route } from 'react-router-dom'; // No need for BrowserRouter here

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
  const [user, setUser] = useState(null); // Initialize as null, which will be set after login
  const [meals, setMeals] = useState([
    { id: 1, name: 'Beef with Rice', description: 'Delicious beef with steamed rice.', price: 10 },
    { id: 2, name: 'Chicken with Fries', description: 'Crispy chicken with fries.', price: 8 },
  ]);
  const [orders, setOrders] = useState([
    { mealName: 'Beef with Rice', quantity: 2, status: 'Delivered' },
  ]);

  const handleLogin = (userInfo) => {
    setIsLoggedIn(true);
    setUser(userInfo); // Set the user state after login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null); // Reset user state when logging out
  };

  const handleSignUp = (newUser) => {
    setIsLoggedIn(true);
    setUser({ ...newUser, role: 'user' }); // Simulate a new user signup
  };

  return (
    <div className="App">
      <Header handleLogout={handleLogout} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Dashboard user={user} /> : <LandingPage />}
        />
        <Route path="/signup" element={<SignUp handleSignUp={handleSignUp} />} />
        <Route path="/meal-list" element={<MealList meals={meals} />} />
        <Route path="/order-history" element={<OrderHistory orders={orders} />} />
      </Routes>
    </div>
  );
}

export default App;




