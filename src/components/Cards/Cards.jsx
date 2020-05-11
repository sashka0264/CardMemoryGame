import React from 'react';
import styles from "./Cards.module.scss";

const Cards = ({ gridMap, cardClicked }) => {
  console.log(gridMap.length)
  return <div className={styles.cards} style={{width: 59 * Math.sqrt(gridMap.length) }}>
    {gridMap.map((item) => {
      return (
        <div 
          className={styles.card} 
          key={item.id} 
          id={item.id}
          style={{backgroundColor: item.opened ? item.color : 'orange' }}
          onClick={() => cardClicked(item.id, item.color)}
        >
          {item.opened ? '' : '?'}
        </div>
      )
    })}
  </div>
}

export default Cards;