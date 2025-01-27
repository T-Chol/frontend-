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
            src="https://i.pinimg.com/236x/c0/42/b9/c042b98be24dbc5df09894270a7508c0.jpg"
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
          <img
            src="https://i.pinimg.com/736x/65/46/8d/65468d94a94a535c71f3c18a563022aa.jpg"
            alt="Our Mission"
          />
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
