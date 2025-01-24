// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// const Dashboard = () => {
//   const { user } = useSelector((state) => state.auth);

//   return (
//     <div>
//       <h2>Welcome, {user ? user.name : 'Guest'}!</h2>
//       {user && user.role === 'admin' ? (
//         <div>
//           <Link to="/admin/meals">Manage Meals</Link>
//           <Link to="/admin/orders">View Orders</Link>
//         </div>
//       ) : (
//         <div>
//           <Link to="/orders">My Orders</Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
// src/components/Dashboard.js


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Dashboard = ({ user }) => {
//   return (
//     <div className="dashboard">
//       <h2>Welcome, {user.name}</h2>
//       {user.role === 'admin' ? (
//         <div>
//           <Link to="/manage-meals">Manage Meals</Link>
//           <Link to="/orders">View Orders</Link>
//         </div>
//       ) : (
//         <div>
//           <Link to="/meal-list">View Meals</Link>
//           <Link to="/order-history">Order History</Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;


// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ user }) => {
  // Check if the user object is available before accessing its properties
  if (!user) {
    return <div>Loading...</div>; // Or you can redirect to login
  }

  return (
    <div className="dashboard">
      <h2>Welcome, {user.name || 'Guest'}</h2>
      {user.role === 'admin' ? (
        <div>
          <Link to="/manage-meals">Manage Meals</Link>
          <Link to="/orders">View Orders</Link>
        </div>
      ) : (
        <div>
          <Link to="/meal-list">View Meals</Link>
          <Link to="/order-history">Order History</Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
