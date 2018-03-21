import React, { Component } from 'react';
import Header from './Header/Header';
import Background from './Background/Background';
import Footer from './Footer/Footer';


//styles
import styles from './App.module.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
    }
  }

render() {
  return (
    <div className={styles.app}>
    <Header />
    <Background />
    <Footer />

    </div>
  );
}
}

export default App;