import React from 'react';
import styles from "./Nav.module.scss";

const Navigation = (props) => (
    <div id="myNav" className={styles.overlay}>
        <a className={styles.closebtn} onClick={() => props.closeNav()}>
        &times;
        </a>
        <div className={styles.overlaycontent}>
        <a href="/">Home</a>
        <a href="/furniture">Furniture</a>
        <a href="/shop">Shop</a>
        <a href="/story">Our Story</a>
        <a href="/contact">Contact</a>
        </div>
        </div>
);

export default Navigation