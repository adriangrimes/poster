import React from 'react';
import { navigate } from '@reach/router';
import ErrorBanner from './ErrorBanner';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'admin',
      password: '123456',
      displayLoginError: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.logIn = this.logIn.bind(this);
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
    if (this.state.username === 'admin' && this.state.password === '123456') {
      this.setState({ displayLoginError: false });
      navigate(`/dashboard`);
    } else {
      this.setState({ displayLoginError: true });
    }
  }

  render() {
    return (
      <div>
        <p>Log In</p>
        <form onSubmit={this.logIn}>
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <input type="submit" value="Log In" />
          <ErrorBanner displayError={this.state.displayLoginError} />
        </form>
      </div>
    );
  }
}
