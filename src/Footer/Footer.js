import React from 'react';
import styles from './Footer.module.scss';
import logo from './logo.svg';

const Footer = () => {
  return (
    <div className={styles.footer}> Made with React
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Footer