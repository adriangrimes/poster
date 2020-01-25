import React from 'react';
import { navigate } from '@reach/router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AlertDismissible from './AlertDismissible';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'admin@admin.com',
      password: '123456',
      displayLoginError: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.logIn = this.logIn.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  logIn(e) {
    e.preventDefault();
    if (
      this.state.email === 'admin@admin.com' &&
      this.state.password === '123456'
    ) {
      this.setState({ displayLoginError: false });
      navigate(`/dashboard`);
    } else {
      this.setState({ displayLoginError: true });
    }
  }

  closeAlert() {
    this.setState({ displayLoginError: false });
  }

  render() {
    return (
      <>
        <h4 className="text-center">Log In</h4>
        <Form onSubmit={this.logIn}>
          <AlertDismissible
            variant="danger"
            message="Email or password is incorrect"
            show={this.state.displayLoginError}
            handleClose={this.closeAlert}
          />
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="text"
              placeholder="Email"
              autoComplete="username"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Log in
          </Button>
        </Form>
      </>
    );
  }
}
