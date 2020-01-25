import React from 'react';
import './index.css';
import { Router /*, Link*/ } from '@reach/router';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Help from './components/Help';
import Container from 'react-bootstrap/Container';

export default function App() {
  return (
    <>
      <NavBar />
      <Container fluid={true} className="py-5">
        <Router>
          <Home path="/" />
          <Dashboard path="dashboard" />
          <Help path="help" />
        </Router>
      </Container>
    </>
  );
}
