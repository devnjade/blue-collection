import { Header, Slider } from "components";
import React from "react";
import styles from './index.module.scss';
import { motion } from "framer-motion";

const header = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 }
}

const pill = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const HomeView: React.FC = () => {
  return  (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.middle}>
          <motion.p 
            className={styles.header}
            initial="hidden"
            animate="visible"
            variants={header}
            transition={{ duration: 0.8 }}
          >
            The NFT Collection Of The Year
          </motion.p>
          <motion.div 
            className={styles.stats}
            initial="hidden"
            animate="visible"
            variants={pill}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.type}>
              <p>6,000,000</p>
              <span>total community members</span>
            </div>
            <div className={styles.type}>
              <p>6,000,000</p>
              <span>total community members</span>
            </div>
          </motion.div>
        </div>
        <Slider />
      </div>
    </>
  )
}

export default HomeView;