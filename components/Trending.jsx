import React from "react";
import { useEffect, useState } from "react/cjs/react.production.min";
import CardTrending from "./CardTrending";
import styles from "../styles/Trending.module.css";

const Trending = ({ gamesRelevance }) => {

  const cutGamesTrending = gamesRelevance.slice(0,3);

  return (
    <div className={styles.trending}>
      <h2 className={styles.trending__title}>Trending</h2>
      <div className={styles.trending__cardtrending}>
        {cutGamesTrending.map((game) => (
          <CardTrending key={game.id} game={game} />
        ))}
      </div>
      {/* <div >
        <CardTrending />
        <CardTrending />
        <CardTrending />
      </div> */}
    </div>
  );
};

export default Trending;
