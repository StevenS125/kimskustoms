import React from 'react';
import styles from './Background.module.scss'

export default class Background extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.landing}></div>
      </div>
    );
  }
}