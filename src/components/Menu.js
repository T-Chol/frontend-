// src/components/Menu.js
import React, { useState, useEffect } from 'react';

function Menu() {
  const [menuItems, setMenuItems] = useState([]); // To store fetched menu items
  const [loading, setLoading] = useState(true); // To track the loading state
  const [error, setError] = useState(null); // To store any errors

  useEffect(() => {
    // Fetch menu data from the free API
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken');
        const data = await response.json();
        setMenuItems(data.meals); // Assuming the response contains a 'meals' array
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch menu items');
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Menu</h2>
      <div className="row">
        {menuItems.map((item) => (
          <div className="col-md-4" key={item.idMeal}>
            <div className="card mb-4">
              <img src={item.strMealThumb} alt={item.strMeal} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{item.strMeal}</h5>
                <a href={`https://www.themealdb.com/meal/${item.idMeal}`} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  View Recipe
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
