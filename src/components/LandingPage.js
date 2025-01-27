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
        
      </div>
      <button className="book-now-btn" onClick={handleBookNow}>
        Book Now
      </button>
      <div className="special-meals">
        <h2>Discover Today's Special: A Unique Dining Experience With Fast Service</h2>
        <div className="meal-list">
          {specialMeals.map((meal) => (
            <div className="meal-card" key={meal.id}>
              <h3>{meal.name}</h3>
              <p>{meal.description}</p>
            </div>
          ))}
        </div>
      </div>
      <hr/>
      <section class="testimonials">
        <h2>What Our Customers Are Saying</h2>
        <div class="testimonial-container">
          <div class="testimonial">
            <p class="testimonial-text">"The best meal I've ever had! The flavors were exquisite and the service was top-notch!"</p>
            <div class="rating">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <p class="customer-name">Gavin Lee</p>
          </div>

          <div class="testimonial">
            <p class="testimonial-text">"A fantastic experience! The ambiance and food were incredible. Highly recommend!"</p>
            <div class="rating">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <p class="customer-name">Samantha L</p>
          </div>

          <div class="testimonial">
            <p class="testimonial-text">"Delicious food and friendly staff. I'll definitely be coming back for more!"</p>
            <div class="rating">
              <span>⭐⭐⭐⭐</span>
            </div>
            <p class="customer-name">Jimmy Y</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
