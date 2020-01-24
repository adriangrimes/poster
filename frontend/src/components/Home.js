import React from 'react';
import { navigate } from '@reach/router';
import ErrorBanner from './ErrorBanner';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', displayLoginError: false };

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
    if (this.state.username === 'admin' && this.state.password === '123456') {
      this.setState({ displayLoginError: false });
      navigate(`/dashboard`);
    } else {
      this.setState({ displayLoginError: true });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div className="centered">
        <div>Home</div>
        <div>
          <p>Log In</p>
          <form>
            <input
              name="username"
              type="text"
              placeholder="Username"
              onChange={this.handleInputChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.handleInputChange}
            />
            <button onClick={this.logIn}>Log In</button>
            <ErrorBanner displayError={this.state.displayLoginError} />
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
