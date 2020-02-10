import React from 'react';

import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default function LogInOrSignUp(props) {
  return (
    <div className="login-signup-form border rounded pt-3 bg-light w-100">
      <Tabs defaultActiveKey="login" className="justify-content-center">
        <Tab eventKey="login" title="Log In">
          <LoginForm />
        </Tab>
        <Tab eventKey="signup" title="Sign Up">
          <SignUpForm />
        </Tab>
      </Tabs>
    </div>
  );
}
