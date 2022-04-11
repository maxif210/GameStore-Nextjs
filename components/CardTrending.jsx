import React from "react";
import styles from "../styles/CardTrending.module.css";

const CardTrending = ({ game }) => {
  const { title, thumbnail } = game;

  return (
    <>
      <style jsx>
        {`
          .cardtrending {
            background-image: url(${thumbnail});
          }
        `}
      </style>

      <div className={`cardtrending ${styles.cardtrending}`}>
        <h3>{title}</h3>
        <div className={styles.cardtrending__footer}>
          <p className={styles.cardtrending__price}>$59.99</p>
          <button className={styles.cardtrending__addtocart}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CardTrending;
