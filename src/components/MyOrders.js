// src/components/MyOrders.js
// import React from 'react';

// const MyOrders = ({ orders }) => {
//   return (
//     <div className="my-orders">
//       <h2>My Orders</h2>
//       {orders.length === 0 ? (
//         <p>You have not placed any orders yet.</p>
//       ) : (
//         <ul>
//           {orders.map((order, index) => (
//             <li key={index} className="order-item">
//               <h3>{order.mealName}</h3>
//               <p>Quantity: {order.quantity}</p>
//               <p>Status: {order.status}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default MyOrders;


// my orders

// src/components/MyOrders.js
// src/components/MealList.js
// src/components/MyOrders.js
import React from 'react';

const MyOrders = ({ orders }) => {
  return (
    <div className="container mt-4">
      <h2>My Orders</h2>
      {orders.length > 0 ? (
        <ul className="list-group">
          {orders.map((order) => (
            <li key={order.id} className="list-group-item">
              <h5>{order.mealName}</h5>
              <p>Price: ${order.price}</p>
              <p>Date: {order.date}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default MyOrders;

