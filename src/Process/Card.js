import React from 'react';
import LazyLoad from "react-lazyload";
import styles from './Card.module.scss';

const Card = (props) =>  (
<LazyLoad height={400} offset={-100}>
    <div className={styles.cardContainer}>
      <img height={400} width={'50%'} border-radius={'5%'} src={props.card.img} alt="kitchen table" />
      <img height={400} width={'50%'} border-radius={'5%'} src={props.card.afterimg} alt="kitchen table" />
      <div className={styles.descript}>
      <h2>{props.card.type}</h2>
      {props.card.descript}
      </div>
    </div>
</LazyLoad>
);

export default Card;