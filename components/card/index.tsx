import React from "react";
import styles from './index.module.scss';
import Image from 'next/image';

interface CardProps {
  src?: string | any,
  name?: string,
  price?: string,
  pic?: string | any,
}

const Card: React.FC<CardProps> = ({ src, name, price, pic }) => {
  return  (
    <div className={styles.card}>
      <div>
        <Image src={src} width={400} height={700} objectFit="cover" layout="fixed" alt="nft-image" />
      </div>
    </div>
  )
}

export default Card;