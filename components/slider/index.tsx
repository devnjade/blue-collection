import Card from "components/card";
import { data } from "mocks/nfts";
import React from "react";
import styles from './index.module.scss';

const Slider: React.FC = () => {
  return  (
    <div className={styles.wrapper}>
      {data.map((i) => (
        <Card 
          key={i.id}
          src={i.src}
          name={i.name}
          pic={i.pic}
        />
      ))}
    </div>
  )
}

export default Slider;