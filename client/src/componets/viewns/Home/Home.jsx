import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { CardsContainer } from "../..";
import { useDispatch } from "react-redux";
import { getGames } from "../../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  return (
    <div>
      <CardsContainer />
      <Link to="/" className={styles.navLink}>BACK</Link>
    </div>
  );
};

export default Home;
