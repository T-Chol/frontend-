// src/components/MealList.js
import React from 'react';
import MealCard from './MealCard';

const MealList = ({ meals }) => {
  return (
    <div className="meal-list">
      {meals.map((meal) => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </div>
  );
};

export default MealList;
