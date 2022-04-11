import Image from "next/image";
import React from "react";
import styles from "../styles/Header.module.css";
import Trending from "./Trending";

const Header = ({gamesRelevance}) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.container__title}>
          <Image
            layout="responsive"
            width={311}
            height={163}
            src="/headerLogo.svg"
            alt="title best game of the year"
          ></Image>
        </div>
        <div>
          <button className={styles.container__price}>$799.99</button>
        </div>
      </div>
        <div className={styles.header__trendingContainer}>
          <Trending gamesRelevance={gamesRelevance} />
        </div>

      <br />
    </div>
  );
};

export default Header;
