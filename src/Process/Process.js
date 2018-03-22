import React from 'react';
import styles from './Process.module.scss';
import LazyLoad from "react-lazyload";

export default class Process extends React.Component {
  render() {
    return (
        <div className={styles.container}>
          <div className={styles.processHero}>
          <h1>We take our Projects from the discard pile to quality showroom Furniture</h1>
          </div>
          <div className={styles.landingLeft}>
          <div className={styles.cardTitle}>

              </div>
              </div>
            <div className={styles.landingright}>
            </div>

      </div>
    );
  }
}