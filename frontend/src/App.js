import React from 'react';
import './index.css';
import { Router /* Link*/ } from '@reach/router';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Home path="/" />
      <Dashboard path="dashboard" />
    </Router>
  );
}

export default App;
