import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import styles from './UserMenu.module.css';

const UserMenu = ({ name, onLogout }) => (
  <div className={styles.container}>
    <span className={styles.name}>{name} </span>
    <Button
      type="button"
      onClick={onLogout}
      variant="contained"
      color="primary"
    >
      Logout
    </Button>
  </div>
);

UserMenu.propTypes = {
  name: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default UserMenu;
