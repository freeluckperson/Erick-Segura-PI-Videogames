import React from "react";
import styles from "./CardsContainer.module.css";
import Paginacion from "../Paginacion/Paginacion";
import { Card } from "../";
import { useState } from "react";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const games = useSelector((state) => state.videogames);

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(15);
  const maximo = games.length / porPagina;

  return (
    <div>
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

// import React from "react";
// import { Card } from "../";
// import styles from "./CardsContainer.module.css";
// import { useSelector } from "react-redux";

// const CardsContainer = () => {
//   const games = useSelector((state) => state.videogames);

//   return (
//     <div className={styles.container}>
//       {games.map(({ id, name, imag, genres }) => (
//         <Card name={name} imag={imag} genres={genres} key={id} />
//       ))}
//     </div>
//   );
// };

// export default CardsContainer;
