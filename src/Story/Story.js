import React from 'react';
import styles from './Story.module.scss';

export default class Story extends React.Component {
  render() {
    return (
        <div className={styles.container}>
          <div className={styles.landingleft}>
          <h1>Welcome  To  KIM'S  KUSTOM'S  Furniture</h1>
          
          <p>Do you have furniture you'd like to be restored?
            Here at Kim's Kustoms we may not know how to spell 
            but we sure do love fixing up antique furniture at an excellent price and value to you
          </p>
          </div>
            <div className={styles.landingright}>
            </div>

      </div>
    );
  }
}