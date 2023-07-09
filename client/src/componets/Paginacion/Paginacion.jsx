import React from "react";
import styles from "./Paginacion.module.css";

const Paginacion = (props) => {
  const { pagina, setPagina, maximo } = props;

  return (
    <div className={styles.container}>
      <button className={styles.previous}>PREVIOUS</button>
      <input type="text" />
      <p> de {Math.ceil(maximo)}</p>
      <button className={styles.next}>NEXT</button>
    </div>
  );
};

export default Paginacion;
