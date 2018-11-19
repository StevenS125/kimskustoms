import React from 'react';
import styles from './Shop.module.scss';
import data from '../data/data.json';
import Shopcard from './Shopcard';
import Loading from '../Loading/Loading';


export default class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      loading: true,
      cards: [],
      modalIsOpen: false,
    }

    this.showBack = this.showBack.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

// Do NOT move this into the constructor, data has not been loaded until mount

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false}), 2000);
    this.setState({
      cards: data,
    });
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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
          <div>
          {
          this.state.loading ? <Loading /> :
          <div className={styles.Grid}>
          {
            this.state.cards.map((card) => (
              <Shopcard 
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