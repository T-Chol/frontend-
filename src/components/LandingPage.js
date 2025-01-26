import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

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
        <img
          src="/assets/LandingPageBook.jpeg" 
          alt="Welcome to Book A Meal"
          className="hero-image"
        />
        <button className="book-now-btn" onClick={handleBookNow}>
          Book Now
        </button>
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
