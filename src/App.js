import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Background from './Background/Background';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';
import logo from './logo.png';
import Home from './Home/Home';
import Process from './Process/Process';
import Contact from './Contact/Contact';
import Story from './Story/Story';
import Shop from './Shop/Shop';


//styles
import styles from './App.module.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      toggleLogo: true,
    }

    this.toggleLogo = this.toggleLogo.bind(this);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }


  componentDidMount() {
    setTimeout(() => this.setState({ loading: false}), 3000);
  }

  toggleLogo(event) {
    this.setState((prevState) => ({
      toggleLogo: !prevState.toggleLogo
    }));
  }


  openNav() {
    document.getElementById("myNav").style.width = "40%";
  }

  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


render() {
  return (
    <Router>
    <div className={styles.app}>
    <header>
      <div className={styles.kustomlogo}>
    <img src={logo} 
            className={this.state.toggleLogo ? styles.staticlogo : styles.staticlogojello} 
            alt="Kim's Kustom's logo"
            onMouseEnter={this.toggleLogo}
            onMouseLeave={this.toggleLogo}
            onClick={this.openNav}
          />
          </div>
        <h1 
        className={this.state.toggleLogo ? styles.menuhidden : "menu animated bounceInDown"}
        onClick={this.openNav}
        >Navigation</h1>
    <Nav closeNav={this.closeNav} />
      </header>
      <Background />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/process" component={Process}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/story" component={Story}/>
        <Route path="/shop" component={Shop}/>

      
      </Switch>
    <Footer />
    </div>
</Router>
  );
}
}

export default App;