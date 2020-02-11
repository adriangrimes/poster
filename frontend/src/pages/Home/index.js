import React from 'react';
import { Link } from '@reach/router';

import LogInOrSignUp from './LogInOrSignUp';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home(props) {
  return (
    <div className="home-wrapper faded-branded-gradient py-4">
      <header>
        <Row className="site-banner branded-gradient no-gutters mt-2 mb-5 p-3 ">
          <Col>
            <h1 className="site-banner-text text-center text-light m-0">
              Poster
            </h1>
          </Col>
        </Row>
      </header>
      <main>
        <Row className="no-gutters justify-content-center p-4">
          <Col
            xs={12}
            sm={8}
            md={6}
            lg={5}
            xl={4}
            className="mb-5 p-4 border-secondary border-top border-bottom text-center bg-light"
          >
            <div>
              Poster is a simple social media planning app for micro businesses.
              Take control of your social marketing and grow your business with
              our easy tools.
            </div>
          </Col>
        </Row>
        <Row className="no-gutters mx-0">
          <Col xs={12} className="d-flex justify-content-center mb-3">
            <LogInOrSignUp />
          </Col>
        </Row>
      </main>
      <footer>
        <Row className="no-gutters mx-0 justify-content-center text-center">
          <Link to="help">Help</Link>
        </Row>
        <Row className="no-gutters mx-0 justify-content-center text-center text-muted py-5">
          <small>
            built by&nbsp;
            <a
              href="https://www.linkedin.com/in/grimesadrian"
              target="_blank"
              rel="noopener noreferrer"
            >
              adrian
            </a>
          </small>
        </Row>
        <img className="brand-logo" src="assets/icons/logogrey.svg" alt="" />
      </footer>
    </div>
  );
}
