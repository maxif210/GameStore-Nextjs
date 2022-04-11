import React from 'react'
import styles  from "../styles/SalesAndDeals.module.css";
import CardGameSales from './CardGameSales';


const SalesAndDeals = ({gamesSalesAndDeals}) => {
    const cutgamesSalesAndDeals = gamesSalesAndDeals.slice(0,4);

    const {} = cutgamesSalesAndDeals;
  return (
    <section className={styles.salesanddeals}>
        <h3 className={styles.salesanddeals__title}>Sales and Deals</h3>

        <div className={styles.salesanddeals__cardcontainer}>
            <div className={`${styles.card} ${styles.card__1}`}></div>
            <div className={`${styles.card} ${styles.card__2}`}></div>
            <div className={`${styles.card} ${styles.card__3}`}></div>
        </div>

        <div className={styles.mapeo}>
        {cutgamesSalesAndDeals.map((game)=> (
          <CardGameSales key={game.id} game={game} />

        ))}
        </div>
      
    </section>

  )
}

export default SalesAndDeals