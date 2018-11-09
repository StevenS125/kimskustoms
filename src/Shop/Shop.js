import React from 'react';
import styles from './Shop.module.scss';
import data from '../data/data.json';
import Shopcard from './Shopcard';
import Loading from '../Loading/Loading';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      loading: true,
      cards: data,
      modalIsOpen: false,
    }

    this.showBack = this.showBack.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }



  componentDidMount() {
    // setTimeout(() => this.setState({ loading: false}), 2000);
    // this.setState({
    //   cards: data,
    // });
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
              <Modal
          isOpen={this.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={styles.customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
              </div>
              </div>


    );
  }
}