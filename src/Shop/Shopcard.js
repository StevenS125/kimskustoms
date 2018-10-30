import React from 'react';
import LazyLoad from "react-lazyload";
import styles from './Shopcard.module.scss';


const Shopcard = (props) =>  (
<LazyLoad height={400} offset={-100}>
    <div className={styles.shopcardContainer}>
      <img  className={styles.cardimg}
            src={props.card.afterimg} alt="kitchen table" />
      <div className={styles.shopdescript}>
      <h2>{props.card.type}</h2>
      <div>
      {props.card.descript}
      <button onClick={()=> this.openModal()} className={styles.buyNow}>Buy Now</button>
      </div>
      
      </div>
    </div>
</LazyLoad>
);

export default Shopcard;