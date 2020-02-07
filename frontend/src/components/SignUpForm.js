import React from 'react';
// import { navigate } from '@reach/router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AlertDismissible from './AlertDismissible';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      displaySignupAlert: false,
      alertMessage: 'Sign up failed',
      alertVariant: 'danger'
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

  signUp = e => {
    e.preventDefault();
    if (
      this.state.email.length > 1 &&
      this.state.password.length > 1 &&
      this.state.password === this.state.confirmPassword
    ) {
      this.setState({
        alertMessage:
          'Sign up successful, check your email to complete your sign up.',
        displaySignupAlert: true,
        alertVariant: 'success'
      });
    } else {
      this.setState({
        alertMessage:
          'Please provide your email, and make sure that your passwords match',
        displaySignupAlert: true,
        alertVariant: 'danger'
      });
    }
  };

  closeAlert = () => {
    this.setState({ displaySignupAlert: false });
  };

  render() {
    return (
      <Form onSubmit={this.signUp}>
        <AlertDismissible
          variant={this.state.alertVariant}
          message={this.state.alertMessage}
          show={this.state.displaySignupAlert}
          handleClose={this.closeAlert}
        />
        <Form.Group controlId="formSignupEmail">
          <Form.Control
            name="email"
            type="text"
            placeholder="Email"
            autoComplete="username"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formSignupPassword">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formSignupConfirmPassword">
          <Form.Control
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            autoComplete="current-password"
            value={this.state.confirmPassword}
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Button
          variant="default"
          block
          type="submit"
          className="branded-gradient text-light"
        >
          Sign up
        </Button>
      </Form>
    );
  }
}
