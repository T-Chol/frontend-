// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import App from './App';
// import './styles/global.css';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );



// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the correct API for React 18
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './styles/global.css';

// Create a root element for React 18+ rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use the `render` method on the created root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
