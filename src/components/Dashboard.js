import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h2>Welcome, {user ? user.name : 'Guest'}!</h2>
      {user && user.role === 'admin' ? (
        <div>
          <Link to="/admin/meals">Manage Meals</Link>
          <Link to="/admin/orders">View Orders</Link>
        </div>
      ) : (
        <div>
          <Link to="/orders">My Orders</Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
