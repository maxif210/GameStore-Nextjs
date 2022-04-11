import React from 'react'
import styles from "../styles/Moba.module.css";
import CardGame from './CardGame';


const Moba = ({gamesMoba}) => {
    const cutGamesMoba = gamesMoba.slice(0,4);
  return (
    <section className={styles.mobaContainer}>
        <h3 className={styles.title}>Moba</h3>
        <div className={styles.mobaContainer__cards}>
        {cutGamesMoba.map((game)=> (
          <CardGame key={game.id} game={game} />

        ))}
        
      </div>


    </section>
  )
}

export default Moba