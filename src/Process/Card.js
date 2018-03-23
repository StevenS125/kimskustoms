import React from 'react';
import LazyLoad from "react-lazyload";
import styles from './Card.module.scss';

const Card = (props) =>  (
<LazyLoad height={400} offset={-100}>
    <div className={styles.cardContainer}>
    <h2>{props.card.type}</h2>
      <img height={400} width={400} border-radius={5} src={props.card.img} alt="kitchen table" />
      <div className={styles.descript}>
      </div>
    </div>
</LazyLoad>
);

export default Card;