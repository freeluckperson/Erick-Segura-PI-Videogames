import React, { useState } from "react";
import styles from "./Paginacion.module.css";

const Paginacion = (props) => {
  const { pagina, setPagina, maximo } = props;
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(input + 1);
    setPagina(pagina + 1);
  };
  const prevPage = () => {
    setInput(input - 1);
    setPagina(pagina - 1);
  };

  const onKeyDown = e => {
    const { value } = e.target;
    if (e.keyCode == 13) {
      setPagina(parseInt(value));
      if (parseInt(value < 1) || parseInt(value) > Math.ceil(maximo) || isNaN(parseInt(value))) {
        setPagina(1);
        setInput(1);
      }else{
        setPagina(parseInt(value));
      }
    }
  };

  const onChange = e => {
    setInput(e.target.value)
  };

  return (
    <div className={styles.container}>
      <button disabled={pagina === 1 } onClick={prevPage} className={styles.previous}>PREV</button>
      <input onChange={e=> onChange(e)} onKeyDown={e => onKeyDown(e)} type="text" value={input} />
      <p> de {Math.ceil(maximo)}</p>
      <button disabled={ pagina === Math.ceil(maximo) } onClick={nextPage} className={styles.next}>NEXT</button>
    </div>
  );
};

export default Paginacion;
