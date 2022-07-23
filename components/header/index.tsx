import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from './index.module.scss';
import search from 'assets/svgs/search.svg';
import bag from 'assets/svgs/bag.svg';
import user from 'assets/svgs/user.svg';
import { motion } from "framer-motion";

const header = { 
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const Header: React.FC = () => {
  return  (
    <motion.header 
      initial="hidden" 
      animate="visible" 
      variants={header}
      className={styles.header}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.navbar}>
        <div className={styles.left}>
          <p>Blue</p>
        </div>
        <div className={styles.center}>
          <Link href="">
            <p>Home</p>
          </Link>
          <Link href="">
            <p>Top Sales</p>
          </Link>
          <Link href="">
            <p>Delivery</p>
          </Link>
        </div>
        <div className={styles.right}>
          <button>
            <Image src={search} alt="search" />
          </button>
          <button>
            <Image src={bag} alt="search" />
          </button>
          <button>
            <Image src={user} alt="search" />
          </button>
        </div>
      </div>
    </motion.header>
  )
}

export default Header;