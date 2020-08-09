import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import styles from './RegisterView.module.css';

class RegisterView extends Component {
  static propTypes = {
    onRegister: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    email: '',
    password: '',
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1 className={styles.title}>Registration</h1>

        <form
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <TextField
            required
            id="name"
            label="Enter your name"
            defaultValue={name}
            variant="outlined"
            type="text"
            name="name"
            onChange={this.handleChange}
            margin="normal"
          />

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
            label="Enter password"
            defaultValue={password}
            variant="outlined"
            type="password"
            name="password"
            onChange={this.handleChange}
            margin="normal"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Create account
          </Button>
        </form>
      </div>
    );
  }
}

export default RegisterView;
