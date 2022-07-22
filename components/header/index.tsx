import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from './index.module.scss';
import search from 'assets/svgs/search.svg';
import bag from 'assets/svgs/bag.svg';
import user from 'assets/svgs/user.svg';

const Header: React.FC = () => {
  return  (
    <header className={styles.header}>
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
    </header>
  )
}

export default Header;