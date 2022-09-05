
import React from 'react';
import { Link } from 'react-router-dom';
import CONSTANTS from '../../constants';
import styles from './CardsPerPage.module.scss';
import classnames from 'classnames';

function CardsPerPage({kitCards}) {
  const checkCard = card => {
    if(card.btnText) return true;
  }
  return (
    <div className={styles.cardContainer}>
      {kitCards.map((card, index) => (
        <div className={classnames(styles.card,{
          [styles.bigCard] : checkCard(card)
        })} key={index}>
          <div>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}${card.img}`} alt={`${card.imgAlt}`} />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
          {
            card.btnText &&
              <div className={styles.button}>
                <Link className={styles.button__link} to={`${card.btnSrc}`}>{card.btnText}</Link>
              </div>
          }
        </div>
      ))}
    </div>
  )
}

export default CardsPerPage
