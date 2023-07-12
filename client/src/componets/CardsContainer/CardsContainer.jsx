import React, { useState } from "react";
import styles from "./CardsContainer.module.css";
import Paginacion from "../Paginacion/Paginacion";
import { Card } from "../";
import { useDispatch, useSelector } from "react-redux";
import {
  alphabetically,
  filterByGenres,
  filterByOrigin,
  orderByRating,
} from "../../redux/actions";

const CardsContainer = () => {
  const st = { width: "80px", marginBottom: "4em", marginRight: "1em" };
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  const { filterVideogames: games } = useSelector((state) => state);

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(15);
  const maximo = games.length / porPagina;

  const handlerFilter = (e) => {
    dispatch(filterByGenres([e.target.value]));
  };

  const handlerOrigin = (e) => {
    dispatch(filterByOrigin([e.target.value]));
  };

  const handlerOrder = (e) => {
    dispatch(orderByRating(e.target.value));
    setAux(true);
  };

  const handlerAlpha = (e) => {
    dispatch(alphabetically(e.target.value));
    setAux(true);
  };

  return (
    <div>
      <div className={styles.filtros}>
        <span>GENRES</span>
        <select onChange={handlerFilter} style={st}>
          <option value="Action">Action</option>
          <option value="Indie">Indie</option>
          <option value="Adventure">Adventure</option>
          <option value="RPG">RPG</option>
          <option value="Shooter">Shooter</option>
          <option value="Platformer">Platformer</option>
          <option value="Massively Multiplayer">Massively Multiplayer</option>
          <option value="Racing">Racing</option>
          <option value="Fighting">Fighting</option>
          <option value="Family">Family</option>
          <option value="Board Games">Board Games</option>
          <option value="Strategy">Strategy</option>
          <option value="Educational">Educational</option>
          <option value="Sports">Sports</option>
          <option value="Arcade">Arcade</option>
          <option value="Simulation">Simulation</option>
          <option value="Casual">Casual</option>
          <option value="Card">Card</option>
        </select>
        <span>RATING</span>
        <select onChange={handlerOrder} style={st}>
          <option value="Mayor">Mayor</option>
          <option value="Menor">Minor</option>
        </select>
        <span>A - Z</span>
        <select onChange={handlerAlpha} style={st}>
          <option value="A">A</option>
          <option value="Z">Z</option>
        </select>
        <span>DATA</span>
        <select onChange={handlerOrigin} style={st}>
          <option value="DB">DB</option>
          <option value="API">API</option>
        </select>
      </div>
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
