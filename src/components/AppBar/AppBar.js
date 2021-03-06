import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import styles from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

AppBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
export default AppBar;
