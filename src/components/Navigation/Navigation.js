import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Navigation.module.css';
import routes from '../../routes';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    {isAuthenticated && (
      <NavLink
        to={routes.contacts}
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Phonebook
      </NavLink>
    )}
  </nav>
);

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Navigation;
