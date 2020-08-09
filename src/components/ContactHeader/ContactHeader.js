import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactHeader.module.css';

const ContactHeader = ({ name, avatar }) => (
  <div className={styles.box}>
    <img src={avatar} alt="avatar" width="75" className={styles.avatar} />
    <span className={styles.name}> {name} </span>
  </div>
);

ContactHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default ContactHeader;
