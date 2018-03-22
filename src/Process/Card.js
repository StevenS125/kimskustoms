import React from 'react';
import LazyLoad from "react-lazyload";
import styles from './Card.module.scss';

const Card = (props) =>  (
<LazyLoad height={400} offset={-100}>
  <div className={props.card.animation}>
    <div className="container-back back">
      <img height={300} width={300} src={props.card.img} alt="kitchen table" />
    </div>
  </div>
</LazyLoad>
);

export default Card;