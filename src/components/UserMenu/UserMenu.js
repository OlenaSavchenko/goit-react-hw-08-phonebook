import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import styles from './UserMenu.module.css';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.container}>
    <img src={avatar} alt="avatar" width="30" className={styles.avatar} />
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
  avatar: PropTypes.string.isRequired,
};

export default UserMenu;
