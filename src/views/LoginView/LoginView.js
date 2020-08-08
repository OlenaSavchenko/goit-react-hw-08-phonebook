import React, { Component } from 'react';
import styles from './LoginView.module.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Login</h1>

        <form
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <label className={styles.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.label}>
            Login
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Enter</button>
        </form>
      </div>
    );
  }
}

export default LoginView;
