import React, { Component } from 'react';
import Background from './Background/Background';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';
import logo from './logo.png';


//styles
import styles from './App.module.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      toggleLogo: true
    }

    this.toggleLogo = this.toggleLogo.bind(this);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  toggleLogo(event) {
    this.setState((prevState) => ({
      toggleLogo: !prevState.toggleLogo
    }));
  }


  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

render() {
  return (
    <div className={styles.app}>
    <header>
    <img src={logo} 
            className={this.state.toggleLogo ? 'static-logo' : 'static-logo animated jello'} 
            alt="logo"
            onMouseEnter={this.toggleLogo}
            onMouseLeave={this.toggleLogo}
            onClick={this.openNav}
          />
        <h1 
        className={this.state.toggleLogo ? "menu-hidden" : "menu animated bounceInDown"}
        onClick={this.openNav}
        >Menu</h1>
    <Nav closeNav={this.closeNav} />
      </header>
    <Background />
    <Footer />

    </div>
  );
}
}

export default App;