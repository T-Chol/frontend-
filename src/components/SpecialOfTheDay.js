// src/components/SpecialOfTheDay.js

import React from 'react';
import { Link } from 'react-router-dom';

const SpecialOfTheDay = ({ special }) => {
  return (
    <div className="special-of-the-day">
      <h2>Today's Special</h2>
      <h3>{special.name}</h3>
      <p>{special.description}</p>
      {/* Link to the special meal details page */}
      <Link to={`/special/${special.id}`} className="btn btn-primary">
        View Details
      </Link>
    </div>
  );
};

export default SpecialOfTheDay;

