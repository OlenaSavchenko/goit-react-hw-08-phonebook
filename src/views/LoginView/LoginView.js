import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import styles from './LoginView.module.css';

class LoginView extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  };

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
        <h1 className={styles.title}>Please, enter your email and password</h1>

        <form
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <TextField
            required
            id="email"
            label="Enter your email"
            defaultValue={email}
            variant="outlined"
            type="email"
            name="email"
            onChange={this.handleChange}
            margin="normal"
          />
          <TextField
            required
            id="password"
            label="Enter your password"
            defaultValue={password}
            variant="outlined"
            type="password"
            name="password"
            onChange={this.handleChange}
            margin="normal"
          />

          <Button type="submit" fullWidth variant="contained" color="primary">
            Go to Phonebook
          </Button>
        </form>
      </div>
    );
  }
}

export default LoginView;
