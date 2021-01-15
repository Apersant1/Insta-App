import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1 className={styles.header__logo}>Instagram</h1>
        </div>
        <div className={styles.search}>
          <input
            className={styles.search__input}
            type="text"
            placeholder="поиск"
          />
        </div>
        <div className={styles.notification}>
          <HomeIcon style={{ fontSize: "1.6em" }} />
          <ExploreIcon style={{ fontSize: "1.6em" }} />
          <FavoriteBorderIcon style={{ fontSize: "1.6em" }} />
          <AccountCircleIcon style={{ fontSize: "1.6em" }} />
        </div>
      </div>
    </header>
  );
};

export default Header;
