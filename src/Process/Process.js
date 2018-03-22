import React from 'react';
import styles from './Process.module.scss';
import data from '../data/data.json';
import Card from './Card';
import Loading from '../Loading/Loading';

export default class Process extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      loading: true,
      cards: [],
    }

    this.showBack = this.showBack.bind(this);
  }

  componentWillMount() {
    this.setState({
      cards: data,
    });
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false}), 2000);
  }

  showBack(card) {
    let cards = this.state.cards;
    cards[card.id].animation = 'card';

    this.setState({
      cards,
    });
  }

  render() {
    return (
        <div className={styles.container}>
          <div className={styles.processHero}>
          <h1>We take our Projects from the discard pile to quality showroom Furniture</h1>
          </div>
          <div>
          {
          this.state.loading ? <Loading /> :
          <div className={styles.Grid + " " + styles.animated + " " + styles.bounceInUp}>
          {
            this.state.cards.map((card) => (
              <Card 
                duration={150} 
                key={card.id} 
                card={card} 
                showBack={this.showBack}
              />
            ))
          }
        </div>
        }
              </div>
              </div>


    );
  }
}