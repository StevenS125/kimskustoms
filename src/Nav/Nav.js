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
            <Link onClick={() => props.closeNav()} to="/">Home</Link>
            <Link onClick={() => props.closeNav()} to="/process">The Magic</Link>
            <Link onClick={() => props.closeNav()} to="/shop">Shop</Link>
            <Link onClick={() => props.closeNav()} to="/story">Our Story</Link>
            <Link onClick={() => props.closeNav()} to="/Contact">Contact</Link>
            <img src={logo} className={styles.kustomLogo} alt="Kim's Kustoms logo"/>
        </div>
        </div>
);

export default Navigation