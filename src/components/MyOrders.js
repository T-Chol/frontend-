// src/components/MyOrders.js
import React from 'react';

const MyOrders = ({ orders }) => {
  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>You have not placed any orders yet.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index} className="order-item">
              <h3>{order.mealName}</h3>
              <p>Quantity: {order.quantity}</p>
              <p>Status: {order.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrders;


