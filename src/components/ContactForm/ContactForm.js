import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import styles from './ContactForm.module.css';
import shortid from 'shortid';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    existingContactsName: PropTypes.array.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  generateId = () => {
    shortid.generate();
  };

  handleFormFill = () => {
    const { name, number } = this.state;
    const { existingContactsName } = this.props;
    const reviewContactsNames = existingContactsName.includes(
      name.toLowerCase(),
    );
    const emptyForm = !name || !number;
    const shortContactName = name.length < 3;

    if (reviewContactsNames) {
      return alert(`${name} is already in contacts`);
    }
    if (emptyForm) {
      return alert('Fill the form');
    }
    if (shortContactName) {
      return alert('Name should have more than 3 letters');
    }

    this.props.onSubmit({
      name,
      number,
      id: this.generateId(),
    });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.handleFormFill();
    this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <TextField
          required
          id="contact-name"
          label="Name"
          variant="filled"
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          className={styles.formLabel}
          autoComplete="off"
        />
        <TextField
          required
          id="contact-number"
          label="Number"
          variant="filled"
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          className={styles.formLabel}
          autoComplete="off"
        />
        <Fab color="primary" aria-label="add" type="submit">
          <AddIcon />
        </Fab>
      </form>
    );
  }
}

export default ContactForm;
