import React from 'react';
import styles from './Contact.module.scss';

export default class Contact extends React.Component {
  render() {
    return (
        <div className={styles.container}>
        <h2>Contact Us!</h2>

        <form action="#0">

<div>
  <input type="text" id="first_name" name="first_name" required placeholder=" " />
  <label htmlFor="first_name">First Name</label>
</div>

<div>
  <input type="text" id="last_name" name="last_name" required placeholder=" " />
  <label htmlFor="last_name">Last Name</label>
</div>

<div>
  <input type="email" id="email" name="email" required placeholder=" " />
  <label htmlFor="email">Email Address</label>
  <div className={styles.requirements}>
    Must be a valid email address.
  </div>
</div>

<div>
  <input type="password" id="password" name="password" required placeholder=" " pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" />
  <label htmlFor="password">Password</label>
  <div className={styles.requirements}>
    Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.
  </div>
</div>

<input type="submit" value="Sign Up" />

</form>

            </div>

    );
  }
}