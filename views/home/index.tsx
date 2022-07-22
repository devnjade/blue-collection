import { Header, Slider } from "components";
import React from "react";
import styles from './index.module.scss';

const HomeView: React.FC = () => {
  return  (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.middle}>
          <p className={styles.header}>The NFT Collection Of The Year</p>
          <div className={styles.stats}>
            <div className={styles.type}>
              <p>6,000,000</p>
              <span>total community members</span>
            </div>
            <div className={styles.type}>
              <p>6,000,000</p>
              <span>total community members</span>
            </div>
          </div>
        </div>
        <Slider />
      </div>
    </>
  )
}

export default HomeView;