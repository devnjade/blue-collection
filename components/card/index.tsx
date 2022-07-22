import React from "react";
import styles from './index.module.scss';
import Image from 'next/image';

interface CardProps {
  src?: string | any,
  name?: string,
  price?: string,
  pic?: string,
}

const Card: React.FC<CardProps> = ({ src, name, price, pic }) => {
  return  (
    <div className={styles.card}>
      <div>
        <Image src={src} height={200} width={`100%`} alt="nft-image" />
      </div>
      <div className={styles.details}>
        <div className={styles.left}>
          <Image src={src} alt="nft-image" />
          <div className={styles.owner}>
            <p>{name}</p>
            <span>{price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;