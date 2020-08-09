import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ contact, onDeleteContact }) => {
  const { name, number } = contact;

  return (
    <div className={styles.box}>
      <ListItemText className={styles.item} primary={name} secondary={number} />
      <br />
      <IconButton
        className={styles.button}
        aria-label="delete"
        type="button"
        onClick={onDeleteContact}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
