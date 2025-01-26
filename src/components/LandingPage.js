// import React from 'react';
// import { Link } from 'react-router-dom';
// import './LandingPage.css'; // Optional: for styling the landing page

// const LandingPage = () => {
//   return (
//     <div className="landing-container">
//       <header className="landing-header">
//         <h1>Welcome to Book-A-Meal</h1>
//         <p>Your one-stop app to order delicious meals!</p>
//       </header>

//       <section className="landing-content">
//         <p>Browse the menu, select your meal, and enjoy a hassle-free food experience!</p>

//         <div className="cta-buttons">
//           <Link to="/signup">
//             <button className="cta-button">Sign Up</button>
//           </Link>
//           <Link to="/login">
//             <button className="cta-button">Log In</button>
//           </Link>
//         </div>
//       </section>

//       <footer className="landing-footer">
//         <p>© 2025 Book-A-Meal. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;



// TO HANDLE THE BOOK A MEAL BUTTON 




// src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // For styling

const LandingPage = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/meal-list'); // Navigate to the meal list page
  };

  const specialMeals = [
    { id: 1, name: 'Beef with Rice', description: 'Delicious beef with steamed rice.' },
    { id: 2, name: 'Chicken with Fries', description: 'Crispy chicken with fries.' },
  ];

  return (
    <div className="landing-page">
      <div className="background-image">
        <div className="overlay">
          <h1>Welcome to Book A Meal</h1>
          <p>Your time,Your Meal,Your Way</p>
          <p>Tired of waiting to place your order after sitting at a restaurant? with Book a Meal, you can book your meal right from your device while waiting to be seated or as soon as you arrive</p>
          <button className="book-now-btn" onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </div>

      <div className="special-meals">
        <h2>Special Meals of the Day</h2>
        <div className="meal-list">
          {specialMeals.map((meal) => (
            <div className="meal-card" key={meal.id}>
              <h3>{meal.name}</h3>
              <p>{meal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
