import React from 'react';
import styles from "./Nav.module.scss";
import { Link } from 'react-router-dom';
import logo from '../logo.png';

const Navigation = (props) => (
    <div id="myNav" className={styles.overlay}>
        <a className={styles.closebtn} onClick={() => props.closeNav()}>
        &times;
        </a>
        <div className={styles.overlaycontent}>
            <Link to="/">Home</Link>
            <Link to="/process">The Magic</Link>
            <Link to="/home">Shop</Link>
            <Link to="/home">Our Story</Link>
            <Link to="/home">Contact</Link>
            <img src={logo} className={styles.kustomLogo} alt="Kim's Kustoms logo"/>
        </div>
        </div>
);

export default Navigation