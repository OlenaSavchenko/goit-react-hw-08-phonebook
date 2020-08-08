import React from 'react';
import styles from './UserMenu.module.css';

const UserMenu = ({ name, onLogout }) => (
  <div className={styles.container}>
    <span className={styles.name}>Welcome, {name} </span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

export default UserMenu;
