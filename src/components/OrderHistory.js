// src/components/OrderHistory.js
import React from 'react';

const OrderHistory = ({ orders }) => {
  return (
    <div className="order-history">
      <h2>Your Order History</h2>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              <p>Meal: {order.mealName}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Status: {order.status}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders yet.</p>
      )}
    </div>
  );
};

export default OrderHistory;
