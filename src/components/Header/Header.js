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
          <input type="text" placeholder="поиск" />
        </div>
        <div className={styles.notification}>
          <HomeIcon style={{ fontSize: "2rem" }} />
          <ExploreIcon style={{ fontSize: "2rem" }} />
          <FavoriteBorderIcon style={{ fontSize: "2rem" }} />
          <AccountCircleIcon style={{ fontSize: "2rem" }} />
        </div>
      </div>
    </header>
  );
};

export default Header;
