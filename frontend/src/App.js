import React from 'react';
import './index.css';
import { Router /*, Link*/ } from '@reach/router';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <Router className="centered">
      <Home path="/" />
      <Dashboard path="dashboard" />
    </Router>
  );
}
