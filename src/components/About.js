import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about">
      <header>
        <h1>About Us</h1>
        <h2>Discover who we are and wha t makes us exceptional</h2>
      </header>

      <section className="about-content">
        {/* Who We Are */}
        <div className="about-block">
          <img
            src="https://i.pinimg.com/736x/09/e8/ed/09e8eda853e4ed4b167c9024f288e5e9.jpg"
            alt="Our Mission"
          />
          <div className="description">
            <h2>Who We Are</h2>
            <p>
              Book-A-Meal is an innovative platform designed to bring convenience and quality to your dining experience. Whether you're ordering food for yourself or managing meals as a caterer, we've got you covered.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="about-block">
          <img
            src="https://via.placeholder.com/400"
            alt="Our Mission"
          />
          <div className="description">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide a seamless experience for customers to order meals effortlessly while empowering caterers with tools to manage their services efficiently.
            </p>
            <ul>
              <li>Efficient meal and order management</li>
              <li>Personalized menus for customers</li>
              <li>Enhanced customer satisfaction</li>
            </ul>
          </div>
        </div>

        {/* Explore More Button */}
        <div>
          <a href="/menu" className="explore-button">Explore Our Menu</a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
