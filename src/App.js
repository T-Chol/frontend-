import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './components/Header';
// import MealList from './components/MealList';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import Dashboard from './components/Dashboard';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Switch>
//         <Route path="/login" component={Login} />
//         <Route path="/signup" component={SignUp} />
//         <Route path="/dashboard" component={Dashboard} />
//         <Route path="/" component={MealList} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;
