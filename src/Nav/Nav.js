import React from 'react';
import styles from "./Nav.module.scss";

const Navigation = (props) => (
    <div id="myNav" className={styles.overlay}>
        <a className={styles.closebtn} onClick={() => props.closeNav()}>
        &times;
        </a>
        <div className={styles.overlaycontent}>
        <a href="">Vitamin Juice</a>
        <a href="">Clothing</a>
        <a href="">Supplements</a>
        <a href="">Contact</a>
        </div>
        </div>
);

export default Navigation