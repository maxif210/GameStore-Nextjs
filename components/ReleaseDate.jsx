import React from 'react'
import styles from "../styles/ReleaseDate.module.css";
import CardGame from './CardGame';


const ReleaseDate = ({gamesReleaseDate}) => {
    const cutGameReleaseDate = gamesReleaseDate.slice(0,4);
  return (
    <section className={styles.releasedate}>
    <h3 className={styles.releasedate__title}>Coming Soon</h3>
    <div className={styles.releasedate__cardgamecontainer}>
        {cutGameReleaseDate.map((game)=> (
          <CardGame key={game.id} game={game} />

        ))}
        
      </div>
      </section>
  )
}

export default ReleaseDate