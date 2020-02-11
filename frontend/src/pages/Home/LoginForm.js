import React from 'react';
import { navigate } from '@reach/router';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AlertDismissible from './../../components/AlertDismissible';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'demo@demo.com',
      password: 'demo',
      displayLoginError: false
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  logIn = e => {
    e.preventDefault();
    if (
      this.state.email === 'demo@demo.com' &&
      this.state.password === 'demo'
    ) {
      this.setState({ displayLoginError: false });
      navigate(`/scheduler`);
    } else {
      this.setState({ displayLoginError: true });
    }
  };

  closeAlert = () => {
    this.setState({ displayLoginError: false });
  };

  render() {
    return (
      <Form onSubmit={this.logIn}>
        <AlertDismissible
          variant="danger"
          message="Email or password is incorrect"
          show={this.state.displayLoginError}
          handleClose={this.closeAlert}
        />
        <Form.Group controlId="formLoginEmail">
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            aria-label="Log in email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formLoginPassword">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            aria-label="Log in password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Button
          variant="default"
          block
          type="submit"
          className="branded-gradient text-light"
        >
          Log in
        </Button>
      </Form>
    );
  }
}
