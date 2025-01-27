import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import AboutUs from './components/About';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import MealList from './components/MealList';
import OrderHistory from './components/OrderHistory';
import LandingPage from './components/LandingPage';
import MyOrders from './components/MyOrders';
import Menu from './components/Menu'; // Import the Menu component
import ChefDashboard from './components/ChefDashboard'; // Import the ChefDashboard component
import SpecialDetail from './components/SpecialDetail'; // Import SpecialDetail component for today's special

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
  const [user, setUser] = useState(null); // Initialize as null, which will be set after login
  const [meals, setMeals] = useState([]); // State to store fetched meal items
  const [orders, setOrders] = useState([]); // State to store user's order list
  const [foods, setFoods] = useState([]); // State to store foods added by the chef
  const [specialOfTheDay, setSpecialOfTheDay] = useState(null); // State to store the day's special food
  const [signedUpUser, setSignedUpUser] = useState(null); // State to store signed-up user credentials

  const navigate = useNavigate(); // Initialize useNavigate hook

  // Fetch meals from API when the component mounts
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch('https://api.example.com/menu'); // Replace with your actual API
        const data = await response.json();
        setMeals(data); // Update the meals state with fetched data
        setSpecialOfTheDay(data[0]); // Set the special of the day as the first meal, adjust this logic as needed
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };
    fetchMeals();
  }, []);

  const handleLogin = (loginCredentials) => {
    // Check if login credentials match the signed-up credentials
    if (
      loginCredentials.username === signedUpUser?.username &&
      loginCredentials.password === signedUpUser?.password
    ) {
      setIsLoggedIn(true);
      setUser(signedUpUser); // Set the user state to the signed-up user
      navigate("/home"); // Redirect to home page after successful login
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null); // Reset user state when logging out
  };

  const handleSignUp = (newUser) => {
    setSignedUpUser(newUser); // Store signed-up user credentials
    setIsLoggedIn(true);
    setUser({ ...newUser, role: 'user' }); // Simulate a new user signup
    navigate("/login"); // Navigate to the login page after sign-up
  };

  // Handle adding food to the list (for chefs)
  const handleAddFood = (food) => {
    setFoods([...foods, food]); // Add new food item to the foods list
  };

  // Set the special of the day (for chefs)
  const handleSetSpecialOfTheDay = (foodId) => {
    const food = foods.find(f => f.id === foodId);
    setSpecialOfTheDay(food); // Set the selected food as the day's special
  };

  return (
    <div className="App">
      {/* Pass specialOfTheDay to the Header component */}
      <Header 
        handleLogout={handleLogout} 
        isLoggedIn={isLoggedIn} 
        specialOfTheDay={specialOfTheDay} // Passing today's special to the Header
      />
      <div className="container mt-4">
        <Routes>
          <Route
            path="/home"
            element={isLoggedIn ? <Dashboard user={user} /> : <LandingPage />}
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signup" element={<SignUp handleSignUp={handleSignUp} />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/meal-list" element={<MealList meals={meals} />} />
          <Route path="/order-history" element={<OrderHistory orders={orders} />} />
          <Route path="/my-orders" element={<MyOrders orders={orders} />} />
          <Route path="/menu" element={<Menu />} />

          {/* Route for Special of the Day */}
          <Route
            path="/special/:id"
            element={<SpecialDetail meals={meals} />}
          />

          {/* Route for Chef's Dashboard */}
          {user?.role === 'chef' && (
            <Route
              path="/chef-dashboard"
              element={<ChefDashboard handleAddFood={handleAddFood} handleSetSpecialOfTheDay={handleSetSpecialOfTheDay} foods={foods} />}
            />
          )}
        </Routes>
      </div>

      {/* Bottom section with Contact and Social Media Info */}
      <div className="container mt-5">
        <div className="row">
          {/* Location Information */}
          <div className="col-md-4 mb-4">
            <h4>Our Location</h4>
            <p>
              1234 Tea Avenue, Suite 100<br />
              Downtown City, State 12345<br />
              Country
            </p>
          </div>

          {/* Contact Information */}
          <div className="col-md-4 mb-4">
            <h4>Contact Us</h4>
            <p>
              <strong>Email:</strong> contact@ourcompany.com<br />
              <strong>Phone:</strong> (555) 123-4567<br />
              <strong>Fax:</strong> (555) 765-4321
            </p>
          </div>

          {/* Social Media Links with Icons */}
          <div className="col-md-4 mb-4">
            <h4>Follow Us</h4>
            <p>
              <a 
                href="https://www.instagram.com/ourcompany" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-primary mr-2"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a 
                href="https://www.facebook.com/ourcompany" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-primary"
              >
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
