import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChevronDown,
  faCircleUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.barsony}>SONY</div>
      <header className={styles.header}>
        <div className={styles.header__logo}>
          <h1>
            GAME<span>S</span>TORE
          </h1>
          <h2>Tienda Virtual</h2>
        </div>
       

        <nav className={styles.header__navbar}>
          <div className={styles.navbar__username}>
            <span>Maximiliano</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ fontSize: 15, color: "#383838" }}
            />
          </div>

          <FontAwesomeIcon
            icon={faCircleUser}
            style={{ fontSize: 20, color: "#383838" }}
          />

          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ fontSize: 20, color: "#383838" }}
          />

          <div className={styles.navbar__inputcontainer}>
            <FontAwesomeIcon
              icon={faSearch}
              style={{
                fontSize: 20,
                color: "#383838",
                position: "absolute",
                left: "15%",
                top: "50%",
                transform: "translate(-50%,-50%)",
              }}
            />
            <input
              type="search"
              placeholder="Search"
              className={styles.navbar__inputsearch}
            />
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
