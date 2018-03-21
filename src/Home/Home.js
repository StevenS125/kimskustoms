import React from 'react';
import styles from './Home.module.scss';

export default class Home extends React.Component {
  render() {
    return (
        <div className={styles.container}>
        <h1>Welcome to Kim's Kustoms</h1>
        <div className={styles.landing}>
        </div>

      </div>
    );
  }
}