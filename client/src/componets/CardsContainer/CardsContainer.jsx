import React from "react";
import { Card } from "../";
import styles from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const games = useSelector((state) => state.videogames);

  return (
    <div className={styles.container}>
      {games.map(({ id, name, imag, genres }) => (
        <Card name={name} imag={imag} genres={genres} key={id} />
      ))}
    </div>
  );
};

export default CardsContainer;

//imag={vg.imag}
//genres={game.genres}
