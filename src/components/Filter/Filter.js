import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <>
    <h3 className={styles.title}>Find contacts by name</h3>
    <TextField
      type="search"
      value={value}
      onChange={onChange}
      className={styles.input}
      id="filter"
      label="Search by name..."
      variant="filled"
    />
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
