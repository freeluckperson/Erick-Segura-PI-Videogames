import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  return (
    <div className={styles.mainCotainer}>
      <Link to="/home" className={styles.navLink}> HOME </Link>
      <Link to="/create" className={styles.navLink}> CREATE </Link>
      <div style={{ marginLeft: "35em", marginTop: "-3em" }}>
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
