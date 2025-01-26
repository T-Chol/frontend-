// src/components/SpecialDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';

const SpecialDetail = ({ meals }) => {
  const { id } = useParams(); // Get the id from the URL
  const special = meals.find(meal => meal.id === parseInt(id)); // Find the special meal based on the id

  if (!special) {
    return <p>Special not found!</p>;
  }

  return (
    <div className="special-detail">
      <h2>{special.name}</h2>
      <p>{special.description}</p>
      <p>Price: ${special.price}</p>
      <p>Ingredients: {special.ingredients.join(', ')}</p>
      {/* Add any additional details here */}
    </div>
  );
};

export default SpecialDetail;

