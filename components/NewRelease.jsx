import React from "react";
import CardGame from "./CardGame";
import styles from "../styles/NewRelease.module.css";

const NewRelease = ({gamesPopularity}) => {
  const cutgamePopularity = gamesPopularity.slice(0,12);

 
  return (
    <section className={styles.newrelease}>
      <h2 className={styles.newrelease__title}>New Release</h2>
      <div className={styles.newReleaseContainer}>
        {cutgamePopularity.map((game)=> (
          <CardGame key={game.id} game={game} />

        ))}
        
      </div>
    </section>
  );
};

export default NewRelease;
