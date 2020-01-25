import React from 'react';
import { Link } from '@reach/router';
import LoginForm from './LoginForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let Home = () => (
  <>
    <Row className="justify-content-center">
      <Col
        xs={12}
        sm={8}
        md={6}
        className="border border-rounded shadow-lg p-3 mb-5 bg-light rounded"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col
        xs={12}
        sm={6}
        md={4}
        className="border border-rounded shadow-lg p-3 mb-5 bg-light rounded"
      >
        <LoginForm />
      </Col>
    </Row>
    <Row className="justify-content-center text-center">
      <Col xs={12} sm={6} md={4}>
        <Link to="help">Help</Link>
      </Col>
    </Row>
  </>
);

export default Home;
