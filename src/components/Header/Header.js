import React from "react";
import FloatingActionButtons from "./FloatingActionButtons";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1 className={styles.header__logo}>Instagram</h1>
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="поиск" />
        </div>
        <div className={styles.notification}></div>
      </div>
    </header>
  );
};

export default Header;
