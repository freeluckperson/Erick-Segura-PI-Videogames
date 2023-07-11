import React, { useState } from "react";
import styles from "./CardsContainer.module.css";
import Paginacion from "../Paginacion/Paginacion";
import { Card } from "../";
import { useDispatch, useSelector } from "react-redux";
import { filterByGenres } from "../../redux/actions";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const { filterVideogames: games } = useSelector((state) => state);

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(15);
  const maximo = games.length / porPagina;

  const handlerFilter = (e) => {
    dispatch(filterByGenres([e.target.value]));
  };

  return (
    <div>
      <select onChange={handlerFilter}>
        <option value="RPG">RPG</option>
        <option value="Shooter">Shooter</option>
        <option value="Puzzle">Puzzle</option>
      </select>

      <div className={styles.container}>
        {games
          .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
          .map(({ id, name, imag, genres }) => (
            <Card name={name} imag={imag} genres={genres} id={id} key={id} />
          ))}
      </div>
      <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
    </div>
  );
};

export default CardsContainer;
