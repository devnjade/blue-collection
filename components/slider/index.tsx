import Card from "components/card";
import { data } from "mocks/nfts";
import React from "react";
import styles from './index.module.scss';
import { motion } from "framer-motion";

const slider = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 0 }
}

const Slider: React.FC = () => {
  return  (
    <motion.div 
      className={styles.wrapper}
      initial="hidden"
      animate="visible"
      variants={slider}
      transition={{ duration: 0.8 }}
    >
      {data.map((i) => (
        <Card 
          key={i.id}
          src={i.src}
          name={i.name}
          pic={i.pic}
        />
      ))}
    </motion.div>
  )
}

export default Slider;