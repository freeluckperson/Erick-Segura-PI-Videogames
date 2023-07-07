import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { CardsContainer } from "../..";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGames } from "../../../redux/actions";

const Home = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGames());
  }, []);

  return (
    <div>
      <h2>Soy el componente Home</h2>
      <CardsContainer />
      <Link to="/" className={styles.navLink}>
        BACK
      </Link>
    </div>
  );
};

export default Home;
