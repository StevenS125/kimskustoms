import React from 'react';
import styles from "./Nav.module.scss";
import { Link } from 'react-router-dom';

const Navigation = (props) => (
    <div id="myNav" className={styles.overlay}>
        <a className={styles.closebtn} onClick={() => props.closeNav()}>
        &times;
        </a>
        <div className={styles.overlaycontent}>
            <a> <Link to="/">Home</Link></a>
            <a> <Link to="/home">Furniture</Link></a>
            <a> <Link to="/home">Shop</Link></a>
            <a> <Link to="/home">Our Story</Link></a>
            <a> <Link to="/home">Contact</Link></a>
        </div>
        </div>
);

export default Navigation